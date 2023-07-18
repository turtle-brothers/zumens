class User < ApplicationRecord
    has_many :user_group_memberships
    has_many :user_groups, through: :user_group_memberships
  end
