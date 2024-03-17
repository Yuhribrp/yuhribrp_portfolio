Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    namespace :v1 do
      resources :portfolio_owners, only: [:create, :show]
      resources :resumes, only: [:create]
      get '/resumes', to: 'resumes#show'
      delete '/resumes', to: 'resumes#destroy'
      post '/upload_selfie', to: 'portfolio_owners#upload_selfie'
      post '/download_selfie', to: 'portfolio_owners#download_selfie'
    end
  end
end
