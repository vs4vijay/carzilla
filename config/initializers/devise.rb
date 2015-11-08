Devise.setup do |config|
  config.secret_key = 'c73647b2a2ee864b10080b6416bdc352d44b6837d8396d9b01d934703ed63c3c1a6032baa767b9bedaafdaf28480fbf6bd2c0e9f1357d2ca148f85624cf5e311'
  config.mailer_sender = 'vs4vijay@gmail.com'

  require 'devise/orm/mongoid'
end
