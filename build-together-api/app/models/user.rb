class User < ApplicationRecord

  has_many :projects

  validates :email, :username, presence: true
  validates :email, :username, uniqueness: true
  
  has_secure_password
end
