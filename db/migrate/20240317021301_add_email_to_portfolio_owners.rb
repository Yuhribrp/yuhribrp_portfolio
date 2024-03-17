class AddEmailToPortfolioOwners < ActiveRecord::Migration[7.1]
  def change
    add_column :portfolio_owners, :email, :string
  end
end
