const APP = `#app`;

AF = {}
AF.Phone = {}
AF.Phone.Notifications = {}
AF.Phone.Apps = {

}
AF.Phone.Data = {
    CurrentApplication: null,
    PlayerData: {},
    Applications: {},
    IsOpen: false,
    CallActive: false,
    MetaData: {},
    PlayerJob: {},
    AnonymousCall: false,
}

AF.Phone.Functions = {
    Open: function () {
        $(APP).addClass('active');
        console.log("open", AF.Phone.Functions.CurrencyFormat().format(100))

        AF.Phone.Functions.UpdateTimer();
        setInterval(() => {
            AF.Phone.Functions.UpdateTimer();
        }, 1000);
    },
    SetPosition: function() {
        
    },
    CurrencyFormat: function () {
        return new Intl.NumberFormat('da-DK', {
            style: 'currency',
            currency: 'DKK'
        });
    },
    UpdateTimer: function() {
        var today = new Date();
        var time = (today.getHours().toString().length == 1 ? '0' + today.getHours() : today.getHours()) + "." + (today.getMinutes().toString().length == 1 ? '0' + today.getMinutes() : today.getMinutes());
        if ($(APP).attr('current-time') != time.toString()) {
            $(APP).attr('current-time', time);
            $('[time]').text(time);
        }
    },
    Close: function () {
        $(APP).hide();
        $.post(`https://${GetParentResourceName()}/Close`);
        console.log("close")
    },
}

$(document).on('keydown', function(event) {
    switch(event.keyCode) {
        case 27: // ESCAPE
            AF.Phone.Functions.Close();
            break;
    }
});

$(document).ready(function(){
    AF.Phone.Functions.Open();
    if (location.origin != "http://127.0.0.1:5500") {
        $(app).hide();

        window.addEventListener('message', function(event) {
            switch(event.data.action) {
                case `${GetParentResourceName()}:open`:
                    AF.Phone.Data.PlayerData = event.data.PlayerData;
                    AF.Phone.Functions.SetPosition();
                    AF.Phone.Functions.Open();
                    break;
                case `${GetParentResourceName()}:close`:
                    AF.Phone.Functions.Close();
                    break;
            }
        });
    }
});