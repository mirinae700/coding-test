SELECT id, length
FROM (SELECT ROW_NUMBER() OVER(ORDER BY length DESC) rn, id, length
      FROM fish_info) t
WHERE rn <= 10;

