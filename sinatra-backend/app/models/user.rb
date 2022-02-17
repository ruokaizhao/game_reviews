class User < ActiveRecord::Base
  has_many :reviews
  has_many :games, through: :reviews

  def self.ids
    self.all.map do |user|
      user.id
    end
  end

end