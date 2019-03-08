# frozen_string_literal: true

class RsvpsController < ApplicationController
  def create
    if Rsvp.create(attendees_attributes: attendee_params)
      render json: { message: t(".success") }
    else
      render json: { message: t(".failure") }
    end
  end

  private

  def rsvp_params
    params.require(:rsvp).permit(attendees_attributes: %i(first_name last_name attending_wedding))
  end

  def attendee_params
    Rsvp::ProcessAttendees.new(rsvp_params[:attendees_attributes]).perform
  end
end
