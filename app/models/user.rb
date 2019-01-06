# frozen_string_literal: true

class User < ApplicationRecord
  has_person_name
  validates :first_name, :last_name, presence: true
  belongs_to :rsvp
end
