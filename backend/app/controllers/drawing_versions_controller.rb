class DrawingVersionsController < ApplicationController
    before_action :set_drawing_version, only: [:show, :update, :destroy]

    # GET /drawing_versions
    def index
      @drawing_versions = DrawingVersion.all
      render json: @drawing_versions, each_serializer: DrawingVersionSerializer
    end

    # GET /drawing_versions/:id
    def show
      # drawing_version = DrawingVersion.find(params[:id])
      file_path_url = Rails.application.routes.url_helpers.rails_blob_path(@drawing_version.file_path, only_path: true)
      render json: @drawing_version, serializer: DrawingVersionSerializer, file_path_url: file_path_url
    end

    # POST /drawing_versions
    def create
      # Rails.logger.debug("Drawing ID: #{params[:drawing_version][:drawing_id]}")
      @drawing_version = DrawingVersion.new(drawing_version_params)
      @drawing_version.file_path.attach(params[:drawing_version][:file_path])

      if @drawing_version.save
        render json: @drawing_version, status: :created, serializer: DrawingVersionSerializer
      else
        # Rails.logger.debug(@drawing_version.errors.full_messages.join("\n"))
        render json: @drawing_version.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /drawing_versions/:id
    def update
      if @drawing_version.update(drawing_version_params)
        render json: @drawing_version, serializer: DrawingVersionSerializer
      else
        render json: @drawing_version.errors, status: :unprocessable_entity
      end
    end

    # DELETE /drawing_versions/:id
    def destroy
      @drawing_version.destroy
      head :no_content
    end


    private

    def set_drawing_version
      @drawing_version = DrawingVersion.find(params[:id])
    end

    def drawing_version_params
      params.require(:drawing_version).permit(:drawing_id, :description, :file_path, :version_number)
    end
  end
