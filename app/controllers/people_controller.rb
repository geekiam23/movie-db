class PeopleController < ApplicationController

  def index
    url = Addressable::URI.parse("https://api.themoviedb.org/3/person/popular?api_key=#{ENV['TMDB_API_KEY']}&language=en-US&page=1")
    response = HTTParty.get(url)

    @people = JSON.parse(response.body, symbolize_names: true) 
    render json: @people[:results].to_json
  end 

  def show
    @people = details(params[:id])

    render json: @people.to_json
  end

  private
  def details(id)
    url = Addressable::URI.parse("https://api.themoviedb.org/3/person/#{id}?api_key=#{ENV['TMDB_API_KEY']}&language=en-US")
    response = HTTParty.get(url)

    @people = {:details => (JSON.parse(response.body, symbolize_names: true))}
  end
end
