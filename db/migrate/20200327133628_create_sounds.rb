class CreateSounds < ActiveRecord::Migration[6.0]
  def change
    create_table :sounds do |t|
      t.string :sound_file_name
      t.timestamps
    end
  end
end
