class Node {
  constructor(value) {
    this.value = value;
    this.next = null; //! Left child
  }
  addNode(value) {
    let temp = this;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = new Node(value);
  }
  removeLastNode() {
    if (!this.next) {
      //* Only one node, so we can't remove anything
      return;
    }
    let node = this;
    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
  }

  displayNode() {
    let node = this;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

// const node = new Node(1);
// node.addNode(2);
// node.addNode(3);
// node.displayNode();
// console.log("..............");
// node.removeLastNode();
// node.displayNode();

class Stack {
  #arr;
  #index = 0;
  constructor() {
    this.#arr = []; //* Initialize the stack as an empty array
    this.#index = -1; //* Initialize index to -1, so first push will set it to 0
  }
  push(value) {
    this.#arr[++this.#index] = value; //* Increment index before setting the value
  }
  pop() {
    if (this.#index < 0) {
      throw new Error("Stack is empty"); //* Handle underflow
    }
    const value = this.#arr[this.#index--]; //* Get the value and then decrement index
    return value;
  }
  peek() {
    if (this.#index < 0) {
      throw new Error("Stack is empty"); //* Handle underflow
    }
    return this.#arr[this.#index]; //* Return the top element
  }

  isEmpty() {
    return this.#index < 0; //* Check if the stack is empty
  }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log(stack.peek()); // Output: 3
// console.log(stack.pop()); // Output: 3
// console.log(stack.peek()); // Output: 2
// console.log(stack.isEmpty()); // Output: false

const stackString = new Stack();
stackString.push("aslam");
stackString.push("ansari");
stackString.push("Khan");

let reversString = stackString.pop() + stackString.pop() + stackString.pop();
// console.log(reversString);

class Queue {
  #arr;
  #front;
  #rear;
  constructor() {
    this.#arr = [];
    this.#front = -1;
    this.#rear = -1;
  }
  enqueue(value) {
    this.#arr[++this.#rear] = value;
    this.#front = 0;
  }
  dequeue() {
    if (this.#front < 0 || this.#front > this.#rear) {
      throw new Error("Queue Is empty");
    }
    let value = this.#arr[this.#front++];
    return value;
  }

  front() {
    return this.#arr[this.#front];
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// console.log(queue.front());
// console.log(queue.dequeue());
// console.log(queue.front());

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null; //! Left child
    this.right = null; //! Right child
  }
  insert(value) {
    //* Use a queue to perform level-order traversal and find the insertion point
    const queue = [this];

    while (queue.length > 0) {
      const node = queue.shift(); //* Get the next node to process

      //* Insert into the left child if available
      if (!node.left) {
        node.left = new BinaryTreeNode(value);
        return; //* Insertion complete
      } else {
        queue.push(node.left); //* Add left child to the queue
      }

      //* Insert into the right child if available
      if (!node.right) {
        node.right = new BinaryTreeNode(value);
        return; //* Insertion complete
      } else {
        queue.push(node.right); //* Add right child to the queue
      }
    }
  }

  displayNode() {
    const queue = [this];
    while (queue.length > 0) {
      const node = queue.shift();
      console.log(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  //* In-order traversal method
  inOrderTraversal() {
    if (this.left) {
      this.left.inOrderTraversal(); //* Traverse left subtree
    }
    console.log(this.value); //* Visit the current node
    if (this.right) {
      this.right.inOrderTraversal(); //* Traverse right subtree
    }
  }
}

//* Example usage:
const root = new BinaryTreeNode(1);
root.insert(2);
root.insert(3);
root.insert(4);
root.insert(5);
root.insert(6);
root.insert(7);

// root.displayNode();
// root.inOrderTraversal();

class Graph {
  constructor() {
    this.adjacencyList = {}; //* Stores vertices and their edges
  }

  //* Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  //* Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1); //* Add vertex if it doesn't exist
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2); //* Add vertex if it doesn't exist
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1); //* For undirected graph; remove this line for directed graph
  }

  //* Display the graph
  display() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
    }
  }
}

//* Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

graph.display();
// Output:
// A -> B, C
// B -> A, C
// C -> A, B
