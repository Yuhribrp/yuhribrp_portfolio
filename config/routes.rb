Rails.application.routes.draw do
  if ENV["RAILS_SERVE_STATIC_FILES"].present?
    get "*path", to: static("index.html")
    post "*path", to: static("index.html")
  end
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    namespace :v1 do
      resources :portfolio_owners, only: [:create]
      post '/upload_selfie', to: 'portfolio_owners#upload_selfie'
      post '/powner_profile', to: 'portfolio_owners#powner_profile'
      resources :resumes, only: [:create]
      get '/resumes', to: 'resumes#show'
      delete '/resumes', to: 'resumes#destroy'
    end
  end
end
