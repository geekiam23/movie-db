require 'rails_helper'

RSpec.describe MoviesController, type: :controller do
  
  describe 'GET #index' do
    it 'populates an array of movies' do
      get :index
      expect(assigns(:movies)).to be_a_kind_of(Hash)
    end

    it 'renders the :index view' do
      get :index
      expect((:movies).length).to be(6)
    end
  end

  describe "GET #show" do
    it 'renders the :show view' do
      get :show
      expect((:movies).length).to be(6)
    end

    it "returns http success" do
      get :show
      expect(response).to have_http_status(:success)
    end
  end
end
