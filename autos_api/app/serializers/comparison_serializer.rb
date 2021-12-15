class ComparisonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :category_id, :first_vehicle, :second_vehicle
  belongs_to :category_id
  belongs_to :vehicle_id
end
 