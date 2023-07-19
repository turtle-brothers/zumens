export type Drawing = {
  id: number;
  imageUrl: string;
  drawing_number: string;
  product_number: string;
  product_name: string;
  destination: string;
  facility: string;
  part_class: string;
  part_name: string;
};

export type DrawingVersion = {
  id: number;
  drawing_id: number;
  description: string;
  file_path: string;
  version_number: string;
  drawing: Drawing;
};
