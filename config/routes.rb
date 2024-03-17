Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    namespace :v1 do
      resources :portfolio_owners, only: [:create, :show]
      resources :resumes, only: [:create]
      get '/resumes', to: 'resumes#show'
      delete '/resumes', to: 'resumes#destroy'
    end
  end
end
