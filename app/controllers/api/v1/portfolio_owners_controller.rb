class Api::V1::PortfolioOwnersController < ApiController
  before_action :params_email_validator, only: %i[upload_selfie]
  before_action :powner_record_validator, only: %i[upload_selfie download_selfie]
  before_action :selfie_params_validator, only: %i[upload_selfie]

  def create
    portfolio_owner = PortfolioOwner.create(powner_params)
    return render json: portfolio_owner.errors, status: :unprocessable_entity unless portfolio_owner.persisted?

    render json: portfolio_owner, status: :created
  end

  def show
    begin
      portfolio_owner = PortfolioOwner.find(params[:id])
      render json: portfolio_owner, status: :ok
    rescue => e
      Puts "################### ERROR FUUUUUUUUUUU: #{e.message} ################### "
    end
  end

  def upload_selfie
    @portfolio_owner.selfie.attach(params[:selfie])
    render json: { message: 'Selfie Uploaded' }, status: :ok
  end

  def download_selfie
    send_data @portfolio_owner.selfie.download, type: @portfolio_owner.selfie.content_type, disposition: 'inline'
  end

  def destroy
  end

  private

  def powner_params
    params.require(:portfolio_owner).permit(:name, :email, :age, :location, :about_me, :selfie, {projects: []}, {skills: []}, {technologies: []})
  end

  def selfie_params_validator
    return render json: { error: 'Wrong Params' }, status: :unprocessable_entity unless params[:selfie]
    return render json: { error: 'File is too large' }, status: :unprocessable_entity if params[:selfie].size > 700.kilobytes
  end
end
