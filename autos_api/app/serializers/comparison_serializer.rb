class ComparisonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :category_id, :vehicle_id
  belongs_to :category_id
  belongs_to :vehicle_id
end
 