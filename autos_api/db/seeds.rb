# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

car = Category.create(name: 'car')
suv = Category.create(name: 'suv')

vehicles = Vehicle.create([
  {make: 'Honda', model: 'Accord', year: '2021', engine: '1.5L Turbo', passanger_volume: '102.7', safety_rating: '4.9 out 5', cargo_volume: '16.7', m_s_r_p: '$31,090', combined_mpg: '34', quality_reliability: '82 out 100', horsepower: '192', resale_value: '83 out 100', insurance_cost: '$6,993', consumer_rating: '4.5 out 5', category_id: 1},

  {make: 'Toyota', model: 'Camry', year: '2021', engine: '2.5L', passanger_volume: '100.4', safety_rating: '4.9 out 5', cargo_volume: '16.7', m_s_r_p: '$31,090', combined_mpg: '34', quality_reliability: '82 out 100', horsepower: '203', resale_value: '84 out 100', insurance_cost: '$6,993', consumer_rating: '4.5 out 5', category_id: 1},

  {make: 'Hyundai', model: 'Sonata', year: '2021', engine: '1.6L Turbo', passanger_volume: '104.4', safety_rating: '4.6 out 5', cargo_volume: '16.7', m_s_r_p: '$31,090', combined_mpg: '34', quality_reliability: '83 out 100', horsepower: '180', resale_value: '81 out 100', insurance_cost: '$6,993', consumer_rating: '4.5 out 5', category_id: 1},

  {make: 'Honda', model: 'CR-V', year: '2021', engine: '1.5L Turbo', passanger_volume: '102.9', safety_rating: '5 out 5', cargo_volume: '39.2', m_s_r_p: '$31,950', combined_mpg: '29', quality_reliability: '84 out 100', horsepower: '190', resale_value: '86 out 100', insurance_cost: '$6,532', consumer_rating: '4.1 out 5', category_id: 2},

  {make: 'Toyota', model: 'Rav4', year: '2021', engine: '2.5L', passanger_volume: '98.9', safety_rating: '5 out 5', cargo_volume: '37.5', m_s_r_p: '$31,750', combined_mpg: '29', quality_reliability: '84 out 100', horsepower: '203', resale_value: '85 out 100', insurance_cost: '$6,719', consumer_rating: '3.4 out 5', category_id: 2},

  {make: 'Ford', model: 'Escape', year: '2021', engine: '1.5L Turbo', passanger_volume: '102.9', safety_rating: '4.9 out 5', cargo_volume: '39.2', m_s_r_p: '$30,705', combined_mpg: '28', quality_reliability: '75 out 100', horsepower: '181', resale_value: '70 out 100', insurance_cost: '$5,872', consumer_rating: '3.2 out 5', category_id: 2}
])

