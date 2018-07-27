Rails.application.routes.draw do
  get 'welcome/about', to: 'welcome#about', as: :about
  get 'search', to: 'movies#search'

  resources :movies do
  	collection do
  		get 'search'
  	end
  end
  
  resource :search, only: [:show]

  root 'movies#index'
end
