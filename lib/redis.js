// lib/redis.js
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL); // 🔥 Make sure REDIS_URL is set correctly

redis.on('connect', () => {
  console.log('✅ Connected to Redis');
});

redis.on('error', (err) => {
  console.error('❌ Redis error:', err);
});

export default redis;
