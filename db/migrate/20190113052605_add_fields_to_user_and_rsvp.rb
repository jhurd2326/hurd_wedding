class AddFieldsToUserAndRsvp < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :deletable, :boolean, default: false
    add_column :rsvps, :allow_additions, :boolean, default: false
    add_column :rsvps, :invited_to_rehearsal, :boolean, default: false
  end
end
