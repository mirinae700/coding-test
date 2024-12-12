SELECT P.id, 
       COUNT(C.parent_id) child_count
FROM ecoli_data P LEFT JOIN ecoli_data C 
                         ON C.parent_id = P.id
GROUP BY P.id
ORDER BY P.id ASC;