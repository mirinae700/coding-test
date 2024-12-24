SELECT '/home/grep/src/' || F.board_id || '/' || F.file_id || F.file_name || F.file_ext file_path
FROM used_goods_board B JOIN used_goods_file F
                        ON B.board_id = F.board_id
WHERE B.views = (SELECT MAX(views) FROM used_goods_board)
ORDER BY F.file_id DESC;