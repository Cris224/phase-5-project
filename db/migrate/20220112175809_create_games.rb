class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :name
      t.string :release_date
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
