class Api::ReviewsController < ApplicationController

    def index
        render json: Review.all, status: :ok
    end

    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def update
        review = Review.find(params[:id])
        updated_review = review.update(review_params)
        render json: updated_review, status: :accepted
    end

    def destroy
        review = Review.find(params[:id])
        destroyed_review = review.destroy
        render json: destroyed_review, status: :no_content
    end

    def create
        new_review = Review.create!(review_params)
        render json: new_review, status: :created
    end

    
    private

    def review_params
        params.permit(:rating, :comment, :user_id, :game_id)
    end

end
