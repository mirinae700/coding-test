-- 코드를 작성해주세요
SELECT T.item_id, I.item_name, I.rarity
FROM (
    SELECT A.item_id
    FROM item_tree A, item_info B
    WHERE A.parent_item_id = B.item_id
    AND B.rarity = 'RARE'
) T, item_info I
WHERE T.item_id = I.item_id
ORDER BY item_id DESC;