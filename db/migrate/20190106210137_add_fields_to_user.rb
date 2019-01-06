class AddFieldsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :attending_wedding, :boolean, default: false
    add_column :users, :attending_rehearsal, :boolean, default: false
  end
end
