class RemoveSelfieFromPortfolioOwners < ActiveRecord::Migration[7.1]
  def change
    remove_column :portfolio_owners, :selfie, :string
  end
end
