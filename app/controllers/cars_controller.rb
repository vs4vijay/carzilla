class CarsController < ApplicationController

  def index
    # Car.create({model: :Swift})
    @cars = Car.all
    render json: @cars
  end

  def create

  end

  def show

  end

  def update

  end

  def destroy

  end



end
