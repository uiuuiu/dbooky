module Api
  class PagesController < BaseController
    before_action :set_book, only: [:index, :show, :update, :destroy]

    def index
      data = @book.pages
      serializer = Page::IndexSerializer
      render_data(data: data, serializer: serializer)
    end

    def show
      
    end
    
    def create
      head :ok
    end

    private

    def set_book
      @book = current_user.books.find(params[:book_id])
    end
  end
end