class MoviesController < ApplicationController

  def index
    url = Addressable::URI.parse("https://api.themoviedb.org/3/movie/popular?api_key=#{ENV['TMDB_API_KEY']}&language=en-US&page=1")
    response = HTTParty.get(url)

    @movies = JSON.parse(response.body, symbolize_names: true) 
    render json: @movies[:results].to_json
  end 

  def show
    @movie = details(params[:id])

    @cast = getMovieInfo(params[:id], "/credits")
    @sub_movies = @movie.merge(@cast)

    @reviews = getMovieInfo(params[:id], "/reviews")
    @reviews["reviews"] = @reviews.delete("results")
    @sub_movies2 = @sub_movies.merge(@reviews)

    @similar = getMovieInfo(params[:id], "/similar")
    @similar["similar"] = @similar.delete("results")

    @all = @sub_movies2.merge!(@similar)
    render json: @all.to_json
  end


  def search
    @movies = movie_service.find(params[:q])
    render json: @movies
  end

  private
  def details(id)
    url = Addressable::URI.parse("https://api.themoviedb.org/3/movie/#{id}?api_key=#{ENV['TMDB_API_KEY']}&language=en-US")
    response = HTTParty.get(url)

    @movie = {:details => (JSON.parse(response.body, symbolize_names: true))}
  end


  def getMovieInfo(id, type)
    url = Addressable::URI.parse("https://api.themoviedb.org/3/movie/#{params[:id]}#{type}?api_key=#{ENV['TMDB_API_KEY']}&language=en-US")
    response = HTTParty.get(url)
  end
end