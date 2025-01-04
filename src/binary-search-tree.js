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

  find(data) {
    function findNode (node, curData) {
      if (!node) return null;
      if (data === node.data) return node;
      return curData < node.data ?
        findNode(node.left, curData) :
        findNode(node.right, curData);
    }
    return findNode(this.rootNode, data);
  }

  remove(data) {
    function minNode(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }

    function removeNode (node, curData) {
      if (!node) {
        return null;
      }
      if (curData < node.data) {
        node.left = removeNode(node.left, curData);
        return node;
      } else if (curData > node.data) {
        node.right = removeNode(node.right, curData);
        return node;
      } else {
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
        node.data = minNode(node.right).data;
        node.right = removeNode(node.right, node.data);
        return node;
      }
    }

    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    function minNode (node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
    if (!this.rootNode) return null;
    return minNode(this.rootNode).data;
  }

  max() {
    function maxNode (node) {
      while (node.right) {
        node = node.right;
      }
      return node;
    }
    if (!this.rootNode) return null;
    return maxNode(this.rootNode).data;
  }
}

module.exports = {
  BinarySearchTree
};