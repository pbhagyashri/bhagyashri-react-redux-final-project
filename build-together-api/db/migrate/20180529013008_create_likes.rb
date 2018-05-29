class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :project_id
      t.integer :num_of_likes

      t.timestamps
    end
  end
end
