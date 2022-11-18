class CreatePages < ActiveRecord::Migration[7.0]
  def change
    create_table :pages do |t|
      t.string :path
      t.string :name
      t.integer :position
      t.text :content

      t.timestamps
    end

    add_reference :pages, :chapter, index: true
    add_reference :pages, :book, index: true
  end
end
