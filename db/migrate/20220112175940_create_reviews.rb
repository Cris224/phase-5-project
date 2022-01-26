class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :comment
      # t.belongs_to :user, null: false, foreign_key: true
      # t.belongs_to :game, null: false, foreign_key: true
      t.references :user, :game

      t.timestamps
    end
  end
end
