class User < ApplicationRecord
  has_secure_password

  belongs_to :project

  validates :email, :username, presence: true
  validates :email, :username, uniqueness: true
end
