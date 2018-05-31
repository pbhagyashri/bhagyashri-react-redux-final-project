class Api::LikesController < ApplicationController
  
  def create
    
    @project = Project.find_by(id: params[:like][:project_id])
    like = @project.likes.build(likes_params)
  
    if @project.save
      render json: @project.to_json( :include => [:likes] )
    end
  end

  private
  
  def likes_params
    params.require(:like).permit()
  end

end

