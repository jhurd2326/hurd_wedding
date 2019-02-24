class RemoveUserFields < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :email
    remove_column :users, :attending_rehearsal
    remove_column :users, :deletable

    remove_column :rsvps, :code
    remove_column :rsvps, :allow_additions
    remove_column :rsvps, :invited_to_rehearsal
  end
end
