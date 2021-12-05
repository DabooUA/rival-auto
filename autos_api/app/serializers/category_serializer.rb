class CategorySerializer 
  include FastJsonapi::ObjectSerializer
  attributes :gategory
  has_many :vehicles, through: :comparisons 
end
