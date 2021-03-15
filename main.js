// ページが読み込まれたら実行
window.onload = function () {

    // オブジェクトと変数の準備
    var count1_disp = document.getElementById("count1");
    var count1_up_btn = document.getElementById("id_1");
    var count2_disp = document.getElementById("count2");
    var count2_up_btn = document.getElementById("id_2");
    var count3_disp = document.getElementById("count3");
    var count3_up_btn = document.getElementById("id_3");
    var count1_value = 0;
    var count2_value = 0;
    var count3_value = 0;

        // カウントアップボタンクリック処理
        count1_up_btn.onclick = function () {
            count1_value += 1;
            count1_disp.innerHTML = count1_value;
        }
        // カウントアップボタンのマウスダウン処理
        count1_up_btn.onmousedown = function () {
            count1_up_btn.style.backgroundColor = "#00FF00";
        }
        // カウントアップボタンのマウスアップ処理
        count1_up_btn.onmouseup = function () {
            count1_up_btn.style.backgroundColor = "";
        }

    // カウントアップボタンクリック処理
    count2_up_btn.onclick = function () {
        count2_value += 2;
        count2_disp.innerHTML = count2_value;
    }
    // カウントアップボタンのマウスダウン処理
    count2_up_btn.onmousedown = function () {
        count2_up_btn.style.backgroundColor = "#00FF00";
    }
    // カウントアップボタンのマウスアップ処理
    count2_up_btn.onmouseup = function () {
        count2_up_btn.style.backgroundColor = "";
    }

    // カウントアップボタンクリック処理
    count3_up_btn.onclick = function () {
        count3_value += 1;
        count3_disp.innerHTML = count3_value;
    }
        // カウントアップボタンのマウスダウン処理
    count3_up_btn.onmousedown = function () {
        count3_up_btn.style.backgroundColor = "#00FF00";
    }
    // カウントアップボタンのマウスアップ処理
    count3_up_btn.onmouseup = function () {
        count3_up_btn.style.backgroundColor = "";
    }
};