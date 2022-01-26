Rails.application.routes.draw do
  resources :reviews, only: [:index, :create, :destroy, :update, :show]
  


  resources :games, only: [:index]
  get 'games/:name', to: 'games#show'
  
  
  resources :users, only: [:index, :destroy, :create, :show, :update]
  get "/me", to: 'users#show'


  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

end
