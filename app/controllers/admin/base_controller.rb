# frozen_string_literal: true

module Admin
  class BaseController < ApplicationController
    before_action :authenticate_user

    private

    def authenticate_user
      redirect_to login_path unless logged_in?
    end
  end
end
