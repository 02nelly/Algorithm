// 프로그래머스 코딩 테스트
// 양꼬치
// 양꼬치 1인분의 가격은 12,000원 음료수 1개의 가격은 2,000원
// 양꼬치를 10인분 먹으면 음료수 1개는 무료 서비스
// 양꼬치 n인분, 음료수 k개 먹었을 때 지불할 금액은?

function solution(n, k) {
    const yPrice = 12000; // 양꼬치 1인분 가격
    const dPrice = 2000; // 음료수 가격

    const totalyPrice = n * yPrice; // 총 양꼬치 가격

    // 총 음료수 가격
    // 10개당 1개씩 서비스이기 때문에 버림함수를 이용하여 10으로 나누고 몫만 챙기기
    const totaldPrice = (k-(Math.floor(n/10)))*dPrice;

    const answer = totalyPrice + totaldPrice; // 총 가격

    return answer;
}

console.log(solution(64,6));