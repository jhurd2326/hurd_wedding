Rails.application.routes.draw do
  root to: "pages#main"
  get "/rsvp_users", to: "rsvps#users"
  resources :rsvps, only: [:create]
end
