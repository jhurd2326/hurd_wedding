# frozen_string_literal: true

class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(username: session_params[:username])

    if user && user.authenticate(session_params[:password])
      session[:user_id] = user.id
      render json: { status: "success", redirect_to: admin_attendees_path }
    else
      render json: { status: "error", message: t(".failure") }
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end

  private

  def session_params
    params.require(:session).permit(:username, :password)
  end
end
