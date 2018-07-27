class Movie < ApplicationRecord
  searchkick

  has_attached_file :poster, styles: { medium: '300x500#', thumb: "100x100>" }
  validates_attachment_content_type :poster, content_type: /\Aimage\/.*\z/

end

Movie.reindex
