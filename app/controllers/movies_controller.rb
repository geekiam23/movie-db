class MoviesController < ApplicationController

  def index
    url = Addressable::URI.parse("https://api.themoviedb.org/3/movie/popular?api_key=#{ENV['TMDB_API_KEY']}&language=en-US&page=1")
    response = HTTParty.get(url)

    @movies = JSON.parse(response.body, symbolize_names: true) 
    render json: @movies[:results].to_json
  end 

  def show
    url = Addressable::URI.parse("https://api.themoviedb.org/3/movie/#{params[:id]}?api_key=#{ENV['TMDB_API_KEY']}&language=en-US")
    response = HTTParty.get(url)

    @movie = {:details => (JSON.parse(response.body, symbolize_names: true))}

    url = Addressable::URI.parse("https://api.themoviedb.org/3/movie/#{params[:id]}/credits?api_key=#{ENV['TMDB_API_KEY']}&language=en-US")
    response = HTTParty.get(url)

    @cast = JSON.parse(response.body, symbolize_names: true) 
    
    @sub_movies = @movie.merge(@cast)

    url = Addressable::URI.parse("https://api.themoviedb.org/3/movie/#{params[:id]}/reviews?api_key=#{ENV['TMDB_API_KEY']}&language=en-US")
    response = HTTParty.get(url)

    @reviews = JSON.parse(response.body, symbolize_names: true) 
    
    @sub_movies2 = @sub_movies.merge(@reviews)

    # url = Addressable::URI.parse("https://api.themoviedb.org/3/movie/#{params[:id]}/similar?api_key=#{ENV['TMDB_API_KEY']}&language=en-US")
    # response = HTTParty.get(url)

    # @similar = JSON.parse(response.body, symbolize_names: true) 

    # @all = @sub_movies2.merge(@similar)

    render json: @sub_movies2.to_json
  end


  def search
    @movies = movie_service.find(params[:q])
    render json: @movies
  end
end