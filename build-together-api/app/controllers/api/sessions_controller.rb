require 'auth'
class Api::SessionsController < ApplicationController

  def login
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      render json: {token: Auth.create_token(user)}
    else
      render json: {errors: {message: "unable to find user with that email or password"}}, status: 500
    end
  end

  def logout
  
  end


end