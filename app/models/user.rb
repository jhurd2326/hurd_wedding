# frozen_string_literal: true

class User < ApplicationRecord
  has_person_name
  validates :first_name, :last_name, presence: true

  belongs_to :rsvp

  scope :attending_wedding, -> { where(attending_wedding: true) }
  scope :attending_rehearsal, -> { where(attending_rehearsal: true) }

  delegate :invited_to_rehearsal?, to: :rsvp
end
