Rails.application.routes.draw do
  get 'welcome/about', to: 'welcome#about', as: :about
  get 'search', to: 'search#search'

  resources :movies do
  	collection do
  		get 'search'
  	end
  end
  
  root 'movies#index'
end
