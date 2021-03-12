// Оруулах нэрс.
var names;
names = ['Амарцогт',
        'Амаржаргал',
        'Цогтбаатар',
        'Тунгалаг',
        'Мөнхжаргал',];

// Random товчон дээр дарахаар нэрс random-оор өөрчлөгддөг болох.
document.querySelector('.click-random').addEventListener('click', function(){
    // Нэрсийг random-оор гаргах тоо.
    var random = Math.floor(Math.random() * names.length);

    document.getElementById('name').textContent = names[random];
});

// New game эхлүүлдэг болгох.
document.querySelector('.new').addEventListener('click', function(){
    document.getElementById('name').textContent = 'Random товчыг дарна уу';
})