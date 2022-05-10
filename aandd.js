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

function createSequentialNumbers(array, n) {
    var html = '';
    for (var i = 1; i <= n; i++) {
        array.push(i);
        html = html + '<td>' + array[i] + '</td>';
    }
}

function createRandomNumbers(array, n) {
    var html = '';
    for (var i = 0; i < n; i++) {
        var r = Math.floor(Math.random() * 100);
        array.push(r);
        html = html + '<td>' + array[i] + '</td>';
    }
}