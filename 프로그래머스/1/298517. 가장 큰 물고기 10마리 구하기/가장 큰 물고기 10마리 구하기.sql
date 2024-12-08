-- 윈도우 함수 사용
SELECT id, length
FROM (SELECT ROW_NUMBER() OVER(ORDER BY length DESC, id ASC) RN,
             id,
             length
      FROM fish_info) T
WHERE RN <= 10;

-- LIMIT 사용
SELECT id, length
FROM fish_info
ORDER BY length DESC, id ASC
LIMIT 10;
