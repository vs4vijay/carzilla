Rails.application.routes.draw do

  # root 'application#index'

  scope '/api/v1' do
    resources :cars
  end

end
