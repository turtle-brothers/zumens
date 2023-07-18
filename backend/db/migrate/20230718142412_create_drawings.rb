class CreateDrawings < ActiveRecord::Migration[7.0]
  def change
    create_table :drawings do |t|
      t.string :drawing_number
      t.string :product_number
      t.string :product_name
      t.string :destination
      t.string :facility
      t.string :part_class
      t.string :part_name

      t.timestamps
    end
  end
end
