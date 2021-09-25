export const binarySearch = (nodes, target) => {
  return binarySearchHelper(nodes, target, 0, nodes.length - 1);
};

const binarySearchHelper = (nodes, target, left, right) => {
  // Check if the left is greater than the right
  if (left > right) {
    return -1;
  }
  // Check middleWeight value
  const middleWeight = Math.floor((left + right) / 2);

  // Set potential match to be the mi
  const potentialMatch = nodes[middleWeight];
  if (target === potentialMatch) {
    return middleWeight;
  } else if (target < potentialMatch) {
    return binarySearchHelper(nodes, target, left, middleWeight - 1);
  } else {
    return binarySearchHelper(nodes, target, middleWeight + 1, right);
  }
};
