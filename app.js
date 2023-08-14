const axios = require('axios');

async function makeGetRequest() {
  const url = "https://polri.go.id/";
  const headers = {
    cookie: "DV=o_vkbgyU-RxV8JiFc16AWAZOcjxonBgtVbcxKQalWAQAANCl4tlOQwFiMQEAAOBRX6N8aZALTQAAALwkxYOqKaGkFQAAAA",
    ...your_headerdata,
  };
  const randomstring = true;
  const minDelay = 10000;
  const maxDelay = 30000;

  try {
    const response = await axios.get(url, { headers });
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }

  if (randomstring) {
    const randomTimeout = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    console.log("Random Timeout:", randomTimeout);
    setTimeout(makeGetRequest, randomTimeout);
  }
}

makeGetRequest();
