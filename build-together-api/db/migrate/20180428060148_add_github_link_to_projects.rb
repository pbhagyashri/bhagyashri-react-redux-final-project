class AddGithubLinkToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :github_link, :string
  end
end
