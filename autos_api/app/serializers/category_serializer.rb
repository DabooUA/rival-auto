class CategorySerializer 
  include FastJsonapi::ObjectSerializer
  attributes :name, :category
  has_many :vehicles, through: :comparisons 
end
