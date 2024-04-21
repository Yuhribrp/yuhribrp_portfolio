class Api::V1::PortfolioOwnersController < ApiController
  before_action :params_email_validator, only: %i[upload_selfie powner_profile]
  before_action :powner_record_validator, only: %i[upload_selfie powner_profile]
  before_action :selfie_params_validator, only: %i[upload_selfie]

  def create
    portfolio_owner = PortfolioOwner.create(powner_params)
    return render json: portfolio_owner.errors, status: :unprocessable_entity unless portfolio_owner.persisted?

    render json: portfolio_owner, status: :created
  end

  def powner_profile
    # encoded_selfie = @portfolio_owner.selfie.blob.open do |file|
    #   Base64.encode64(file.read)
    # end
    # render json: @portfolio_owner.as_json.merge!(selfie: encoded_selfie), status: :ok
    render json: @portfolio_owner.as_json, status: :ok
  end

  def upload_selfie
    @portfolio_owner.selfie.attach(params[:selfie])
    render json: { message: 'Selfie Uploaded' }, status: :ok
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
