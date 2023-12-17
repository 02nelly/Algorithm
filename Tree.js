/*
트리는 항상 루트(root) 에서 시작되며, 이 루트는 자식 노드를 가지게 된다.
이 때, 루트노드와 자식노드는 간선으로 연결 되어 있다.

부모 노드 밑에 여러 자식 노드가 연결되고, 자식 노드 각각에 다시 자식 노드가 연결되는
재귀적인 형태를 띄는 자료구조이다.
자식 노드에서 부모를 타고 올라가면 결국 모든 노드가 하나의 루트노드와 이어져 있다.

- 깊이 우선 탐색 (DFS, Depth-First Search)
: 최대한 깊이 내려간 후에 더 이상 깊이 갈 곳이 없을 경우 옆으로 이동하여 탐색하는 방법이다.
검색 속도는 매우 느리지만 완벽하게 탐색할 수 있다는 장점이 있다.
주로 스택이나 재귀함수로 구현한다.

- 너비 우선 탐색 (BFS, Breadth-First Search)
: 최대한 넓게 이동한 다음, 더 이상 갈 수 없을 때 아래로 이동
루트노드에서 시작해 인접한 노드를 먼저 탐색하는 방법이다.
두 노드 사이의 최단 경로를 찾을 때 많이 사용한다.
주로 큐를 이용해 구현한다.
*/

/*
// 이진트리 Object 형태로 구현
const tree = {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 8,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      }
    }
  };
  
  console.log(tree.value);
  console.log(tree.left.left.value);
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// cnt_data = 데이터 갯수
// circleNode = 순회용 현재 노드
// new_node = 새로운노드

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.cnt_data = 0;
  }

  length() {
    return this.cnt_data;
  }

  insert(data) {
    let new_node = new Node(data);
    let circleNode = this.root;

    while (circleNode) {
      if (data === circleNode.data) {
        return;
      }
      if (data < circleNode.data) {
        if (!circleNode.left) {
          circleNode.left = new_node;
          this.cnt_data += 1;
          return;
        }
        circleNode = circleNode.left;
      } else {
        if (!circleNode.right) {
          circleNode.right = new_node;
          this.cnt_data += 1;
          return;
        }
        circleNode = circleNode.right;
      }
    }
  }

  // 깊이우선탐색 - Stack
  DFS() {
    let rst = []; // 결과값
    let stack = [this.root]; // 스택

    while (stack.length !== 0) {
      let current = stack.pop();
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
      rst.push(current.data);
    }

    return rst;
  }

  // 너비우선탐색 - Queue
  BFS() {
    let rst = []; // 결과값
    let Queue = [this.root]; // 큐

    while (Queue.length !== 0) {
      let current = Queue.shift();
      if (current.left) {
        Queue.push(current.left);
      }
      if (current.right) {
        Queue.push(current.right);
      }
      rst.push(current.data);
    }

    return rst;
  }
}

let t = new Tree(5);
console.log(t.insert(3));
console.log(t.insert(8));
console.log(t.insert(1));
console.log(t.insert(4));
console.log(t.insert(6));
console.log(t.insert(9));

console.log(t.root.data);
console.log(t.root.left.data);
console.log(t.root.right.data);
console.log(t.root.right.right.data);
console.log(t.root.right.left.data);

console.log(t.DFS());

console.log(t.BFS());