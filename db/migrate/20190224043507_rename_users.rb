class RenameUsers < ActiveRecord::Migration[5.2]
  def self.up
    rename_table :users, :attendees
  end

  def self.down
    rename_table :attendees, :users
  end
end
