class VehicleSerializer 
  include FastJsonapi::ObjectSerializer
  attributes :category_id, :year, :make, :model, :engine, :passanger_volume, :safety_rating, :cargo_volume, :m_s_r_p, :combined_mpg, :quality_reliability, :horsepower, :resale_value, :picutre, :insurance_cost, :consumer_rating
  has_many :comparisons, through: :vehicle_id
end
