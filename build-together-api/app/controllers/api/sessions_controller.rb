require 'auth'
class Api::SessionsController < ApplicationController

  def login
    user = User.find_by(email: params[:email])
    
    if user && user.authenticate(params[:password])
      render json: {token: Auth.create_token({name: user.name, username: user.username, id: user.id, email: user.email})}
    else
      render json: {errors: {message: "Email or Password is not correct."}}, status: 500
    end
  end

  def find_user
    returned_user = Auth.decode_token(params[:token])
    render json: returned_user
  end

  def logout
  
  end

end