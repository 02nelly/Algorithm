// 프로그래머스 코딩 테스트
// 몫 구하기

function solution(num1, num2) {
    if (num2 === 0) {
        pass;
    } else {
        var answer = Math.floor(num1/num2);
        return answer;
    }
}

console.log(solution(11,3));