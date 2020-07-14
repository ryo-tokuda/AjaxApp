function memo(){
  const submit = document.getElementById("submit");
  submit.addEventListener("click",(e)=> {
    const formData =  new FormData (document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST","/posts",true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () =>{
      const item = XHR.response.post;  //レスポンスとして返却されたメモのレコードデータ
      const list = document.getElementById("list"); //描画する親要素のlistの要素を取得
      const formText = document.getElementById("content"); //メモの入力フォームをリセット


      //下記はメモとして描画する部分のHTMLを定義している//
      const HTML = `        
      <div class ="post" data-id=${item.id}>
         <div class="post-data">
           投稿日時:${item.created_at}
         </div>
         <div class ="post-content">
           ${item.content}
         </div>
      </div>`;
      list.insertAdjacentHTML("afterend",HTML); 
      //list要素に対してinsertAdjacentHTMLでHTMLを追加
      //第一引数にafterendを指定することで、listの要素直後に挿入

       formText.value = "";
         //メモの入力フォームに入力されたままの文字はリセット、空も文字列に上書きしている
         //下記は200以外のHTTPステータスが返却された場合の処理内容
       if (XHR.status !=200) {
         alert(`Error ${XHR.status}: ${XHR.statusText}`);
       } else {
         return null;
       }
    };
      XHR.onerror = function(){
          alert("Request failed");
      };
      e.preventDefault();
  })
}
window.addEventListener("load",memo);





