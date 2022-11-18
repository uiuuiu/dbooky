module Api
  class BaseController < ApplicationController
    skip_forgery_protection
    before_action :authenticate_user!

    def render_data data:, serializer:
      render json: {
        status: {code: 200},
        data: serializer.new(data).serializable_hash}
      }, status: :ok
    end
  end
end