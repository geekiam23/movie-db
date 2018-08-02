require 'rails_helper'

RSpec.describe SearchController, type: :controller do  
  describe 'GET #search' do
    it 'populates an array of movies' do
      get :search
      expect(assigns(:search_results)).to be_a_kind_of(Hash)
    end

    it 'renders the :search view' do
      get :search
      expect((:search_results).length).to be(14)
    end

    it "returns http success" do
      get :search
      expect(response).to have_http_status(:success)
    end
  end
end
