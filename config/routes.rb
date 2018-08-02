Rails.application.routes.draw do
  get 'welcome/about', to: 'welcome#about', as: :about

  get :search, controller: :search

  scope '/api' do
    resources :tv
    resources :movies
  end

  resources :tv
  resources :movies
  
  get 'movies/show'
  get 'tv/show'
  
  root 'movies#index'
end
