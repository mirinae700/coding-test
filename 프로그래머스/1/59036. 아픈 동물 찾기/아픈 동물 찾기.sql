-- 코드를 입력하세요
SELECT animal_id, name
FROM animal_ins
WHERE UPPER(intake_condition) = 'SICK'
ORDER BY animal_id;