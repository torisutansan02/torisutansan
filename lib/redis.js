import Redis from 'ioredis';

let redis = null;

console.log('🔍 REDIS_URL at import:', process.env.REDIS_URL);

export default function getRedis() {
  if (!redis) {
    if (!process.env.REDIS_URL) {
      throw new Error('❌ REDIS_URL is not defined');
    }

    redis = new Redis(process.env.REDIS_URL);

    redis.on('connect', () => {
      console.log('✅ Connected to Redis');
    });

    redis.on('error', (err) => {
      console.error('❌ Redis error:', err);
    });
  }

  return redis;
}
