class Api::V1::ResumesController < ApiController
  before_action :params_email_validator, only: %i[create show destroy]
  before_action :powner_record_validator

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

    if resume.purge
      render json: { errors: 'Unable do Delete Resume' }, status: :unprocessable_entity
    else
      render json: { message: 'Pdf File Deleted' }, status: :ok
    end
  end

  private

  def resume_params
    params.permit(:pdf)
  end
end
