SELECT COUNT(*) count
FROM ecoli_data
WHERE (genotype & 1 OR genotype & 4)
AND (genotype & 2) = 0;