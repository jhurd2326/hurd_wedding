# frozen_string_literal: true

class RsvpsController < ApplicationController
  before_action :find_rsvp

  def users
    respond_to do |fmt|
      fmt.json do
        render json: {
          validCode: @rsvp.present?,
          users: ActiveModel::Serializer::CollectionSerializer.new(rsvp_users, serializer: UserSerializer).to_json,
        }
      end
    end
  end

  private

  def rsvp_params
    params.require(:rsvp).permit(:code)
  end

  def find_rsvp
    @rsvp = Rsvp.find_by(code: params[:code].upcase)
  end

  def rsvp_users
    @rsvp&.users || []
  end
end
