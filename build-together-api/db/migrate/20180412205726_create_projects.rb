class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :languages
      t.text :description
      t.string :duration

      t.timestamps
    end
  end
end
