SELECT COUNT(*) fish_count
FROM fish_info FI JOIN fish_name_info FNI
ON FI.fish_type = FNI.fish_type
WHERE FNI.fish_name IN ('BASS', 'SNAPPER');