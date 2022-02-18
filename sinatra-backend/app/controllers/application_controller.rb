require "pry"

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  
  get "/" do
    games = Game.all
    games.to_json
  end

  get "/reviews/:gameid" do
    reviews = Review.where(game_id: Game.find_by(name: params[:gameid]).id)
    reviews.to_json
  end

  get "/users" do
    users = User.all
    users.to_json
  end

  post "/reviews" do
    review = Review.create(review: params[:review], game_id: params[:game_id], user_id: params[:user_id])
    review.to_json
  end

  delete "/reviews/:id" do
    review = Review.find(params[:id])
    review.destroy
    review.to_json
  end

  patch "/reviews/:id" do
    review = Review.find(params[:id])
    review.update(review: params[:review])
    review.to_json
  end

end
