class Api::GamesController < ApplicationController

    def index
        render json: Game.all, status: :ok
    end

    def show 
        game = Game.find_by(name: params[:id])
        render json:game, serializer: GameWithReviewSerializer, status: :ok
    end

    

end
