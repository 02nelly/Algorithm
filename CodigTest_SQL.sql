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

-- 4. 최솟값 구하기
-- 동물 보호소에 가장 먼저 들어온 동물은 언제 들어왔는지 조회하는 SQL 문을 작성해주세요.
SELECT datetime
    from animal_ins
    order by datetime
    limit 1;

-- 5. 자동차 평균 대여기간 구하기
-- CAR_RENTAL_COMPANY_RENTAL_HISTORY 테이블에서 평균 대여 기간이 7일 이상인 자동차들의 
-- 자동차 ID와 평균 대여 기간(컬럼명: AVERAGE_DURATION) 리스트를 출력하는 SQL문을 작성해주세요. 
-- 평균 대여 기간은 소수점 두번째 자리에서 반올림하고, 결과는 평균 대여 기간을 기준으로 내림차순 정렬해주시고, 
-- 평균 대여 기간이 같으면 자동차 ID를 기준으로 내림차순 정렬해주세요.
SELECT car_id, round(avg(datediff(end_date, start_date)+1),1) as avg_date
    from CAR_RENTAL_COMPANY_RENTAL_HISTORY
    group by 1
    having avg_date >=7
    order by 2 desc, car_id desc;

-- 6. 재구매가 일어난 상품과 회원 리스트 구하기
-- ONLINE_SALE 테이블에서 동일한 회원이 동일한 상품을 재구매한 데이터를 구하여, 재구매한 회원 ID와 재구매한 상품 ID를 출력하는 SQL문을 작성해주세요. 
-- 결과는 회원 ID를 기준으로 오름차순 정렬해주시고 회원 ID가 같다면 상품 ID를 기준으로 내림차순 정렬해주세요.
SELECT user_id, product_id
    from ONLINE_SALE
    group by 1,2
    having count(*) >=2
    order by user_id, product_id desc;

-- 7. 카테고리 별 도서 판매량 집계하기
-- 2022년 1월의 카테고리 별 도서 판매량을 합산하고, 카테고리(CATEGORY), 총 판매량(TOTAL_SALES) 리스트를 출력하는 SQL문을 작성해주세요.
-- 결과는 카테고리명을 기준으로 오름차순 정렬해주세요.
SELECT category, sum(sales) as total_sales from
    book A
    left join
    book_sales B
    on A.book_id = B.book_id
    where substr(sales_date,1,7) = "2022-01"
    group by 1
    order by category;

-- 8. 년, 월, 성별 별 상품 구매 회원 수 구하기
-- USER_INFO 테이블과 ONLINE_SALE 테이블에서 년, 월, 성별 별로 상품을 구매한 회원수를 집계하는 SQL문을 작성해주세요. 
-- 결과는 년, 월, 성별을 기준으로 오름차순 정렬해주세요. 이때, 성별 정보가 없는 경우 결과에서 제외해주세요.
SELECT year(B.sales_date), month(B.sales_date), gender, count(distinct A.user_id) from
    user_info A
    inner join
    online_sale B
    on A.user_id = B.user_id
    where A.gender is not null
    group by 1,2,3
    order by 1,2,3;