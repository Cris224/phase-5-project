Rails.application.routes.draw do
  namespace :api do
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  resources :reviews, only: [:index, :create, :destroy, :update, :show]
  


  resources :games
  get 'games/:name', to: 'games#show'
  
  
  resources :users, only: [:index, :destroy, :create, :show, :update]
  get "/me", to: 'users#show'
  end
end
