// 프로그래머스 코딩 테스트
// 피자 나눠 먹기 (1)
/* 
머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 
모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
*/

function solution1(n) {
    var answer = Math.ceil(n/7);

    return answer;
}

console.log(solution1(15));

// Math.ceil() 올림함수


// 피자 나눠 먹기 (2)
/* 
머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, 
n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
*/

function solution2(n) {
    var answer = 6;
    
    while(true) {
        if (answer % n == 0) {
            break;
        }
        answer += 6;
    }
    return answer/6;
}

console.log(solution2(10));


// 피자 나눠 먹기 (3)
/* 
머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, 
n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
*/

function solution3(slice, n) {
    var answer = Math.ceil(n/slice);
    
    return answer;
}

console.log(solution3(7, 10));