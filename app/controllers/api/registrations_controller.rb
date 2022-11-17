module Api
  class RegistrationsController < Devise::RegistrationsController
    respond_to :json

    private

    def respond_with(resource, _opt = {})
      if resource.persisted?
        render json: {
          status: {code: 200, message: 'Signed up sucessfully'},
          data: UserSerializer.new(resource).serializable_hash
        }
      else
        render json: {
          status: {code: 422, message: "Signed up failed. #{resource.errors.full_messages.to_sentence}"},
        }, status: 422
      end
    end
  end
end