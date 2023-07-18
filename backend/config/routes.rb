Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :drawing_versions, only: [:create, :show, :update, :destroy, :index]
  resources :drawings, only: [:create, :show, :update, :destroy, :index]
  # resources :drawings
end
