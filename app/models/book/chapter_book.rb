class Book::ChapterBook < Book
  has_many :chapters, foreign_key: :book_id

  def add_chapter(chapter_title)
    self.chapters.create(
      name: chapter_title
    )
  end
end
