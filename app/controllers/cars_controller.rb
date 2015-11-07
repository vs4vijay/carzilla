class CarsController < ApplicationController

  def index
    # Car.create({model: :Swift})
    @cars = Car.all.reverse
    render json: @cars
  end

  def create
    @car = Car.create(car_params)
    render json: @car
  end

  def show

  end

  def update
    @car = Car.find(params[:_id]).update_attributes(car_params)
    render json: car_params
  end

  def destroy
    Car.find(params[:id]).delete
    render json: {deleted: true}
  end

  private

  def car_params
    params.permit(:driver, :model, :year, :desc, {:_id => []}, :c_at, :u_at)
  end

end
