# MyLibrary

##　これはなに？
購入した本をスマホの横向きで見るためのWebアプリ

## ライブラリ
node.js(v16.17.0) Express

## 使い方
MyLibrary
│  .gitignore
│  doujin.js
│  package-lock.json
│  package.json
│  
├─node_modules
│          
├─public
│  ├─images　←　cloneしてもないから自作してください
│  │  ├─＊ここに本のタイトルが名前ののフォルダを作る
│  │  │      ＊フォルダの中に画像を入れる001.jpg
│  │  │      
│  │  ├─＊ここに本のタイトルが名前ののフォルダを作る
│  │  　      ＊フォルダの中に画像を入れる_001.png
│  │          
│  └─style
│          image.css
│          
└─views
        book.ejs
        library.ejs
        
node dousin.jsを実行するとimagesの中に作ったフォルダ名のリンクが生成されるのでそれを踏むと画像が表示されます
