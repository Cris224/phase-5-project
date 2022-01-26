class GameWithReviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :release_date, :description, :image
  has_many :reviews
end
