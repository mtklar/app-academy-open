class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < currentNode.val) {
      if (currentNode.left) {
        this.insert(val, currentNode.left);
      } else {
        currentNode.left = new TreeNode(val);
      }
    }

    if (val > currentNode.val) {
      if (currentNode.right) {
        this.insert(val, currentNode.right);
      } else {
        currentNode.right = new TreeNode(val);
      }
    }

    return;
  }

  search(val) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.val === val) {
        return true;
      }

      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      console.log(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let stack = [];
    stack.push(this.root);

    while (stack.length > 0) {
      let currentNode = stack.pop();
      console.log(currentNode.val);

      if (currentNode.right) stack.push(currentNode.right);

      if (currentNode.left) stack.push(currentNode.left);
    }
  }
}

let bst = new BinarySearchTree();

bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

console.log(BinarySearchTree);
bst.inOrderTraversal();

module.exports = { BinarySearchTree, TreeNode };
