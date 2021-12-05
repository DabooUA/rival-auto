class CreateComparisons < ActiveRecord::Migration[6.1]
  def change
    create_table :comparisons do |t|
      t.integer :category_id, foreign_key: true 
      t.integer :vehicle_id, foreign_key: true 

      t.timestamps
    end
  end
end
