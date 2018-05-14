## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|----|

### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, index: true|
|email|text|null: false, unique: true|
|password|text|null: false|

### Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|----|
|image|text|----|
|group|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
