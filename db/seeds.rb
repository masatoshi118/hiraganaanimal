# アニマルデータをデータベースに投入
system 'rake import_csv:animal_data'
# 平仮名データをデータベースに投入
system 'rake import_csv:hiragana_data'
# サウンドデータをデータベースに投入
system 'rake import_csv:sounds_data'