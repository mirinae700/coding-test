WITH RECURSIVE result AS (
    -- Non-Recursive (첫번째 루프에서만 실행된다)
    -- parent_id가 null인 행이 최상위 행
    SELECT id, 
           1 AS level
    FROM ecoli_data
    WHERE parent_id IS NULL
    UNION ALL
    -- Recursive (읽어 올 때마다 행의 위치가 기억되고 다음 번에 행을 이동)
    -- 최상위 행을 시작으로 다음 행을 하나씩 읽어온다
    SELECT C.id, 
           P.level + 1 AS level
    FROM result P JOIN ecoli_data C
                  ON P.id = C.parent_id
)

SELECT id 
FROM result
WHERE level = 3
ORDER BY id;