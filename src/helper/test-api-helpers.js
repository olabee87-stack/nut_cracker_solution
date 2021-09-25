import fetch from "node-fetch";

// Fetch the nut-cracker api
export const getTestApi = async () => {
  const url = process.env.BASE_URL;
  const options = {
    method: "GET",
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

// Post to jsonplaceholder - since I couldnt't post to Vello api
export const postToTestApi = async (result) => {
  //const useUrl = process.env.BASE_URL;
  const useUrl = "https://jsonplaceholder.typicode.com/posts";

  // Define the options
  const options = {
    method: "POST",
    url: useUrl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(result),
  };
  //  Send back the response
  const response = await fetch(useUrl, options);
  const data = await response.json();
  return data;
};

// Ship off to controllers
