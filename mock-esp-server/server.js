const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');
const cors = require('cors');
const mime = require('mime-types');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT | 5001

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock SPIFFS directory
const SPIFFS_DIR = './spiffs';
const UPLOAD_DIR = './uploads';

// Create directories if they don't exist
fs.ensureDirSync(SPIFFS_DIR);
fs.ensureDirSync(UPLOAD_DIR);

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, SPIFFS_DIR);
  },
  filename: (req, file, cb) => {
    // Keep original filename like ESP32
    cb(null, file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  }
});

// Helper functions
function getSPIFFSStats() {
  const files = fs.readdirSync(SPIFFS_DIR);
  let totalSize = 0;
  
  files.forEach(file => {
    const filePath = path.join(SPIFFS_DIR, file);
    const stats = fs.statSync(filePath);
    totalSize += stats.size;
  });

  return {
    totalBytes: 1024 * 1024 * 1024, // Mock 1GB total like SPIFFS
    usedBytes: totalSize,
    fileCount: files.length
  };
}

function fileListProcessor() {
  let output = "";
  try {
    const files = fs.readdirSync(SPIFFS_DIR);
    
    files.forEach(file => {
      const filePath = path.join(SPIFFS_DIR, file);
      const stats = fs.statSync(filePath);
      output += `File: ${file} | Size: ${stats.size} bytes\n`;
    });
    
    if (files.length === 0) {
      output = "No files in SPIFFS\n";
    }
  } catch (error) {
    output = "Error reading SPIFFS directory\n";
  }
  return output;
}

// Routes - Replicating ESP32 endpoints

// POST /api/file/upload - File upload endpoint
app.post('/api/file/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    console.log(`📁 File upload: ${req.file.originalname} (Size: ${req.file.size} bytes)`);
    
    const stats = getSPIFFSStats();
    console.log(`📊 SPIFFS Stats - Used: ${stats.usedBytes} bytes, Total: ${stats.totalBytes} bytes`);

    res.status(200).json({
      message: 'Audio file uploaded and saved to SPIFFS successfully!',
      filename: req.file.originalname,
      size: req.file.size,
      spiffsStats: stats
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'File upload failed' });
  }
});

// GET /api/file/clear - Clear SPIFFS
app.get('/api/file/clear', (req, res) => {
  try {
    console.log('🗑️ Received clear SPIFFS request');
    
    // Remove all files in SPIFFS directory
    const files = fs.readdirSync(SPIFFS_DIR);
    files.forEach(file => {
      fs.removeSync(path.join(SPIFFS_DIR, file));
    });
    
    const stats = getSPIFFSStats();
    console.log('✅ SPIFFS successfully formatted and cleared');
    
    const response = `SPIFFS successfully formatted and cleared! Used SPIFFS Space: ${stats.usedBytes} bytes\n`;
    
    res.status(200).json({
      message: response,
      spiffsStats: stats
    });
  } catch (error) {
    console.error('Clear error:', error);
    res.status(500).json({ error: 'Failed to format SPIFFS!' });
  }
});

// GET /api/file/list - List files
app.get('/api/file/list', (req, res) => {
  try {
    const fileList = fileListProcessor();
    console.log('📋 Sent file list to client');
    
    res.status(200).set('Content-Type', 'text/plain').send(fileList);
  } catch (error) {
    console.error('List error:', error);
    res.status(500).json({ error: 'Failed to list files' });
  }
});

// GET /api/file/delete - Delete specific file
app.get('/api/file/delete', (req, res) => {
  try {
    const filename = req.query.filename;
    
    if (!filename) {
      return res.status(400).json({ error: 'Missing filename parameter in query' });
    }
    
    const filePath = path.join(SPIFFS_DIR, filename);
    console.log(`🗑️ Received request to delete: ${filePath}`);
    
    if (fs.existsSync(filePath)) {
      fs.removeSync(filePath);
      console.log(`✅ File deleted: ${filename}`);
      res.status(200).json({ message: `File deleted successfully: ${filename}` });
    } else {
      console.log(`❌ File not found: ${filename}`);
      res.status(404).json({ error: `File not found: ${filename}` });
    }
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Failed to delete file' });
  }
});

// GET /api/file/download - Download file
app.get('/api/file/download', (req, res) => {
  try {
    const filename = req.query.filename;
    
    if (!filename) {
      return res.status(400).json({ error: 'Missing filename parameter in query' });
    }
    
    const filePath = path.join(SPIFFS_DIR, filename);
    console.log(`📥 Download request for: ${filePath}`);
    
    if (fs.existsSync(filePath)) {
      const mimeType = mime.lookup(filename) || 'application/octet-stream';
      
      res.setHeader('Content-Type', mimeType);
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
      
      console.log(`✅ File '${filename}' sent successfully`);
    } else {
      console.log(`❌ File not found: ${filename}`);
      res.status(404).json({ error: `File not found: ${filename}` });
    }
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ error: 'Failed to download file' });
  }
});

// GET /api/stats - Get SPIFFS statistics
app.get('/api/stats', (req, res) => {
  try {
    const stats = getSPIFFSStats();
    res.status(200).json(stats);
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Failed to get statistics' });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  const stats = getSPIFFSStats();
  res.json({
    message: 'ESP32 Mock Server Running 🚀',
    endpoints: [
      'POST /api/file/upload - Upload file',
      'GET  /api/file/clear - Clear all files',
      'GET  /api/file/list - List files',
      'GET  /api/file/delete?filename=xxx - Delete file',
      'GET  /api/file/download?filename=xxx - Download file',
      'GET  /api/stats - Get storage statistics'
    ],
    spiffsStats: stats
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 ESP32 Mock Server running on port ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`📁 SPIFFS Directory: ${path.resolve(SPIFFS_DIR)}`);
  
  const stats = getSPIFFSStats();
  console.log(`📊 Initial SPIFFS Stats - Used: ${stats.usedBytes} bytes, Files: ${stats.fileCount}`);
});