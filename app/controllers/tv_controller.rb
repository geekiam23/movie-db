class TvController < ApplicationController

  def index
    url = Addressable::URI.parse("https://api.themoviedb.org/3/tv/popular?api_key=#{ENV['TMDB_API_KEY']}&language=en-US&page=1")
    response = HTTParty.get(url)

    @tv_shows = JSON.parse(response.body, symbolize_names: true) 
    render json: @tv_shows[:results].to_json
  end 

  def show
    @tv_show = details(params[:id])

    @cast = getTvInfo(params[:id], "/credits")
    @sub_tv_shows = @tv_show.merge(@cast)

    @reviews = getTvInfo(params[:id], "/reviews")
    @reviews["reviews"] = @reviews.delete("results")
    @sub_tv_shows2 = @sub_tv_shows.merge(@reviews)

    @similar = getTvInfo(params[:id], "/similar")
    @similar["similar"] = @similar.delete("results")

    @all = @sub_tv_shows2.merge!(@similar)
    render json: @all.to_json
  end

  private
  def details(id)
    url = Addressable::URI.parse("https://api.themoviedb.org/3/tv/#{id}?api_key=#{ENV['TMDB_API_KEY']}&language=en-US")
    response = HTTParty.get(url)

    @tv_show = {:details => (JSON.parse(response.body, symbolize_names: true))}
  end


  def getTvInfo(id, type)
    url = Addressable::URI.parse("https://api.themoviedb.org/3/tv/#{params[:id]}#{type}?api_key=#{ENV['TMDB_API_KEY']}&language=en-US")
    response = HTTParty.get(url)
  end
end
