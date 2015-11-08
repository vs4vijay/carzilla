class ErrorsController < ApplicationController

  def not_found
    render json: {error: true}
  end

end
