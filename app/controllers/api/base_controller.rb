module Api
  class BaseController < ApplicationController
    skip_forgery_protection
    before_action :authenticate_user!
  end
end