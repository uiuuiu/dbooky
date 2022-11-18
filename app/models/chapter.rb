class Chapter < ApplicationRecord
  has_many :pages

  def add_page(content)
    self.pages.create!(
      content: content,
      position: self.pages.count + 1
    )
  end
end
