/*
그리디 알고리즘 = 탐욕 알고리즘
: 미래를 고려하지 않고 오직 현재 시점에서 가장 좋은 선택을 하는 알고리즘이다.

그리디 알고리즘이 최적인 상황 조건
1. 현재의 선택이 미래의 선택에 영향을 주지 않는다.
2. 부분의 최적 해가 모이면 전체의 최적 해가 된다. (최적 부분 구조 조건)

그리디 알고리즘 전략
-> 정렬
정렬 순서에 따라 최적의 해를 구할 수 있다.

그리디 알고리즘는 100% 최적인 답을 찾는 것은 아니기 대문에 속도가 빠르다.
 */

// 동전 바꾸기

function Change_money(value) {
  let changes = [10000, 5000, 1000, 500, 100, 50, 10];
  let won = Math.floor(value / 10) * 10; // 1의 자리 내림
  let i = 0;
  let counts = [];

  console.log(value);

  while (true) {
    if (won >= changes[i]) {
      let count = Math.floor(won / changes[i]);
      won = won - changes[i] * count;
      counts[i] = count;
    } else {
      counts[i] = 0;
    }

    i++; // 다음 인덱스 이동
    // 0원이 되면 나머지 모든 것을 0 으로 채우기
    if (won === 0) {
      for (let j = 0; j < changes.length - i; j++) {
        counts.push(0);
      }
      break;
    }
  }

  // 출력
  changes.map((change, index) => {
    console.log(`${change.toLocaleString()}원 ${counts[index]}개`);
  });
}

Change_money(78495);
Change_money(85600);
Change_money(32000);
Change_money(1000);
