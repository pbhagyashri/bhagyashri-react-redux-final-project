Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users, only: [:edit, :update, :destroy, :show, :index]
    
    post "/signup", to: "users#signup"
    post "/login", to: "sessions#login"
    get "/logout", to: "sessions#destroy"
    post "/find_user", to: "sessions#find_user"

    resources :projects, only: [:index, :create, :edit, :show, :update, :destroy]
  end
end
