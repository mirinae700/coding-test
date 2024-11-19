-- 코드를 입력하세요
SELECT  pt_name,
        pt_no,
        gend_cd,
        age,
        NVL(tlno, 'NONE') tlno
FROM    patient
WHERE   age <= 12
AND     UPPER(gend_cd) = 'W'
ORDER BY age DESC, pt_name;
