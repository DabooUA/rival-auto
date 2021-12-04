class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.string :category_id
      t.string :year
      t.string :make
      t.string :model
      t.string :engine
      t.string :passanger_volume
      t.string :safety_rating
      t.string :cargo_volume
      t.string :m_s_r_p
      t.string :combined_mpg
      t.string :quaily_reliability
      t.string :horsepower
      t.string :resale_value
      t.string :picutre
      t.string :insurance_cost
      t.string :consumer_rating

      t.timestamps
    end
  end
end
