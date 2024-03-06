class CreatePortfolioOwners < ActiveRecord::Migration[7.1]
  def change
    create_table :portfolio_owners do |t|
      t.string :name
      t.integer :age
      t.string :location
      t.text :about_me
      t.string :selfie
      t.text :projects, array: true, default: []
      t.text :skills, array: true, default: []
      t.text :technologies, array: true, default: []

      t.timestamps
    end
  end
end
