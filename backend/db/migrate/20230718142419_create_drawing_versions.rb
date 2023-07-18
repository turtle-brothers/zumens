class CreateDrawingVersions < ActiveRecord::Migration[7.0]
  def change
    create_table :drawing_versions do |t|
      t.references :drawing, null: false, foreign_key: true
      t.text :description
      t.string :file_path
      t.string :version_number

      t.timestamps
    end
  end
end
