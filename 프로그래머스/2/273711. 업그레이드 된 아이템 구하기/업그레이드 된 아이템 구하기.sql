-- 코드를 작성해주세요
SELECT  INFO.item_id,
        INFO.item_name,
        INFO.rarity
FROM    item_info INFO 
        JOIN item_tree TREE
        ON INFO.item_id = TREE.item_id
WHERE TREE.parent_item_id IN (SELECT item_id FROM item_info WHERE rarity = 'RARE')
ORDER BY 1 DESC;