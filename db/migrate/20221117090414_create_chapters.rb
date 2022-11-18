class CreateChapters < ActiveRecord::Migration[7.0]
  def change
    create_table :chapters do |t|
      t.string :name
      t.string :path
      t.integer :position
      t.boolean :has_page, default: false
      t.text :description

      t.timestamps
    end

    add_reference :chapters, :book, index: true, foreign_key: true
  end
end
