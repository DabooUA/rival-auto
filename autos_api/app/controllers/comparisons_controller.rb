class ComparisonsController < ApplicationController
  before_action :set_comparison, only: [:show, :update, :destroy]

  # GET /comparisons
  def index
    comparisons = Comparison.all

    render json: ComparisonsSerializer.new(comparison).serializable_hash
  end

  # GET /comparisons/1
  def show
    comparison = Comparison.find(params[:id])
    options = {
      include: [:category, :vehicle]
    }
    render json: ComparisonsSerializer.new(set_comparison).serializable_hash
  end

  # POST /comparisons
  def create
    comparison = Comparison.new(comparison_params)

    if comparison.save
      render json: comparison, status: :created, location: comparison
      render json: {message: 'Comperison successfully created!'}
    else
      render json: comparison.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comparisons/1
  def update
    if comparison.update(comparison_params)
      render json: comparison
      render json: {message: 'Comperison successfully updated!'}
    else
      render json: comparison.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comparisons/1
  def destroy
    comparison.destroy
    render json: {message: 'Comperison successfully deleted!'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comparison
      comparison = Comparison.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comparison_params
      params.require(:comparison).permit(:category_id, :vehicle_id, :name)
    end
end
