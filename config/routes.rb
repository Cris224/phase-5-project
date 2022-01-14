Rails.application.routes.draw do
  resources :reviews, only: [:index, :create, :destroy, :update, :show]
  resources :games, only: [:index]
  resources :users, only: [:index, :destroy, :create, :show, :update]
end
