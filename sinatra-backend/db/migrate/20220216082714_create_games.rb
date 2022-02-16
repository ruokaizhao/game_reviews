class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.string :company
      t.integer :price
      t.text :introduction
    end
  end
end
