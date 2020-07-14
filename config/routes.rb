Rails.application.routes.draw do
<<<<<<< Updated upstream
 root to: 'posts#index'
 post 'posts', to: 'posts#create'
 get 'posts/:id', to : 'posts#checked'
end

=======
  root to: 'posts#index'
  post 'posts', to: 'posts#create'
  get 'posts/:id', to: 'posts#checked'
end 
>>>>>>> Stashed changes
