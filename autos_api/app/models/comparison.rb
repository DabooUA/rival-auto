class Comparison < ApplicationRecord
  belongs_to :category 
  belongs_to :first_vehicle, class_name: 'Vehicle', foreign_key: 'first_vehicle_id'
  belongs_to :second_vehicle, class_name: 'Vehicle', foreign_key: 'second_vehicle_id'
end
