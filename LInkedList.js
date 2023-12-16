/*
연결리스트란?
어떤 데이터를 저장할 때 다음 순서의 자료가 있는 위치 데이터를 포함시키는 방식
데이터, 다음데이터의 위치
이 두개를 함께 저장한다고 생각하면 쉽다.

연결 리스트의 종류에는
단순 연결 리스트, 이중 연결 리스트, 순환 연결 리스트가 있다.

단순 연결 리스트란
다음 노드에 대한 참조만 가진 가장 단순한 형태의 연결 리스트이다.
하지만 이 연결 리스트는 가장 마지막 원소를 찾을 때 처음부터 가리키는 곳을
모두 찾아가야하기 때문에 매우 비효율적인 방법이다.

이중 연결 리스트란
다음 노드에 대한 참조 뿐 아니라 이전 노드에 대한 참조도 함께 하는 연결 리스트이다.
때문에 뒤로 탐색하는 것이 가능하다는 장점이 있다.

순환 연결 리스트란
단순 연결 리스트의 마지막 원소는 null 을 가리키지만 이 상태에서
마지막 원소가 null 이 아닌 첫 번째 원소를 가리키게 하여 순환시킨 형태가 순환 연결 리스트이다.
이미 할당된 메모리 공간을 삭제하고 재할당할 때 부담이 없어서 큐를 구현할 때 자주 사용된다.
*/

const list = {
    head : {
        value: 90,
        next : {
            value : 10,
            next : {
                value : 89,
                next : {
                    value : 100,
                    next : null
                }
            }
        }
    }
}

// console.log(list.head);
// console.log(list.head.value);
// console.log(list.head.next.value);
// console.log(list.head.next.next.value);

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init');
        this.head = init;
        this.tail = init;

        this.now_node = undefined;
        this.cnt_data = 0;
    }

    length() {
        return this.cnt_data;
    }

    append(data) {
        let new_node = new Node(data);

        this.tail.next = new_node;
        this.tail = new_node;
        this.cnt_data += 1;
    }

    toString() {
        // return 'this is LInkedList';
        let circlenode = this.head;
        circlenode = circlenode.next;

        let s = '';
        for (let i = 0; i<this.cnt_data; i++) {
            s += `${circlenode.data},`
            circlenode = circlenode.next;
        }
        return `[${s.slice(0, -2)}]`;
    }

    get fullData() {
        let circlenode = this.head;
        circlenode = circlenode.next;

        let s = '';
        for (let i = 0; i<this.cnt_data; i++) {
            s += `${circlenode.data},`
            circlenode = circlenode.next;
        }
        return JSON.parse(`[${s.slice(0, -2)}]`);
    }

    insert(index, data) {
        let circlenode = this.head;
        let new_node = new Node(data);
    
        for (let i = 0; i < index - 1; i++) {
            circlenode = circlenode.next;
        }
    
        new_node.next = circlenode.next;
        circlenode.next = new_node;
    
        this.cnt_data += 1;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);

l.insert(2,1000);

console.log(l.length());
// console.log(l);
// console.log(l.head.data);
// console.log(l.head.next.next.data);
console.log(l.toString());