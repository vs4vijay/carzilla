class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  rescue_from ActionController::RoutingError, with: :error_occurred
  rescue_from ActionController::UnknownController, with: :error_occurred
  rescue_from Exception, with: :error_occurred
  rescue_from NameError, with: :error_occurred

  # protected

  def error_occurred(exception)
    render json: {error: exception.message}, status: 500
    return
  end

  def not_found
    render json: {error: true}
  end

end
