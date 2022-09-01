const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  while (rootNode.left) {
    rootNode = rootNode.left;
  }

  return rootNode.val;
}

function findMaxBST(rootNode) {
  while (rootNode.right) {
    rootNode = rootNode.right;
  }

  return rootNode.val;
}

function findMinBT(rootNode) {
  let min = rootNode.val;
  let stack = [];
  stack.push(rootNode);

  while (stack.length > 0) {
    let node = stack.pop();
    if (node.val < min) min = node.val;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return min;
}

function findMaxBT(rootNode) {
  let max = rootNode.val;
  let stack = [];
  stack.push(rootNode);

  while (stack.length > 0) {
    let node = stack.pop();
    if (node.val > max) max = node.val;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return max;
}

function getHeight(rootNode) {
  // return height of binary tree starting at rootNode
  let stack = [];
  let height = 0;
  stack.push([rootNode, 0]);

  while (stack.length > 0) {
    let [node, depth] = stack.pop();
    if (depth > height) height = depth;

    if (node.left) stack.push([node.left, depth + 1]);
    if (node.right) stack.push([node.right, depth + 1]);
  }

  return height;
}

function countNodes(rootNode) {
  let nodesNum = 1;
  let stack = [];
  stack.push(rootNode);

  while (stack.length > 0) {
    let node = stack.pop();

    if (node.left) {
      stack.push(node.left);
      nodesNum++;
    }

    if (node.right) {
      stack.push(node.right);
      nodesNum++;
    }
  }

  return nodesNum;
}

function balancedTree(rootNode) {
  let nodesNum = 1;
  let height = 0;
  let stack = [];
  stack.push([rootNode, 0]);

  while (stack.length > 0) {
    let [node, depth] = stack.pop();
    if (depth > height) height = depth;

    if (node.left) {
      stack.push([node.left, depth + 1]);
      nodesNum++;
    }

    if (node.right) {
      stack.push([node.right, depth + 1]);
      nodesNum++;
    }
  }

  let balanced = Math.floor(Math.log2(nodesNum));
  return balanced === height;
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   set the parent that points to it to null
  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
