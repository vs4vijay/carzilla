class Car
  include Mongoid::Document
  field :model, type: String
  field :year, type: Integer
  field :desc, type: String
end
