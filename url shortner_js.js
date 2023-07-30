async function shortenURL() {
  const originalURL = document.getElementById("originalURL").value;
  if (originalURL.trim() === "") {
    alert("Please enter a valid URL.");
    return;
  }

  try {
    // Simulate API call or server-side URL shortening logic using async/await
    const shortenedURL = await simulateServerRequest(originalURL);

    document.getElementById("shortenedURL").innerHTML = `Shortened URL: <a href="${shortenedURL}" target="_blank">${shortenedURL}</a>`;
  } catch (error) {
    console.error(error);
    alert("An error occurred while shortening the URL.");
  }
}

function simulateServerRequest(originalURL) {
  // Simulate server-side processing delay using setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      const shortenedURL = "http://short.url/" + generateRandomString(6);
      resolve(shortenedURL);
    }, 1000); // Simulated delay of 1 second
  });
}

function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
