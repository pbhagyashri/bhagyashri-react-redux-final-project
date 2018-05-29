require 'auth'
class Api::ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy, :project_comments]

  def index    
    
    if user_logged_in?
      render :json => Project.all.to_json( :include => [:likes] )
    else
      render json: {error: {message: "You must be loggedin"}}
    end
  end

  def show
    if user_logged_in? && @project
      render json: @project.to_json( :include => [:comments] ), status: 200
    else
      render json: {error: {message: "You must be loggedin"}}
    end
  end

  def create
      
      project = Project.new(project_params)
      
      if project.save
        render json: {name: project.name, technology: project.technology, description: project.description, duration: project.duration, num_of_likes: project.likes}, status: 200
      else
        render json: {message: project.errors}, status: 400
      end
  end

  def update

    # if user_logged_in? && current_user["id"] == @project.id
      
      if @project.update(project_params)
        render json: @project
      else
        render json: {message: @project.errors}, status: 400
      end
    # end
  
  end

  def destroy
    #if user_logged_in? && current_user["id"] == @project.id
      if @project.destroy
        render status: 204
      else
        render json: {message: "unable to process your request"}, status: 400
      end
    #end
  end

  private

  def user_logged_in?
    token = request.env["HTTP_AUTHORIZATION"]
    token && Auth.decode_token(token) ? true : false
  end

  def current_user
    token = request.env["HTTP_AUTHORIZATION"]
    token && Auth.decode_token(token) ? Auth.decode_token(token)[0]["user"] : false
  end

  def project_params
    params.require(:project).permit(:name, :technology, :description, :duration, :user_id, :user_name, :github_link, :comments => [])
  end

  def set_project
    @project = Project.find_by(id: params[:id])
  end

end


