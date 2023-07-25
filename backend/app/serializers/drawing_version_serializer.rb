# class DrawingVersionSerializer < ActiveModel::Serializer
#   attributes :id, :description, :file_path, :version_number, :drawing_id
# end


class DrawingVersionSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :description, :version_number, :drawing_id, :file_path_url

  def file_path_url
    if object.file_path.attached?
      rails_blob_url(object.file_path, host: '172.21.23.89') #172.21.23.89は再起動ごとに変更される
    end
  end
end
