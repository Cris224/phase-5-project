class GameWithReviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :release_date, :description, :image, :platforms, :critic_score
  has_many :reviews
end
