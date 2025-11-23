const express = require('express');
const multer = require('multer');

const router = express.Router();

// Keep files in memory so we can log the binary data directly
const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        // Accept webm audio/video
        if (file.mimetype === 'audio/webm' || file.mimetype === 'video/webm') {
            cb(null, true);
        } else {
            cb(new Error('Only webm audio/video is allowed'), false);
        }
    },
    limits: {
        fileSize: 50 * 1024 * 1024 // optional: limit to 50MB
    }
});

// POST / (expects form field "audio" with the webm file)
router.post('/', upload.single('audio'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No audio file uploaded (field name must be "audio")' });
    }

    const { originalname, mimetype, size, buffer } = req.file;

    // Log basic info
    console.log('Received audio file:', { originalname, mimetype, size });

    // Show audio data: log base64 (truncated to avoid flooding the console)
    const b64 = buffer.toString('base64');
    const preview = b64.length > 2000 ? b64.slice(0, 2000) + '...<truncated>' : b64;
    console.log('Audio base64 (preview):', preview);

    // Respond with 200 OK
    return res.sendStatus(200);
});

module.exports = router;