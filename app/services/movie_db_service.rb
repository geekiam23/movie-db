class MovieDbService
  attr_reader :configuration

  def initialize
    @configuration = Tmdb::Configuration.new
    @tmdb_movie = Tmdb::Movie
    @tmdb_tv = Tmdb::TV
  end

  def movie_popular
    @tmdb_movie.popular
  end

  def tv_popular
    @tmdb_tv.popular
  end

  def movie_detail(id)
    return unless id
    casts_for(@tmdb_tv.detail(id))
  end

  def find(keyword)
    @tmdb_tv.find(keyword) if keyword
  end

  private

  def casts_for(movie)
    movie.merge(
      'casts' => @tmdb_tv.casts(movie['id']).map { |cast| cast['name'] }
    )
  end
end