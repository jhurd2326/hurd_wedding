# frozen_string_literal: true

class Rsvp < ApplicationRecord
  validates :code, presence: true
  after_initialize :set_code
  has_many :users

  def set_code
    self.code ||= SecureRandom.hex(3).upcase
  end
end
