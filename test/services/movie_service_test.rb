require 'test_helper'

class MovieServiceTest < ActiveSupport::TestCase
  test 'it creates charges' do
    params = {
      amount: 500,
      card: 'TOKEN'
    }
    Tmdb::Movie.expects(:create).with(params).returns(true)
    # This will return false if it fails
    charge = MovieService.new(params).charge
    assert charge
  end

  test 'it creates customers' do
    params = {
      email: 'test@example.card',
      card: 'TOKEN'
    }
    Tmdb::Movie.expects(:create).with(params).returns(true)
    # This will return false if it fails
    customer = MovieService.new(params).create_customer
    assert customer
  end
end