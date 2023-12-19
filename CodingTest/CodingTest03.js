// 프로그래머스 코딩 테스트
// 각도기
// 예각은 1, 직각은 2, 둔각은 3, 평각은 4 return

function solution(angle) {
    if (angle < 90) {
        return 1;
    } else if (angle == 90) {
        return 2;
    } else if (angle <180) {
        return 3;
    } else {
        return 4;
    }
}

console.log(solution(90));
console.log(solution(30));
console.log(solution(180));
console.log(solution(120));