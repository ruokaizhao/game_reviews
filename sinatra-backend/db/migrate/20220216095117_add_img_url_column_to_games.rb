class AddImgUrlColumnToGames < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :img, :string
  end
end
