class PortfolioOwner < ApplicationRecord
  has_one :resume
  has_one_attached :selfie

  validates :email, uniqueness: true
end
