Rails.application.routes.draw do
  resources :comparisons
  resources :vehicles
  resources :categories
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
