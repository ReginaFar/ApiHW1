// Отслеживание изменения ориентации экрана:
// Напишите код, который отслеживает изменение ориентации экрана устройства (с портретной на ландшафтную и наоборот) и выводит сообщение об этом на веб-странице.

const orientationType = document.querySelector('.orientationType');

screen.orientation.addEventListener('change', function(e) {
    if (screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary"){
        orientationType.textContent = "Screen orientation is Portrait";
    }
    else{
        orientationType.textContent = "Screen orientation is Landscape";
    }
});