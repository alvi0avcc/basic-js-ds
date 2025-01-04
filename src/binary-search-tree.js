const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    function addNode(node, newNode) {
      if (newNode.data < node.data) {
        if (!node.left) {
        node.left = newNode;
        } else {
          addNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          addNode(node.right, newNode);
        }
      }
    }
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      addNode(this.rootNode, newNode);
    }
  }

  has(data) {
    function hasNode (node, curData) {
      if (!node) return false;
      if (curData === node.data) return true;
      return curData < node.data ?
        hasNode(node.left, curData) :
        hasNode(node.right, curData);
    }

    return hasNode(this.rootNode, data);
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};