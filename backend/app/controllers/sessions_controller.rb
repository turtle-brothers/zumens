# app/controllers/sessions_controller.rb
class SessionsController < Devise::SessionsController
  respond_to :json

  def create
    super do |user|
      return render json: user
    end
  end
end
