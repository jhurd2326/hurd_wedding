# frozen_string_literal: true

class Rsvp < ApplicationRecord
  has_many :attendees, dependent: :destroy
  accepts_nested_attributes_for :attendees
end
