<b>粗體</b>
<i>斜體</i>
<hr>橫線

<!--利用 ../跳回上一層資料夾 -->
<b><a href="../index.html">Back Home</a></b>

<a href="可以直接放任何形式的檔案mp3、mp4、pdf etc...">File name</a>

<!-- 以寬為100來等比例縮放 -->
<!-- width / height-->
<img src="HISOKA.JPG //.jpg、圖片網址" width="100">

<!-- unorder list-->
<ul>
        <li>google</li>
        <li>facebook</li>
        <li>instagram</li>
        <li>PPT</li>
    </ul>
<!-- order list 1234-->
<ol>
    <li>google</li>
    <li>facebook</li>
    <li>instagram</li>
    <li>PPT</li>
</ol>
<!-- order list abcd-->
<ol type="a">
    <li>google</li>
    <li>facebook</li>
    <li>instagram</li>
    <li>PPT</li>
</ol>

<!-- tr：table row / td： table data-->
<table width="400">
        <tr>
            <td>日期</td>
            <td>數學</td>
            <td>英文</td>
        </tr>
        <tr>
            <td>2/8</td>
            <td>80</td>
            <td>68</td>
        </tr>
</table>


 <!-- html 容器 div & span ：有助於後續去用css作美化-->
 <!-- 下面容器的內容都是紅色 -->
<div style="color: red;">
        <ul>
            <li>google</li>
            <li>facebook</li>
            <li>instagram</li>
            <li>PPT</li>
        </ul>
        <br><br>
        <ol>
            <li>google</li>
            <li>facebook</li>
            <li>instagram</li>
            <li>PPT</li>
        </ol>
        <br><br>
        <ol type="a">
            <li>google</li>
            <li>facebook</li>
            <li>instagram</li>
            <li>PPT</li>
        </ol>
    
        <br><br>
    
        <table width="400">
            <tr>
                <td>日期</td>
                <td>數學</td>
                <td>英文</td>
            </tr>
            <tr>
                <td>2/8</td>
                <td>80</td>
                <td>68</td>
            </tr>
        </table>
    
</div>        


<!-- span 字本身寬度佔多少他就佔多少空間//並排-->
<span>span1</span>
<span>span2</span>
<hr></hr>
<!-- 一個div內容就佔一整行-->
 <div>div1</div>
<div>div2</div>


        <!-- html輸入框-->
<input type="text" placeholder="請輸入帳號"></input>
<br><br>
<!--       密碼遮罩              提示字元      -->
<input type="password" placeholder="請輸入密碼"></input>

<!-- 輸入日期 -->
<input type="date"></input>

<!-- bar -->
<input type="range"></input>

<!-- upload file -->
<input type="file"></input>

<!-- checkbox -->
<input type="checkbox"></input>

<!-- 輸入一篇文本，你好為預設文字-->
<textarea>你好~</textarea>


<head>

<meta charset="UTF-8">
    
<!--下面 meta的content用法主要是在讓搜尋引擎更了解我們在干麻，以頹見其他人-->
 <meta name="content" content="鄭鄭子的html測試網站">
<!-- 表明網頁作者是誰 -->
<meta name="author" content="小鄭">
<!-- 給關鍵字 -->
<meta name="keywords" content="小鄭,html,學習"></meta>
<!-- 視口                     根據瀏覽的裝置寬度做畫面調整 innitial的大小視配合裝置的100%-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">


<title>鄭鄭子的網頁</title>
</head>