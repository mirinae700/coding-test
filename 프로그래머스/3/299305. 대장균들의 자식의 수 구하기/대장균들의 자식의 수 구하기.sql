SELECT P.id, COUNT(C.id) child_count
FROM ecoli_data P LEFT JOIN ecoli_data C 
                         ON P.id = C.parent_id
GROUP BY P.id
ORDER BY P.id ASC;
