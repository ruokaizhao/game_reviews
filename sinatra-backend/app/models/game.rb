require "pry"
class Game < ActiveRecord::Base
  has_many :reviews
  has_many :users, through: :reviews


  def self.count
    binding.pry

  end


end