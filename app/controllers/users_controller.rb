class UsersController < ApplicationController

    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find_by(id: params[:user_id])
        if user
        render json: user, status: :ok
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end 

    def destroy
        user = User.find(params[:id])
        destroyed_user = user.destroy
        render json: destroyed_user, status: :no_content
    end

    def update
        user = User.find(params[:id])
        updated_user = user.update(user_params)
        render json: updated_user, status: :accepted
    end

    def create
        new_user = User.create(user_params)
        render json: new_user, status: :created
    end

    private

    def user_params
        params.permit(:name, :username)
    end

end
