class Page::IndexSerializer
  include JSONAPI::Serializer
  attributes :id, :content

  attribute :name do |obj|
    "Page #{obj.position}"  
  end
end
