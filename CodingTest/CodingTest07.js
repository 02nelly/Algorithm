// 프로그래머스 코딩 테스트
// 머쓱이보다 키 큰 사람
// 키가 담긴 정수 배열 array 와 머쓱이의 키 height 가 매개변수로 주어질 때 머쓱이보다 키 큰 사람의 수를 return 하라

function solution(array, height) {
    var answer = 0;
    for (let i =0; i<array.length; i++) {
        if (array[i] > height) {
        answer ++;
        }
    }
    return answer;
}

console.log(solution([166, 189, 191, 173, 168], 167));


// 다른 사람의 풀이
/*
function solution(array, height) {
    return array.filter(v => v > height).length;
}
*/

// filter() 메서드는 조건을 만족하는 요소들만 필터링하여 새 배열을 생성한다.
// 따라서 height 보다 큰 것으로 새 배열을 생성한다.
// .length 를 통해 새로 만들어진 배열의 길이 즉, height 보다 큰 키를 가진 사람의 수를 반환하게 된다.