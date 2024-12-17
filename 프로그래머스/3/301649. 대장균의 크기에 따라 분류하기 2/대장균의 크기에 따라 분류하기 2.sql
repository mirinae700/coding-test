-- '단, 총 데이터의 수는 4의 배수'라는 조건이 존재하므로 NTILE 함수를 사용해 4개의 그룹으로 나누어 해결할 수 있다.
SELECT id,
       CASE group_number WHEN 1 THEN 'CRITICAL'
                         WHEN 2 THEN 'HIGH'
                         WHEN 3 THEN 'MEDIUM'
                         WHEN 4 THEN 'LOW'
       END colony_name
FROM (SELECT id, 
             NTILE(4) OVER(ORDER BY size_of_colony DESC) group_number -- NTILE(4) : 4개의 그룹으로 나누고 번호를 반환
      FROM ecoli_data) T
ORDER BY id asc;