namespace :import_csv do

  desc '動物データをインポートするタスク'
  task animal_data: :environment do
    #データベースのアニマルデータを消去
    Animal.destroy_all
    # 現在のアニマルデータをインポートした配列を作成
    animal_list = Import.csv_data(path: 'db/csv_data/animal.csv')
    # アニマルデータをデータベースに投入
    Animal.create!(animal_list)
    puts 'アニマルデータの投入に成功しました'
  end

  desc '平仮名データをインポートするタスク'
  task hiragana_data: :environment do
    #データベースの平仮名データを消去
    Hiragana.destroy_all
    # 現在の平仮名データをインポートした配列を作成
    hiragana_list = Import.csv_data(path: 'db/csv_data/hiragana.csv')
    # 平仮名データをデータベースに投入
    Hiragana.create!(hiragana_list)
    puts '平仮名データの投入に成功しました'
  end
end
