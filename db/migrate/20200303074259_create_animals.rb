class CreateAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :animal_image_file_name

      t.timestamps
    end
  end
end
