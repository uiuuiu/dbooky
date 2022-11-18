require 'faker'

user = User.first || User.create(email: 'dy.dev.test1@yopmail.com', password: 'Abc123@', password_confirmation: 'Abc123@')

book_types = [Book::SimpleBook.name, Book::ChapterBook.name]
20.times do
  user.books.create!(
    name: Faker::Book.title,
    type: book_types.sample,
    description: Faker::Lorem.paragraphs(supplemental: true)
  )
end

Book::SimpleBook.all.each do |book|
  (5..20).to_a.sample.times do
    book.add_page(Faker::Markdown.sandwich(sentences: (4..7).to_a.sample))
  end
end

Book::ChapterBook.all.each do |book|
  (3..10).to_a.sample.times do
    chapter = book.add_chapter(Faker::Quote.famous_last_words)
    (1..5).to_a.sample.times do
      chapter.add_page(Faker::Markdown.sandwich(sentences: (4..7).to_a.sample))
    end
  end
end
