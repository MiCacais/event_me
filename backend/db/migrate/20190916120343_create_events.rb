class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name
      t.text :description
      t.string :event_start
      t.string :event_end
      t.string :picture
      t.integer :user_id

      t.timestamps
    end
  end
end
