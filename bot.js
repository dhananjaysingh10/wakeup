import express from 'express';
import fetch from 'node-fetch';

const app = express()
const port = process.env.PORT || 3000;

const websiteUrl = 'https://cpblog.onrender.com/'; 
const interval = 15 * 60 * 1000; 
async function wakeUp() {
    try {
        const response = await fetch(websiteUrl);
        if (response.ok) {
            console.log(`Successfully pinged ${websiteUrl} at ${new Date().toISOString()}`);
        } else {
            console.error(`Failed to ping ${websiteUrl}. Status: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error pinging ${websiteUrl}:`, error.message);
    }
}
wakeUp();
setInterval(wakeUp, interval);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
