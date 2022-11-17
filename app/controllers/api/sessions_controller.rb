module Api
  class SessionsController < Devise::SessionsController
    skip_forgery_protection
    respond_to :json

    private

    def respond_with(resource, _opt = {})
      render json: {
        status: {code: 200, message: 'Signed up sucessfully'},
        data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
      }, status: :ok
    end

    def respond_to_on_destroy
      render json: {
        status: 200,
        message: "Logged out sucessfully"
      }, status: :ok
    end
  end
end