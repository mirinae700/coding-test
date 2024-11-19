-- 코드를 입력하세요
SELECT  RI.rest_id,
        RI.rest_name,
        RI.food_type,
        RI.favorites,
        RI.address,
        ROUND(AVG(NVL(RR.review_score,0)), 2) score
FROM    REST_INFO RI, REST_REVIEW RR
WHERE   RI.rest_id = RR.rest_id
AND     RI.address LIKE '서울%'
GROUP BY RI.rest_id, RI.rest_name, RI.food_type, RI.favorites, RI.address
ORDER BY score DESC, favorites DESC;