Rails.application.routes.draw do

  root 'application#index'

  scope '/api/v1' do
    resources :cars
  end

  match '*path', to: 'application#error_occurred', via: :all

end
