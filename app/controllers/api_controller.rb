class ApiController < ActionController::Base

  def validate_portfolio_owner_record
    @portfolio_owner = PortfolioOwner.find_by(email: params[:email])
    return render json: { error: 'Something is Wrong. Please, Try Again Later!' }, status: :not_found unless @portfolio_owner
  end
end
