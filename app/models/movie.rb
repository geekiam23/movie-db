class Movie < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  has_attached_file :poster, styles: { medium: '300x500#', thumb: "100x100>" }
  validates_attachment_content_type :poster, content_type: /\Aimage\/.*\z/

  settings index: { number_of_shards: 1 } do
    mappings dynamic: 'false' do
      indexes :title, analyzer: 'english', index_options: 'offsets'
      indexes :duration, analyzer: 'english', index_options: 'offsets'
      indexes :director, analyzer: 'english', index_options: 'offsets'
      indexes :rating, analyzer: 'english', index_options: 'offsets'
      indexes :description, analyzer: 'english', index_options: 'offsets'
      indexes :poster_file_name, analyzer: 'english', index_options: 'offsets'
    end
  end

  def self.search(query)
    __elasticsearch__.search(
      {
        query: {
          multi_match: {
            query: query,
            fields: ['title^10', 'duration', 'director', 'rating', 'description', 'poster_file_name']
          }
        },
        highlight: {
          pre_tags: ['<em>'],
          post_tags: ['</em>'],
          fields: {
            title: {},
            duration: {},
            director: {},
            rating: {},
            description: {},
            poster_file_name: {}
          }
        }
      }
    )
  end
end

# Delete the previous Posts index in Elasticsearch
 Movie.__elasticsearch__.client.indices.delete index: Movie.index_name rescue nil

# Create the new index with the new mapping
 Movie.__elasticsearch__.client.indices.create \
   index: Movie.index_name,
   body: { settings: Movie.settings.to_hash, mappings: Movie.mappings.to_hash }

# Index all Post records from the DB to Elasticsearch
Movie.import