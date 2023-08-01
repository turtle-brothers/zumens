Rails.application.routes.draw do
  # devise_for :users
  # get 'users/create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :drawing_versions, only: [:create, :show, :update, :destroy, :index]
  resources :drawings, only: [:create, :show, :update, :destroy, :index]
  # resources :drawings

  # devise_for :users
  devise_for :users, skip: :registrations, controllers: {sessions: 'sessions'}
  resources :users, only: [:create, :show, :update, :destroy, :index]
end
