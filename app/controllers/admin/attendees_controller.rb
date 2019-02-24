# frozen_string_literal: true

module Admin
  class AttendeesController < BaseController
    def index
      @attendees = Attendee.all.group_by(&:rsvp_id).values
      @attendence = Attendee.attending_wedding.size
      @total_count = Attendee.count
    end

    def edit
    end

    def destroy
    end
  end
end
