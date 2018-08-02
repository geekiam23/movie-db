class SearchController < ApplicationController
  
  def search
    url = Addressable::URI.parse("https://api.themoviedb.org/3/search/multi?api_key=#{ENV['TMDB_API_KEY']}&language=en-US&query=#{params[:q]}&page=1&include_adult=false")
    response = HTTParty.get(url)

    @search_results = JSON.parse(response.body, symbolize_names: true) 
    render json: @search_results.to_json
  end 
end