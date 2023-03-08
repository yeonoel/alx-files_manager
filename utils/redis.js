import { createClient } from 'redis';
import { promisify } from 'util';

class RedisClient {

    constructor() {
        /**
         * new redisClient
        */
        this.client = createClient();
        this.isClientConnected = true
        this.client.on('error', (err) => {
            console.log('failed connection to redis: ' + err.message || err.toString());
            this.isClientConnected = false;
        });
        this.client.on('connect', () =>{
            this.isClientConnected = true;
        });
    }
 
    /*
    * check if client on connection is okay or not
    * @return Bollean
    */
    isAlive() {
        return this.isClientConnected;
    }
    /*
    * @key: the information key
    * @return the Redis value stored for this key
    */ 
    async get(key) {
        return promisify(this.client.GET).bind(this.client)(key);
    }

    /*
    * store informations in redis
    * @key: string key
    * @value: value
    * @duration: expiration key
    */
    async set(key, value, duration) {
        await promisify(this.client.SETEX)
            .bind(this.client)(key, duration, value);
    }

    async del(key) {
        await promisify(this.client.DEL).bind(this.client)(key);
    }
}

export const redisClient = new RedisClient();
export default redisClient;