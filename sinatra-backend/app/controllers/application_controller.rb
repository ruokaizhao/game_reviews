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

end
