class AddUserNameToComment < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :user_name, :string
  end
end
