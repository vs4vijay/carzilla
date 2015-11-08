Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: '/auth'

  root 'application#index'

  scope '/api/v1' do
    resources :cars
  end

  match '*path', to: 'application#error_occurred', via: :all

end
