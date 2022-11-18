class BookSerializer
  include JSONAPI::Serializer
  attributes :id, :name

  attribute :type do |obj|
    obj.type == Book::SimpleBook.name ? 'simple' : 'chapter'
  end
end
