class Car
  include Mongoid::Document
  include Mongoid::Timestamps::Short
  #include Mongoid::Attributes::Dynamic

  field :_id, type: String, default: ->{ driver }
  field :driver, type: String
  field :model, type: String
  field :year, type: Integer
  field :desc, type: String
end
