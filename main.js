// ページが読み込まれたら実行
window.onload = function () {

    // オブジェクトと変数の準備
    var count1_disp = document.getElementById("count1");
    var count1_now = document.getElementById("count1.1");
    var count1_up_btn = document.getElementById("id_1");
    var count2_disp = document.getElementById("count2");
    var count2_up_btn = document.getElementById("id_2");
    var count3_disp = document.getElementById("count3");
    var count3_up_btn = document.getElementById("id_3");
    var count1_value = 0;
    var count2_value = 0;
    var count3_value = 0;
    var flag = [];
    for (let i = 0; i < 100; i++) {
        flag.push(0);
    }
    console.log(`content: ${flag}, length: ${flag.length}`)
        // カウントアップボタンクリック処理
    count1_up_btn.onclick = function () {
        if (flag[1] === 0) {
            count1_value += 2;
            count1_disp.innerHTML = count1_value;
            count1_now.innerHTML = 98 - count1_value;
            flag[1] = 1;
        } else {
            count1_value -= 2;
            count1_disp.innerHTML = count1_value;
            count1_now.innerHTML = 98 - count1_value;
            flag[1] = 0;
        }
    }
    
        // カウントアップボタンのマウスダウン処理
    count1_up_btn.onmousedown = function () {
        if (flag[1] === 0) {
            count1_up_btn.style.backgroundColor = "#00FF00";
        } else {
            count1_up_btn.style.backgroundColor = "";
        }
    }

            // カウントアップボタンクリック処理
            count2_up_btn.onclick = function () {
                if (flag[2] === 0) {
                    count1_value += 2;
                    count1_disp.innerHTML = count1_value;
                    count1_now.innerHTML = 98 - count1_value;
                    flag[2] = 1;
                } else {
                    count1_value -= 2;
                    count1_disp.innerHTML = count1_value;
                    count1_now.innerHTML = 98 - count1_value;
                    flag[2] = 0;
                }
            }
    

            // カウントアップボタンのマウスダウン処理
    count2_up_btn.onmousedown = function () {
        if (flag[2] === 0) {
            count2_up_btn.style.backgroundColor = "#00FF00";
        } else {
            count2_up_btn.style.backgroundColor = "";
        }
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