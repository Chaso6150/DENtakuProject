// ページが読み込まれたら実行
window.onload = function () {

    // オブジェクトと変数の準備
    var count1_disp = document.getElementById("count1");
    var count1_now = document.getElementById("count_n1");
    var count2_disp = document.getElementById("count2");
    var count2_now = document.getElementById("count_n2");
    var count3_disp = document.getElementById("count3");
    var count3_now = document.getElementById("count_n3");
    var count4_disp = document.getElementById("count4");
    var count4_now = document.getElementById("count_n4");
    var count5_disp = document.getElementById("count5");
    var count5_now = document.getElementById("count_n5");
    var count6_disp = document.getElementById("count6");
    var count6_now = document.getElementById("count_n6");
    var count7_disp = document.getElementById("count7");
    var count7_now = document.getElementById("count_n7");
    var count8_disp = document.getElementById("count8");
    var count8_now = document.getElementById("count_n8");
    var count9_disp = document.getElementById("count9");
    var count9_now = document.getElementById("count_n9");

    var count1_up_btn = document.getElementById("id_1");
    var count2_up_btn = document.getElementById("id_2");
    var count3_up_btn = document.getElementById("id_3");
    var count4_up_btn = document.getElementById("id_4");
    var count5_up_btn = document.getElementById("id_5");
    var count6_up_btn = document.getElementById("id_6");
    var count7_up_btn = document.getElementById("id_7");
    var count8_up_btn = document.getElementById("id_8");
    var count9_up_btn = document.getElementById("id_9");
    var count10_up_btn = document.getElementById("id_10");
    var count11_up_btn = document.getElementById("id_11");
    var count12_up_btn = document.getElementById("id_12");
    var count13_up_btn = document.getElementById("id_13");
    var count14_up_btn = document.getElementById("id_14");
    var count15_up_btn = document.getElementById("id_15");
    var count16_up_btn = document.getElementById("id_16");
    var count17_up_btn = document.getElementById("id_17");
    var count18_up_btn = document.getElementById("id_18");
    var count19_up_btn = document.getElementById("id_19");
    var count20_up_btn = document.getElementById("id_20");
    var count21_up_btn = document.getElementById("id_21");
    var count22_up_btn = document.getElementById("id_22");
    var count23_up_btn = document.getElementById("id_23");
    var count24_up_btn = document.getElementById("id_24");
    var count25_up_btn = document.getElementById("id_25");
    var count26_up_btn = document.getElementById("id_26");
    var count27_up_btn = document.getElementById("id_27");
    var count28_up_btn = document.getElementById("id_28");
    var count29_up_btn = document.getElementById("id_29");
    var count30_up_btn = document.getElementById("id_30");
    var count31_up_btn = document.getElementById("id_31");
    var count32_up_btn = document.getElementById("id_32");
    var count33_up_btn = document.getElementById("id_33");
    var count34_up_btn = document.getElementById("id_34");
    var count35_up_btn = document.getElementById("id_35");
    var count36_up_btn = document.getElementById("id_36");
    var count37_up_btn = document.getElementById("id_37");
    var count38_up_btn = document.getElementById("id_38");
    var count39_up_btn = document.getElementById("id_39");
    var count40_up_btn = document.getElementById("id_40");
    var count41_up_btn = document.getElementById("id_41");
    var count42_up_btn = document.getElementById("id_42");
    var count43_up_btn = document.getElementById("id_43");
    var count44_up_btn = document.getElementById("id_44");
    var count45_up_btn = document.getElementById("id_45");
    var count46_up_btn = document.getElementById("id_46");
    var count47_up_btn = document.getElementById("id_47");
    var count48_up_btn = document.getElementById("id_48");
    var count49_up_btn = document.getElementById("id_49");
    var count50_up_btn = document.getElementById("id_50");
    var count51_up_btn = document.getElementById("id_51");
    var count52_up_btn = document.getElementById("id_52");
    var count53_up_btn = document.getElementById("id_53");
    var count54_up_btn = document.getElementById("id_54");
    var count55_up_btn = document.getElementById("id_55");
    var count56_up_btn = document.getElementById("id_56");
    var count57_up_btn = document.getElementById("id_57");
    var count58_up_btn = document.getElementById("id_58");
    var count59_up_btn = document.getElementById("id_59");
    var count60_up_btn = document.getElementById("id_60");
    var count61_up_btn = document.getElementById("id_61");
    var count62_up_btn = document.getElementById("id_62");
    var count63_up_btn = document.getElementById("id_63");

    var count1_value = 0;
    var count2_value = 0;
    var count3_value = 0;
    var count4_value = 0;
    var count5_value = 0;
    var count6_value = 0;
    var count7_value = 0;
    var count8_value = 0;
    var count9_value = 0;
    var flag = [];

    for (let i = 0; i < 100; i++) {
        flag.push(0);
    }

    console.log(`content: ${flag}, length: ${flag.length}`)
    // カウントアップボタンクリック処理
    count1_up_btn.onclick = function () {
        if (flag[1] === 0) {
            count9_value += 2;
            count9_disp.innerHTML = count9_value;
            count9_now.innerHTML = 98 - count9_value;
            flag[1] = 1;
        } else {
            count9_value -= 2;
            count9_disp.innerHTML = count9_value;
            count9_now.innerHTML = 98 - count9_value;
            flag[1] = 0;
        }
        if (count9_now.innerHTML < 0) {
            count9_now.style.backgroundColor = "#00a2e8";
        }
    }

    count2_up_btn.onclick = function () {
        if (flag[2] === 0) {
            count9_value += 2;
            count9_disp.innerHTML = count9_value;
            count9_now.innerHTML = 98 - count9_value;
            flag[2] = 1;
        } else {
            count9_value -= 2;
            count9_disp.innerHTML = count9_value;
            count9_now.innerHTML = 98 - count9_value;
            flag[2] = 0;
        }
    }

    count1_up_btn.onmousedown = function () {
        if (flag[1] === 0) {
            count1_up_btn.style.backgroundColor = "#00FF00";
        } else {
            count1_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";
        }
    }
    count2_up_btn.onmousedown = function () {
        if (flag[2] === 0) {
            count2_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count2_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count3_up_btn.onmousedown = function () {
        if (flag[3] === 0) {
            count3_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count3_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count4_up_btn.onmousedown = function () {
        if (flag[4] === 0) {
            count4_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count4_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count5_up_btn.onmousedown = function () {
        if (flag[5] === 0) {
            count5_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count5_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count6_up_btn.onmousedown = function () {
        if (flag[6] === 0) {
            count6_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count6_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count7_up_btn.onmousedown = function () {
        if (flag[7] === 0) {
            count7_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count7_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count8_up_btn.onmousedown = function () {
        if (flag[8] === 0) {
            count8_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count8_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count9_up_btn.onmousedown = function () {
        if (flag[9] === 0) {
            count9_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count9_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count10_up_btn.onmousedown = function () {
        if (flag[10] === 0) {
            count10_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count10_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count11_up_btn.onmousedown = function () {
        if (flag[11] === 0) {
            count11_up_btn.style.backgroundColor = "#00FF00";
        } else {
            count11_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";
        }
    }
    count12_up_btn.onmousedown = function () {
        if (flag[12] === 0) {
            count12_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count12_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count13_up_btn.onmousedown = function () {
        if (flag[13] === 0) {
            count13_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count13_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count14_up_btn.onmousedown = function () {
        if (flag[14] === 0) {
            count14_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count14_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count15_up_btn.onmousedown = function () {
        if (flag[15] === 0) {
            count15_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count15_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count16_up_btn.onmousedown = function () {
        if (flag[16] === 0) {
            count16_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count16_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count17_up_btn.onmousedown = function () {
        if (flag[17] === 0) {
            count17_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count17_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count18_up_btn.onmousedown = function () {
        if (flag[18] === 0) {
            count18_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count18_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count19_up_btn.onmousedown = function () {
        if (flag[19] === 0) {
            count19_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count19_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count20_up_btn.onmousedown = function () {
        if (flag[20] === 0) {
            count20_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count20_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count21_up_btn.onmousedown = function () {
        if (flag[21] === 0) {
            count21_up_btn.style.backgroundColor = "#00FF00";
        } else {
            count21_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";
        }
    }
    count22_up_btn.onmousedown = function () {
        if (flag[22] === 0) {
            count22_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count22_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count23_up_btn.onmousedown = function () {
        if (flag[23] === 0) {
            count23_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count23_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count24_up_btn.onmousedown = function () {
        if (flag[24] === 0) {
            count24_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count24_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count25_up_btn.onmousedown = function () {
        if (flag[25] === 0) {
            count25_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count25_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count26_up_btn.onmousedown = function () {
        if (flag[26] === 0) {
            count26_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count26_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count27_up_btn.onmousedown = function () {
        if (flag[27] === 0) {
            count27_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count27_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count28_up_btn.onmousedown = function () {
        if (flag[28] === 0) {
            count28_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count28_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count29_up_btn.onmousedown = function () {
        if (flag[29] === 0) {
            count29_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count29_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count30_up_btn.onmousedown = function () {
        if (flag[30] === 0) {
            count30_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count30_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count31_up_btn.onmousedown = function () {
        if (flag[31] === 0) {
            count31_up_btn.style.backgroundColor = "#00FF00";
        } else {
            count31_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";
        }
    }
    count32_up_btn.onmousedown = function () {
        if (flag[32] === 0) {
            count32_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count32_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count33_up_btn.onmousedown = function () {
        if (flag[33] === 0) {
            count33_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count33_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count34_up_btn.onmousedown = function () {
        if (flag[34] === 0) {
            count34_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count34_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count35_up_btn.onmousedown = function () {
        if (flag[35] === 0) {
            count35_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count35_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count36_up_btn.onmousedown = function () {
        if (flag[36] === 0) {
            count36_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count36_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count37_up_btn.onmousedown = function () {
        if (flag[37] === 0) {
            count37_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count37_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count38_up_btn.onmousedown = function () {
        if (flag[38] === 0) {
            count38_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count38_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count39_up_btn.onmousedown = function () {
        if (flag[39] === 0) {
            count39_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count39_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count40_up_btn.onmousedown = function () {
        if (flag[40] === 0) {
            count40_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count40_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count41_up_btn.onmousedown = function () {
        if (flag[41] === 0) {
            count41_up_btn.style.backgroundColor = "#00FF00";
        } else {
            count41_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";
        }
    }
    count42_up_btn.onmousedown = function () {
        if (flag[42] === 0) {
            count42_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count42_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count43_up_btn.onmousedown = function () {
        if (flag[43] === 0) {
            count43_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count43_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count44_up_btn.onmousedown = function () {
        if (flag[44] === 0) {
            count44_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count44_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count45_up_btn.onmousedown = function () {
        if (flag[45] === 0) {
            count45_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count45_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count46_up_btn.onmousedown = function () {
        if (flag[46] === 0) {
            count46_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count46_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count47_up_btn.onmousedown = function () {
        if (flag[47] === 0) {
            count47_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count47_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count48_up_btn.onmousedown = function () {
        if (flag[48] === 0) {
            count48_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count48_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count49_up_btn.onmousedown = function () {
        if (flag[49] === 0) {
            count49_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count49_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count50_up_btn.onmousedown = function () {
        if (flag[50] === 0) {
            count50_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count50_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count51_up_btn.onmousedown = function () {
        if (flag[51] === 0) {
            count51_up_btn.style.backgroundColor = "#00FF00";
        } else {
            count51_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";
        }
    }
    count52_up_btn.onmousedown = function () {
        if (flag[52] === 0) {
            count52_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count52_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count53_up_btn.onmousedown = function () {
        if (flag[53] === 0) {
            count53_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count53_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count54_up_btn.onmousedown = function () {
        if (flag[54] === 0) {
            count54_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count54_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count55_up_btn.onmousedown = function () {
        if (flag[55] === 0) {
            count55_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count55_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count56_up_btn.onmousedown = function () {
        if (flag[56] === 0) {
            count56_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count56_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count57_up_btn.onmousedown = function () {
        if (flag[57] === 0) {
            count57_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count57_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count58_up_btn.onmousedown = function () {
        if (flag[58] === 0) {
            count58_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count58_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count59_up_btn.onmousedown = function () {
        if (flag[59] === 0) {
            count59_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count59_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count60_up_btn.onmousedown = function () {
        if (flag[60] === 0) {
            count60_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count60_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count61_up_btn.onmousedown = function () {
        if (flag[61] === 0) {
            count61_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count61_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count62_up_btn.onmousedown = function () {
        if (flag[62] === 0) {
            count62_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count62_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    count63_up_btn.onmousedown = function () {
        if (flag[63] === 0) {
            count63_up_btn.style.backgroundColor = "#00FF00";　//それぞれのクリック判定
        } else {
            count63_up_btn.style.backgroundColor = "";
        }
        if (count9_now.innerHTML <= 0) {
            count9_now.style.backgroundColor = "#00a2e8";   //必要単位数で色を変える
        }
    }
    
    

};