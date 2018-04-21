class RemoveProjectIdFromUser < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :project_id, :integer
  end
end
