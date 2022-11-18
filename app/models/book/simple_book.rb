class Book::SimpleBook < Book
  has_many :pages, foreign_key: :book_id

  def add_page(content)
    self.pages.create!(
      content: content,
      position: self.pages.count + 1
    )
  end
end
