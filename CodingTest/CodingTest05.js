// 프로그래머스 코딩 테스트
// 짝수의 합
// 정수 n 이 주어질 때, n 이하의 짝수를 모두 더한 값을 return 하라

function solution(n) {
    var answer = 0;
    for (let i = 1; i<=n; i++) {
        if (i%2 == 0) {
            answer +=i;
        }
    }

    return answer;
}

console.log(solution(7));


// 다른 사람의 풀이
/*
function solution(n) {
    return Array(n).fill().map((_, i) => i+1).filter(v>=v %2 ===0).reduce((a, c) => a+c)
}
*/

// Array(n).fill()      ->  길이가 n 인 배열 생성한다.
// map((_, i) => i+1)   ->  map 함수는 배열의 각 요소를 변환한다.
// filter(v => v%2 ===0)    -> 배열에서 홀수만 필터링하고 짝수만 남긴다.
// reduce((a, c) => a+c)    -> 남은 짝수들을 모두 더하여 총합을 구한다.