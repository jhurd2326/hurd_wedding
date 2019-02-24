# frozen_string_literal: true

module Admin
  class AttendeesController < BaseController
    def index
      @rsvps = Rsvp.includes(:attendees).all
    end

    def edit
    end

    def destroy
    end
  end
end
