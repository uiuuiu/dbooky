module Api
  class BooksController < BaseController
    before_action :set_book, only: [:show, :update, :destroy]

    def index
      data = current_user.books
      serializer = BookSerializer
      render_data(data: data, serializer: serializer)
    end

    def show
      
    end
    
    def create
      head :ok
    end

    private

    def set_book
      @book = current_user.books.find(params[:id])
    end
  end
end