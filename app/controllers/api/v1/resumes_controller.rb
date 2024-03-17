class Api::V1::ResumesController < ApiController
  before_action :verify_params, only: %i[create show destroy]
  before_action :validate_portfolio_owner_record

  def create
    resume = @portfolio_owner.build_resume(resume_params)
    return render json: { errors: resume.errors.full_messages }, status: :unprocessable_entity unless resume.save

    render json: { message: 'Pdf File Uploaded' }, status: :created
  end

  def show
    resume = @portfolio_owner.resume
    return render json: { error: 'Resume not found' }, status: :not_found unless resume

    send_data resume.pdf.download, type: 'application/pdf', disposition: 'inline'
  end

  def destroy
    resume = @portfolio_owner.resume
    return render json: { error: 'Resume not found' }, status: :not_found unless resume

    return render json: { errors: 'Unable do Delete Resume' }, status: :unprocessable_entity unless resume.pdf.purge
    render json: { message: 'Pdf File Deleted' }, status: :ok
  end

  private

  def resume_params
    params.permit(:pdf)
  end

  def verify_params
    email = params[:email]
    regex = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    return render json: { error: 'Wrong Params' }, status: :unprocessable_entity unless email
    return render json: { error: 'Wrong Params Format' }, status: :unprocessable_entity unless email.match(regex)
  end
end
