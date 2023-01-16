import fs from "fs";
import https from 'https';

https.get('https://nodejs.org/api/events.html#class-eventemitter', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    fs.writeFile("index.html", data, (error) => {
        if(error) throw error;
        console.log("The file was received");
    });
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});