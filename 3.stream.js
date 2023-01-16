import { pipeline } from 'node:stream/promises';
import fs from 'node:fs';

class StreamService {
    createLargeFile(fileName) {
        const writer = fs.createWriteStream(fileName);
        for (let i = 0; i < 3000000; i++) {
            writer.write(`Oh, hi Mark, my name is #${i}!\n`);
        }
        console.log('All writes are now complete.');
    }

    async makeCopy(fileName) {
        await pipeline(
            fs.createReadStream(fileName),
            fs.createWriteStream('copy.txt'),
        );
        console.log('Copy was created.');
    }
}

const fileName = 'stream.txt';
const stream = new StreamService();
stream.createLargeFile(fileName);
stream.makeCopy(fileName);