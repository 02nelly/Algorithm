// 프로그래머스 코딩 테스트
// 배열의 평균값
// 정수 배열 numbers 가 매개변수로 주어진다. number의 원소의 평균값을 return 하라

function solution(numbers) {
    var answer = 0;
    for (let i=0; i<numbers.length; i++) {
        answer += numbers[i];
    }
    return answer/numbers.length;
}

console.log(solution([1,3,4,6,8]));


// 다른 사람의 풀이
/*
function solution(numbers) {
    return numbers.reduce((a, c) => (a + c), 0) / numbers.length;
}
*/

// reduce 함수는 배열의 각 요소에 대해 주어신 콜백 함수를 실행하여 하나의 결과값을 얻기 위한 메서드이다.
// 즉, 배열의 모든 요소를 순회하며 각 요소를 사용자가 정의한 함수에 따라 누적하여 최정 결과를 반환한다.
