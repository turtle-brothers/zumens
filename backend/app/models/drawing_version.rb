class DrawingVersion < ApplicationRecord
  belongs_to :drawing
  # file_pathという名前のファイルをアタッチすることを宣言
  has_one_attached :file_path
end
