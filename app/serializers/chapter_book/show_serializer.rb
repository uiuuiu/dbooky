class ChapterBook::ShowSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :chapters
end
