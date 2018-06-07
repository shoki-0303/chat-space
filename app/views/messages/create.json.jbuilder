json.message do
  json.id         @message.id
  json.user_name  @message.user.name
  json.content    @message.content
  json.image_url  @message.image
  json.created_at @message.created_at
end
