class ApiController < ActionController::Base
  private

  def powner_record_validator
    @portfolio_owner = PortfolioOwner.find_by(email: params[:email])
    return render json: { error: 'Something is Wrong. Please, Try Again Later!' }, status: :not_found unless @portfolio_owner
  end

  def params_email_validator
    email = params[:email]
    regex = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    return render json: { error: 'Wrong Params' }, status: :unprocessable_entity unless email
    return render json: { error: 'Wrong Params Format' }, status: :unprocessable_entity unless email.match(regex)
  end
end
