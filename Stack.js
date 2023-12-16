/*
스택이란?
제한적으로 접근할 수 있는 나열 구조이다.
데이터의 삽입과 삭제는 모두 맨 위에서만 일어나게 되며
중간에 데이터를 삽입하거나 중간에 있는 데이터를 삭제할 수는 없습니다.
이를 후입선출 (Last In First out) 이라고 합니다.

큐란?
스택과는 만대로 먼저 넣은 데이터가 먼저 나오는 FIFO (First In First Out) 구조를 가지고 있습니다.
*/

// Stack (스택)

class Stack {
    constructor() {
        this.arr = [];
    }

    // 데이터 넣기
    push(data) {
        this.arr.push(data);
    }

    // 데이터 꺼내기
    pop(index) {
        if(index === this.arr.length-1) {
            return this.arr.pop();
        }

        let result = this.arr.splice(index, 1);
        return result;
    }

    // stack 이 비어있는지 확인
    empty() {
        if (this.arr.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    // 가장 위에 있는 데이터
    top() {
        return this.arr[this.arr.length -1];
    }

    // 가장 아래 있는 데이터
    bottom() {
        return this.arr[0];
    }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);

let popValue = s.pop(2);

console.log(s);

console.log(popValue);
console.log(s.top());
console.log(s.bottom());