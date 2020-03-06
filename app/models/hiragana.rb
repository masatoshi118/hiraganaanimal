class Hiragana < ApplicationRecord

  MAX_CHAR_NUM = 8
  HIRAGANA = [*"ぁ".."ん"] - ["ぁ", "ぃ", "ぅ", "ぇ", "ぉ", "ゎ", "ゑ", "ゐ", "を"]

  def self.view(animal)
    #名前を一文字ずつ分割して配列としてname_arrayに代入
    name_array = animal[:name].chars.uniq

    # 重複を防ぐためにHIRAGANAからname_arrayを除く
    unique_hiragana_ary = HIRAGANA - name_array

    # 正解の文字とランダムな文字をlistsに代入
    random_char_num = MAX_CHAR_NUM - name_array.length
    lists = name_array + unique_hiragana_ary.sample(random_char_num)

    # Hiraganaモデルから画像urlのリンクを取得
    hiragana_list = Hiragana.where(name: lists)

    # shuffleでランダムに並び替え
    hiragana_list.shuffle
  end
end
