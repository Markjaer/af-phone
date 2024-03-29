
const apps = [];

const updateTimer = () => {
    var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var time = (today.getHours().toString().length == 1 ? '0' + today.getHours() : today.getHours()) + ":" + (today.getMinutes().toString().length == 1 ? '0' + today.getMinutes() : today.getMinutes());
    if ($('#app').attr('current-time') != time.toString()) {
        $('#app').attr('current-time', time);
        $('[time]').text(time);
    }
}

updateTimer();
setInterval(() => {
    updateTimer();
}, 1000);