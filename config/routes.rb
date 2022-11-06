Rails.application.routes.draw do
  root 'components#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "dashboard", to: 'components#index'
  get "edit_book", to: 'components#index'

  namespace :api do
    resources :books
  end
end
