class Project < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :likes
  validates :name, presence: true
end
