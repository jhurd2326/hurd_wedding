Rails.application.routes.draw do
  root to: "pages#main"
  resources :rsvps, only: [:create]
  namespace :admin do
    resources :attendees, only: %i(index update destroy)
  end

  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  get "/logout", to: "sessions#destroy"
end
