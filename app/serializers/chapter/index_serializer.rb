class Chapter::IndexSerializer
  include JSONAPI::Serializer
  attributes :id, :name

  has_many :pages, serializer: Page::IndexSerializer
end
