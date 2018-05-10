require 'auth'
class Api::ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy, :project_comments]

  def index
    token = request.env["HTTP_AUTHORIZATION"]

    if token && Auth.decode_token(token)
      render json: Project.all
    else
      render json: {error: {message: "You must be loggedin"}}
    end
  end

  def show
    render json: @project
  end

  def create
    
    project = Project.new(project_params)
    
    if project.save
      render json: project, status: 200
    else
      render json: {message: project.errors}, status: 400
    end
  end

  # def project_comments

  #   if !@project.comments.empty?
  #     render json: @project.comments, status: 200
  #   else
  #     render json: {error: {message: "No comments!"}}
  #   end
  # end

  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: {message: @project.errors}, status: 400
    end
  end

  def destroy
    if @project.destroy
      render status: 204
    else
      render json: {message: "unable to process your request"}, status: 400
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :technology, :description, :duration, :user_id, :user_name, :github_link, :comments => [])
  end

  def set_project
    @project = Project.find_by(id: params[:id])
  end

end


