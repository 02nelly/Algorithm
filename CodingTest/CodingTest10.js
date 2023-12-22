// 프로그래머스 코딩 테스트
// 하샤드 수
/*
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 
18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/

function solution(x) {
    var answer = true;
    let stringX = x.toString();
    let array = stringX.split('').map(Number);
    
    let sum = 0;
    
    for (let i=0; i<array.length; i++) {
        sum += array[i];
    }
    
    if (x%sum !== 0) {
        answer = false;
    }

    return answer;
}

/*
각각의 자리마다 나눠주기 위해 toString() 을 통해 문자열로 변경한다.
split('') 을 통해 문자열을 각각의 문자로 쪼개 배열을 만들고
map(Number) 메서드를 통해 인자를 숫자로 변환한다.

map() 메서드는 인자에 들어있는 함수를 적용해 새로운 배열을 만드는 메서드이다. 따라서 Number 인자를 받았기 때문에 숫자로 변환하여 새로운 배열을 만든 것이다.

이 두 단계를 거치면
한 정수를 받아와 각각의 자릿수로 만든 배열을 생성할 수 있다.
*/