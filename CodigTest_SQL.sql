/* 
문제는 프로그래머스에서 제공하는 코딩 에디터를 사용하여 풀어보고
이곳에는 답만 작성하도록 하겠습니다.
문제마다 데이터셋을 계속 가져오기에는 부담이 돼서.. ㅠ.ㅠ 
*/

-- 1. 상위 n개 레코드
-- 동물 보호소에 가장 먼저 들어온 동물의 이름을 조회하는 SQL 문을 작성해주세요.
SELECT NAME from ANIMAL_INS order by DATETIME limit 1;

-- 2. 동물 수 구하기
-- 동물 보호소에 동물이 몇마리 들어왔는지 조회하는 SQL 문을 작성해주세요.
SELECT count(*) from ANIMAL_INS;

-- 3. 오랜 기간 보호한 동물(1)
-- 아직 입양을 못 간 동물 중, 가장 오래 보호소에 있던 동물 3마리의 이름과 보호 시작일을 조회하는 SQL 문을 작성해주세요.
SELECT A.name, A.datetime from
    animal_ins A
    left join
    animal_outs B
    on A.animal_id = B.animal_id
    where B.datetime is null
    order by A.datetime
    limit 3;

-- 4.