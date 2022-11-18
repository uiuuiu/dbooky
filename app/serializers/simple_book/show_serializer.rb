class SimpleBook::ShowSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :pages
end
