class User < ApplicationRecord
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    devise :database_authenticatable, :registerable, :rememberable


    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { in: 6..20 }
  end
