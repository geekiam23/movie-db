class Movie < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  has_attached_file :poster, styles: { medium: '300x500#', thumb: "100x100>" }
  validates_attachment_content_type :poster, content_type: /\Aimage\/.*\z/

  settings index: { number_of_shards: 1 } do
    mappings dynamic: 'false' do
      indexes :title, :type => 'text', :analyzer => 'snowball', analyzer: 'english', index_options: 'offsets'
      indexes :duration, analyzer: 'english'
      indexes :director, analyzer: 'english'
      indexes :rating, analyzer: 'english'
      indexes :description, analyzer: 'english'
      indexes :poster_file_name, analyzer: 'english'
    end
  end

  def self.search(query)
    __elasticsearch__.search(
      {
        query: {
          multi_match: {
            query: query,
            fields: ['title^10', 'text']
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