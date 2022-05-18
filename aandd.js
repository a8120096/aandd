// function show(array) {
//     var html = '';
//     html = html + '<table border="1">';
//     html = html + '<tr>';
//     for (var i = 0; i < array.length; i++) {
//         html = html + '<td>' + array[i] + '</td>';
//     }
//     html = html + '</tr>';
//     html = html + '</table>';
//     //document.getElementById('res').innerHTML = html;
//     document.getElementById('res').insertAdjacentHTML('beforeend', html);
// }

//配列以外の変数も表示できる関数
function show(obj) {
    if (Array.isArray(obj)) {
        var html = '';
        html = html + '<table border="1">';
        html = html + '<tr>';
        for (var i = 0; i < obj.length; i++) {
            html = html + '<td>' + obj[i] + '</td>';
        }
        html = html + '</tr>';
        html = html + '</table>';
        //html = html + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', html);
    } else {
        var string = JSON.stringify(obj);
        string = string + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', string);
    }
}

//1からNまでの数を順にN個挿入する関数
function createSequentialNumbers(array, n) {
    var html = '';
    for (var i = 1; i <= n; i++) {
        array.push(i);
        html = html + '<td>' + array[i] + '</td>';
    }
}

//N個の乱数を挿入する関数
function createRandomNumbers(array, n) {
    var html = '';
    for (var i = 0; i < n; i++) {
        var r = Math.floor(Math.random() * 20);
        array.push(r);
        html = html + '<td>' + array[i] + '</td>';
    }
}

//乱数を昇順で並び替える関数
function createOrderedRandomNumbers(numbers, n) {
    var count = 0;
    for (var i = 1; ; i++) {
        if (Math.floor(Math.random() * 3) == 0) {
            numbers.push(i);
            count++;
            if (count >= n) {
                break;
            }
        }
    }
}