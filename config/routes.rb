Rails.application.routes.draw do
  root to: "pages#main"
  resources :rsvps, only: [:create]
end
