function anagrams(str1, str2) {
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (obj[str1[i]]) {
      obj[str1[i]]++;
    } else {
      obj[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i]]) {
      obj[str2[i]]--;
      if (obj[str2[i]] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

function commonElements(arr1, arr2) {
  let obj = {};
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]]) {
      continue;
    } else {
      obj[arr1[i]] = 1;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      arr.push(arr2[i]);
    }
  }
  return arr;
}

function duplicate(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return arr[i];
    } else {
      obj[arr[i]] = 1;
    }
  }
}

function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return true;
    } else {
      obj[target - nums[i]] = 1;
    }
  }
  return false;
}

function wordPattern(pattern, strings) {}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
