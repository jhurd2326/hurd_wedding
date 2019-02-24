# frozen_string_literal: true

class Attendee < ApplicationRecord
  has_person_name
  validates :first_name, :last_name, presence: true

  belongs_to :rsvp

  scope :attending_wedding, -> { where(attending_wedding: true) }
end
