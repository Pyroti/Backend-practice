import { EventEmitter } from 'node:events';

class LoggerService extends EventEmitter {
    log = (text) => {
        this.emit('log', text)
    }
}

const logger = new LoggerService();

logger.on('log', (text) => {
    console.log(`${new Date}: ${text}`);
})

logger.log('user added');

console.log(logger.listenerCount('log'))