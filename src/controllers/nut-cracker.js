import { getTestApi, postToTestApi } from "../helper/test-api-helpers.js";
import { binarySearch } from "../helper/binary-search-helper.js";

// @GET - get data from the API
export const getData = async (req, res) => {
  try {
    res.status(200).json(await getTestApi());
  } catch (err) {
    return res
      .status(400)
      .json({ Message: `Unable to get data ${err.message}` });
  }
};

// @POST result ('/')
export const postResultOfBinaryTree = async (req, res) => {
  // Get the weight data out of the api
  let data = await getTestApi();
  let target = data.key;
  const getWeight = data.nodes.map((wei) => {
    const { weight } = wei;
    return weight;
  });

  // Check if weight was returned
  if (!getWeight) {
    return res.send(`No weights found, check the data again`);
  }

  // Make a callback function with your binarySearch
  // Send the result of your check as a post request

  try {
    res
      .status(200)
      .json(
        await binarySearch(getWeight, target, async () => await postToTestApi())
      );
    console.log(
      await binarySearch(getWeight, target, async () => await postToTestApi())
    );
  } catch (error) {
    return res
      .status(400)
      .json({ Message: `Unable to get data::: ${error.message}` });
  }
};

// Ship off to routes - nut-cracker.js

// Test Sample - with mini-array
export const samplePost = async (req, res) => {
  let myTestNodes = [1, 7, 8, 5, 3, 5, 50, 687];
  let target = 50;

  try {
    res
      .status(200)
      .json(
        binarySearch(myTestNodes, target, async () => await postToTestApi())
      );
    console.log(await postToTestApi());
  } catch (error) {
    return res
      .status(400)
      .json({ Message: `Unable to get data ${error.message}` });
  }
};
