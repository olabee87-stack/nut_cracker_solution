import getTestApi from "../helper/get-test-api.js";

// @GET - get data from the API
export const getData = async (req, res) => {
  try {
    res.status(200).json(await getTestApi());
    console.log("Gotten");
  } catch (err) {
    return res
      .status(400)
      .json({ Message: `Unable to get data ${err.message}` });
  }
};

// @POST - Post to vello server
export const postData = async (req, res) => {
  try {
    await res.status(201).json({ Message: "Post sent!" });
  } catch (error) {}
};

// Ship off to routes - nut-cracker.js
