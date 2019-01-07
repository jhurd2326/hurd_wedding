# frozen_string_literal: true

class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :rsvp_id, :attending_rehearsal, :attending_wedding
end
