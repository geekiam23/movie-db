Rails.application.routes.draw do
  get 'welcome/about', to: 'welcome#about', as: :about

  resources :movies do
  	collection do
  		get 'search'
  	end
  end

  scope '/api' do
    resources :movies
  end
  
  resource :search, only: [:show]

  root 'movies#index'
end
