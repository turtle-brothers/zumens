class DrawingsController < ApplicationController

    # GET /drawings
    def index
      @drawings = Drawing.all
      render json: @drawings
    end

    # GET /drawings/:id
    def show
      @drawing = Drawing.find(params[:id])
      render json: @drawing
    end

    # POST /drawings
    def create
      @drawing = Drawing.new(drawing_params)
      if @drawing.save
        render json: @drawing, status: :created
      else
        render json: @drawing.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /drawings/:id
    def update
      @drawing = Drawing.find(params[:id])
      if @drawing.update(drawing_params)
        render json: @drawing
      else
        render json: @drawing.errors, status: :unprocessable_entity
      end
    end

    # DELETE /drawings/:id
    def destroy
      @drawing = Drawing.find(params[:id])
      @drawing.destroy
    end

    private

    def drawing_params
      params.require(:drawing).permit(:drawing_number, :product_number, :product_name, :destination, :facility, :part_class, :part_name)
    end
  end
