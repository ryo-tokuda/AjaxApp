class PostsController < ApplicationController

 def index 
  @posts = Post.all.order(id: "DESC")
 end


 def create
  post = Post.create(content: params[:content], checked: false)
  redirect_to action: :index  
  render json:{ post: post }
end

 def checked

   post = Post.find(params[:id])
   #設定したURLパラメーターから、既読したメモのidが渡されるように設定するので、そのidを使用して該当するレコードを取得
   if post.checked then
      post.update(checked: false)
   else
      post.update(checked: true)
   end
   #checkedアクションで返却したitemは、XHR.response.postで取得
     item = Post.find(params[:id])
     render json: { post: item }
   #更新したレコードをitem = Post.find(params[:id])で取得し直し、render json:{ post: item }でJSON形式（データ）として返却
  end
end
