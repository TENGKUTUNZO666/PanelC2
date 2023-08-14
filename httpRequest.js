const axios = require('axios');

// Arguments
const url = process.argv[2] || 'https://target-url.com/';
const maxRequests = parseInt(process.argv[3]) || 10;
const cookie = process.argv[4] || null;
const postdata = process.argv[5] || null;
const headerdata = process.argv[6] || null;
const randomstring = process.argv[7] === 'true';
const minDelay = parseInt(process.argv[8]) || 10000; // 10 seconds
const maxDelay = parseInt(process.argv[9]) || 30000; // 30 seconds

// Helper function to generate a random delay between minDelay and maxDelay
function getRandomDelay() {
  return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
}

// Helper function to generate a random string
function getRandomString() {
  return randomstring
    ? Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    : '';
}

// HTTP GET request function
async function sendGetRequest() {
  try {
    const config = {
      url: url + getRandomString(),
      method: 'GET',
      headers: {
        Cookie: cookie,
        headerdata: headerdata,
      },
      data: postdata,
    };

    const response = await axios(config);
    console.log(`Response status: ${response.status}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to send multiple GET requests with random delays
async function sendMultipleRequests() {
  for (let i = 0; i < maxRequests; i++) {
    await sendGetRequest();
    const delay = getRandomDelay();
    console.log(`Delaying for ${delay} ms before the next request...`);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}

// Start sending multiple GET requests
sendMultipleRequests();
