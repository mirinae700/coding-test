WITH RECURSIVE ecoli_generation AS (
    SELECT id,
           1 AS generation,
           (SELECT COUNT(*) FROM ecoli_data WHERE parent_id = E.id) AS cnt
    FROM ecoli_data E
    WHERE parent_id IS NULL
    UNION ALL
    SELECT C.id,
           P.generation + 1 AS generation,
           (SELECT COUNT(*) FROM ecoli_data WHERE parent_id = C.id) AS cnt
    FROM ecoli_generation P JOIN ecoli_data C
                              ON P.id = C.parent_id
)

SELECT COUNT(*) AS count, 
       generation
FROM ecoli_generation
WHERE cnt = 0
GROUP BY generation
ORDER BY generation;