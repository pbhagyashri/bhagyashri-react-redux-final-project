class Api::LikesController < ApplicationController
  
  def create
    
    @project = Project.find_by(id: params[:like][:project_id])
    like = @project.likes.build(likes_params)
  
    if @project.save
      render json: {id: @project.id, name: @project.name, technology: @project.technology, description: @project.description, duration: @project.duration, likes: @project.likes}, status: 200
    end
  end

  private
  
  def likes_params
    params.require(:like).permit(:num_of_likes)
  end

end