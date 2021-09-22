import fetch from "node-fetch";

// Helper function to fetch the nut-cracker api
export const getTestApi = async (res) => {
  const url = process.env.BASE_URL;

  const options = {
    method: "GET",
  };

  const response = await fetch(url, options);
  const data = await response.json();
  console.log("GOT ME:", data);
  return data;
};

export default getTestApi;

// Ship off to controllers
