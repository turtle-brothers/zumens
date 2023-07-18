class DrawingVersionSerializer < ActiveModel::Serializer
  attributes :id, :description, :file_path, :version_number, :drawing

  def drawing
    Rails.logger.debug "Serializing drawing for DrawingVersion #{object.id}"
    Rails.logger.debug "Drawing attributes: #{object.drawing.attributes}"
    object.drawing.attributes.slice("drawing_number", "product_number", "product_name", "destination", "facility", "part_class", "part_name")
  end

end
