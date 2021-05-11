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
  removeVertex(vertex) {
    // remove links to the vertex's adjacencies
    for (let link of vertex.adjacent) {
      vertex.adjacent.delete(link);
    }
    // remove the vertex
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values visited using DFS
  depthFirstSearch(start) {
    // create a 'stack' of nodes to visit (toVisitStack)
    const toVisitStack = [start];
    // create a set of visited nodes (visited)
    let visited = new Set();
    visited.add(start);

    let current;
    // while the stack has nodes in it
    while (toVisitStack.length) {
      // pop off a node to visit (call this current)
      current = toVisitStack.pop();
        // for each neighbor of current, determine whether we still need to visit it
      for (let neighbor of current.adjacent) {
        // check if the neighbor is in visited set
        if (!visited.has(neighbor)) {
          // push the neighbor onto both the toVisitStack and the visited set
          toVisitStack.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
    // turn visited back into an array and return it
    visited = [...visited].map(node => node.value);
    
    return visited;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const toVisitQueue = [start];
    let visited = newSet();
    visited.add(start);
    let current;
    while (toVisitQueue.length) {
      current = toVisitQueue.shift();
      // Look at all neighbors of current.
      // If we have not visited the neighbor, add it to the toVisitQueue and the visited set.
      current.adjacent.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          toVisitQueue.push(neighbor);
          visited.add(neighbor);
        }
      })
    }
    const seen = [...visited].map(node => node.value);
    return seen;
  }
}

/** addVertex / addVertices */
// let graph = new Graph();
// let a = new Node("A");
// let b = new Node("B");
// let c = new Node("C");
// console.log(graph.addVertices([a,b]));
// console.log(graph.addVertex(c));
// console.log(graph.nodes.has(a)); // true
// console.log(graph.nodes.has(b)); // true
// console.log(graph.nodes.has(c)); // true

/** addEdge */
// let d = new Node("D");
// graph.addVertices([a, b, c, d]);
// console.log(graph.addEdge(a, b));
// console.log(graph.addEdge(a, c));
// console.log(graph.addEdge(b, d));
// console.log(graph.addEdge(c, d));

// console.log("A.ADJACENT: ", a.adjacent); // contains b and c
// console.log("B.ADJACENT: ", b.adjacent); // contains a and d
// console.log("C.ADJACENT: ", c.adjacent); // contains a and d
// console.log("D.ADJACENT: ", d.adjacent); // contains b and c

/** removeEdge */
// graph.removeEdge(b,a);
// graph.removeEdge(c,d);

// console.log("A.ADJACENT: ", a.adjacent); // does not contain b
// console.log("B.ADJACENT: ", b.adjacent); // does not contain a
// console.log("C.ADJACENT: ", c.adjacent); // does not contain d
// console.log("D.ADJACENT: ", d.adjacent); // does not contain c

/** removeVertex */
// graph.removeVertex(c);
// graph.removeVertex(d);

// console.log(graph.nodes.has(a)); // true
// console.log(graph.nodes.has(b)); // true
// console.log(graph.nodes.has(c)); // false
// console.log(graph.nodes.has(d)); // false

// /** depthFirstSearch */
// let graph = new Graph()
// let S = new Node('S');
// let P = new Node('P');
// let U = new Node('U');
// let X = new Node('X');
// let Q = new Node('Q');
// let Y = new Node('Y');
// let V = new Node('V');
// let R = new Node('R');
// let W = new Node('W');
// let T = new Node('T');

// graph.addVertices([S,P,U,X,Q,Y,V,R,W,T])

// graph.addEdge(S, P);
// graph.addEdge(S, U);

// graph.addEdge(P, X);
// graph.addEdge(U, X);

// graph.addEdge(P, Q);
// graph.addEdge(U, V);

// graph.addEdge(X, Q);
// graph.addEdge(X, Y);
// graph.addEdge(X, V);

// graph.addEdge(Q, R);
// graph.addEdge(Y, R);

// graph.addEdge(Y, W);
// graph.addEdge(V, W);

// graph.addEdge(R, T);
// graph.addEdge(W, T);

// // this is one option:
// console.log(graph.depthFirstSearch(S)); // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]

/** breadthFirstSearch */
let graph = new Graph()
let S = new Node('S');
let P = new Node('P');
let U = new Node('U');
let X = new Node('X');
let Q = new Node('Q');
let Y = new Node('Y');
let V = new Node('V');
let R = new Node('R');
let W = new Node('W');
let T = new Node('T');

graph.addVertices([S,P,U,X,Q,Y,V,R,W,T])

graph.addEdge(S, P);
graph.addEdge(S, U);

graph.addEdge(P, X);
graph.addEdge(U, X);

graph.addEdge(P, Q);
graph.addEdge(U, V);

graph.addEdge(X, Q);
graph.addEdge(X, Y);
graph.addEdge(X, V);

graph.addEdge(Q, R);
graph.addEdge(Y, R);

graph.addEdge(Y, W);
graph.addEdge(V, W);

graph.addEdge(R, T);
graph.addEdge(W, T);

// this is one option:
console.log(graph.depthFirstSearch(S)); // ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"]

module.exports = {Graph, Node}