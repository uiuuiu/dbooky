class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :name, null: false
      t.string :type
      t.string :path
      t.text :description

      t.timestamps
    end

    add_reference :books, :user, index: true, foreign_key: true
  end
end
