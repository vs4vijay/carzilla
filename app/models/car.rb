class Car
  include Mongoid::Document
  include Mongoid::Timestamps
  #include Mongoid::Attributes::Dynamic

  field :driver, type: String
  field :model, type: String
  field :year, type: Integer
  field :desc, type: String
end
