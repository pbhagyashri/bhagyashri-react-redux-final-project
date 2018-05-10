class Api::CommentsController < ApplicationController

  def index
    render json: Comment.all, status: 200
  end

  def show
    render json: @comment, status: 200
  end

  def create
    
    project = Project.find(params[:comment][:project_id])
    comment = project.comments.build(comment_params)

    if comment.save
      render json: comment, status: 200
    else
      render json: {message: comment.errors}, status: 400
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: {message: @comment.errors}, status: 400
    end
  end

  def destroy
    if @comment.destroy
      render status: 204
    else
      render json: {message: "unable to process your request"}, status: 400
    end
  end

  private

  def set_comment
    @comment = Comment.find_by(id: params[:id])
  end

  def comment_params
    params.require(:comment).permit(:title, :description, :user_name)
  end

end  