class CreateComparisons < ActiveRecord::Migration[6.1]
  def change
    create_table :comparisons do |t|
      t.string :name
      t.references :category
      t.references :first_vehicle, index: true, foreign_key: {to_table: :vehicles}
      t.references :second_vehicle, index: true, foreign_key: {to_table: :vehicles}
      t.timestamps
    end
    add_foreign_key :comparisons, :categories, column: :category_id

  end
end
