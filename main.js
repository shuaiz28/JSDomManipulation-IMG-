var count = 1;
document.getElementById('img1').addEventListener('click', function() {
    var imgId = 'img';
    count ++;
    if (count <= 5) {
        imgId += count;
        document.getElementById(imgId).className = 'show';
    } else {
        imgId += 2*5 - count + 1;
        if (count == 2*5-1) {
            count = 1;
        }
        document.getElementById(imgId).className = 'hide';
    }
});