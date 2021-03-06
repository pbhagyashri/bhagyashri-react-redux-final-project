require 'auth'

class Api::UsersController < ApplicationController

  before_action :set_user, only: [:show, :edit, :update, :destroy]
  
  def index
  
    render json: User.all
    
  end

  def show
    render json: @user
  end

  def signup
    
    user = User.new(user_params)
    
    if user.save
      # render json: {token: Auth.create_token({id: user.id, name: user.name, username: user.username, email: user.email})}, status: 200

      token = Auth.create_token({name: user.name, username: user.username, id: user.id, email: user.email})
      
      returned_user = Auth.decode_token(token)

      render json: {name: user.name, username: user.username, id: user.id, email: user.email, token: token}, status: 200
    else
      render json: {message: user.errors}, status: 400
    end
  end

  def edit
  end

  def update
    if @user.update(email: params)
      render json: @user
    else
      render json: {message: @user.errors}, status: 400
    end
  end

  def destroy
    if @user.destroy
      render status: 204
    else
      render json: {message: "Unable to process your request"}, status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(:password, :name, :username, :email )
  end
  

  def set_user
    @user = User.find_by(id: params[:id])
  end

end