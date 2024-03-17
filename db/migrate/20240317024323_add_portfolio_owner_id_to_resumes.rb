class AddPortfolioOwnerIdToResumes < ActiveRecord::Migration[7.1]
  def change
    add_reference :resumes, :portfolio_owner, null: false, foreign_key: true
  end
end
