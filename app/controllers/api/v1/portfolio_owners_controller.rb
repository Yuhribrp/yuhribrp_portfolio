class Api::V1::PortfolioOwnersController < ApplicationController

  def create
    portfolio_owner = PortfolioOwner.create(powner_params)
    return render json: portfolio_owner.errors, status: :unprocessable_entity unless portfolio_owner.persisted?

    render json: portfolio_owner, status: :created
  end

  def show
    portfolio_owner = PortfolioOwner.find(params[:id])
    render json: portfolio_owner, status: :ok
  end

  def destroy
  end

  private

  def powner_params
    params.require(:portfolio_owner).permit(:name, :age, :location, :about_me, :selfie, {projects: []}, {skills: []}, {technologies: []})
  end
end
