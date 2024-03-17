class PortfolioOwner < ApplicationRecord
  has_one :resume

  validates :email, uniqueness: true
end
