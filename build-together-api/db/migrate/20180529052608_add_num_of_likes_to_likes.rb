class AddNumOfLikesToLikes < ActiveRecord::Migration[5.1]
  def change
    add_column :likes, :num_of_likes, :integer
  end
end
