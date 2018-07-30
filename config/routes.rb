Rails.application.routes.draw do
  get 'welcome/about', to: 'welcome#about', as: :about

  resources :movies 

  scope '/api' do
    resources :movies
  end
  
  root 'movies#index'
end
