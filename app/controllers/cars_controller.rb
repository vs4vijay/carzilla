class CarsController < ApplicationController

  def index
    # Car.create({model: :Swift})
    @cars = Car.all
    render json: @cars
  end

  def create
    @car = Car.create(params)
    render json: @car.attributes
  end

  def show

  end

  def update
    @car = Car.save_existing(params[:id], params[:car])
    render json: @car.attributes
  end

  def destroy

  end

  private

  def car_params
    params.permit(:driver, :model, :year, :desc, {:_id => []}, :created_at, :updated_at)
  end

end
