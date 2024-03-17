class CreateActiveStorageTables < ActiveRecord::Migration[7.0]
  def change
    primary_key_type, foreign_key_type = primary_and_foreign_key_types
  end

  private
    def primary_and_foreign_key_types
      config = Rails.configuration.generators
      setting = config.options[config.orm][:primary_key_type]
      primary_key_type = setting || :primary_key
      foreign_key_type = setting || :bigint
      [primary_key_type, foreign_key_type]
    end
end
