class CreateComparisons < ActiveRecord::Migration[6.1]
  def change
    create_table :comparisons do |t|
      t.string :name
      t.references :category
      t.integer :first_vehicle
      t.integer :second_vehicle

      t.timestamps
    end
    add_foreign_key :comparisons, :categories, column: :category_id
  end
end
