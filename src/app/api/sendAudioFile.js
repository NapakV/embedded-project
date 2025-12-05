// import dotenv from 'dotenv';
// dotenv.config('.config');
// const ESP_API=process.env.ESP_API
const ESP_API='http://localhost:5001'
// const { ESP_IP_ADDRESS } = process.env;
export default async function sendAudioFile(audio, filename = `recording-${Date.now()}.webm`){
    // console.log(audio)
    // console.log (ESP_IP_ADDRESS)
    const formData = new FormData();
    formData.append('file', audio, filename);
    console.log(formData)
    const response = await fetch(`${ESP_API}/api/file/upload`, {
        method: 'POST',
        body: formData
    });
    const result = await response.json();
    console.log(555)
    console.log(result)
    return result ;
}