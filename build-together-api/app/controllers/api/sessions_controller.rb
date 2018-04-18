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
  
    user_hash = returned_user[0]
    
    render json: {name: user_hash["user"]["name"], username: user_hash["user"]["username"], email: user_hash["user"]["email"]}
  end

  def logout
  
  end

end