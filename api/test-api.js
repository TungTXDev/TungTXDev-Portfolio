// Script để test API nhanh
import fetch from 'node-fetch';

const API_URL = 'http://localhost:3001';

async function testAPI() {
  console.log('🧪 Testing Analytics API...\n');

  try {
    // Test health endpoint
    console.log('1️⃣ Testing health endpoint...');
    const healthRes = await fetch(`${API_URL}/api/health`);
    const healthData = await healthRes.json();
    console.log('✅ Health check:', healthData);
    console.log('');

    // Test visitor count endpoint
    console.log('2️⃣ Testing visitor count endpoint...');
    const countRes = await fetch(`${API_URL}/api/visitor-count`);
    const countData = await countRes.json();
    console.log('✅ Visitor count:', countData);
    console.log('');

    console.log('🎉 All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n💡 Make sure API is running: cd api && npm run dev');
  }
}

testAPI();
