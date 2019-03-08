# frozen_string_literal: true

# Sometimes people rsvp for multiple people in one attendee entry.
# Process params before we create an rsvp to try to catch these cases.
class Rsvp::ProcessAttendees
  attr_reader :attendee_attributes

  # If these appear in a name, there is a good chance that the attendee is
  # representing more than one person
  DELIMITERS = %w(and &)

  def initialize(attendee_attributes)
    @attendee_attributes = attendee_attributes
  end

  # Split the first name on specified delimiters and consider each result
  # a separate attendee.
  def perform
    attendee_attributes.flat_map do |att|
      att[:first_name].split(delimiter_regex).map do |name|
        {
          first_name: name,
          last_name: att[:last_name],
          attending_wedding: att[:attending_wedding]
        }
      end
    end
  end

  private

  def delimiter_regex
    /\s#{DELIMITERS.join('\s|\s')}\s/i
  end
end
