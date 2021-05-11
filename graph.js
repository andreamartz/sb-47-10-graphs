class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {}

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {}

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {}
}

/** addVertex / addVertices */
let graph = new Graph();
let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
// console.log(graph.addVertices([a,b]));
// console.log(graph.addVertex(c));
// console.log(graph.nodes.has(a)); // true
// console.log(graph.nodes.has(b)); // true
// console.log(graph.nodes.has(c)); // true

/** addEdge */
let d = new Node("D");
graph.addVertices([a, b, c, d]);
console.log(graph.addEdge(a, b));
console.log(graph.addEdge(a, c));
console.log(graph.addEdge(b, d));
console.log(graph.addEdge(c, d));

// console.log("A.ADJACENT: ", a.adjacent); // contains b and c
// console.log("B.ADJACENT: ", b.adjacent); // contains a and d
// console.log("C.ADJACENT: ", c.adjacent); // contains a and d
// console.log("D.ADJACENT: ", d.adjacent); // contains b and c

/** removeEdge */
graph.removeEdge(b,a)
graph.removeEdge(c,d)

console.log("A.ADJACENT: ", a.adjacent); // does not contain b
console.log("B.ADJACENT: ", b.adjacent); // does not contain a
console.log("C.ADJACENT: ", c.adjacent); // does not contain d
console.log("D.ADJACENT: ", d.adjacent); // does not contain c

module.exports = {Graph, Node}