SELECT user_id,
       nickname,
       city || ' ' || street_address1 || ' ' || street_address2 AS "전체주소",
       SUBSTR(tlno, 1, 3) || '-' || SUBSTR(tlno, 4, 4) || '-' || SUBSTR(tlno, 8, 4) AS "전화번호"
FROM used_goods_user
WHERE user_id IN (SELECT writer_id
                  FROM used_goods_board
                  GROUP BY writer_id
                  HAVING COUNT(*) >= 3)
ORDER BY user_id DESC;