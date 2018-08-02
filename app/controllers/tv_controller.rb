class TvController < ApplicationController

  def index
    url = Addressable::URI.parse("https://api.themoviedb.org/3/tv/popular?api_key=#{ENV['TMDB_API_KEY']}&language=en-US&page=1")
    response = HTTParty.get(url)

    @tv_shows = JSON.parse(response.body, symbolize_names: true) 
    render json: @tv_shows[:results].to_json
  end 

  def show
    url = Addressable::URI.parse("https://api.themoviedb.org/3/tv/#{params[:id]}?api_key=#{ENV['TMDB_API_KEY']}&language=en-US")
    response = HTTParty.get(url)

    @tv_show = {:details => (JSON.parse(response.body, symbolize_names: true))}

    url = Addressable::URI.parse("https://api.themoviedb.org/3/tv/#{params[:id]}/credits?api_key=#{ENV['TMDB_API_KEY']}&language=en-US")
    response = HTTParty.get(url)

    @cast = JSON.parse(response.body, symbolize_names: true) 

    url = Addressable::URI.parse("https://api.themoviedb.org/3/tv/#{params[:id]}/reviews?api_key=#{ENV['TMDB_API_KEY']}&language=en-US")
    response = HTTParty.get(url)

    @reviews = JSON.parse(response.body, symbolize_names: true) 

    @sub_tv_shows = @tv_show.merge(@cast)

    @all = @sub_tv_shows.merge(@reviews)
    render json: @all.to_json
  end
end
