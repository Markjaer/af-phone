const APP = `#app`;

AF = {}
AF.Apps = [
    Contacts = {
        app: 'contacts',
        color: '#D6D6CB',
        icon: 'fa fa-phone-alt',
        tooltipText: 'Kontakter',
        tooltipPos: 'top',
        job: false,
        blockedjobs: {},
        slot: 1,
        Alerts: 0,
    },
    Settings = {
        app: 'settings',
        color: '#D6D6CB',
        icon: 'fa fa-phone-alt',
        tooltipText: 'Indstillinger',
        tooltipPos: 'top',
        job: false,
        blockedjobs: {},
        slot: 1,
        Alerts: 0,
    },
    Messages = {
        app: 'contacts',
        color: '#D6D6CB',
        icon: 'fa fa-phone-alt',
        tooltipText: 'Kontakter',
        tooltipPos: 'top',
        job: false,
        blockedjobs: {},
        slot: 1,
        Alerts: 0,
    },
    FaceTime = {
        app: 'contacts',
        color: '#D6D6CB',
        icon: 'fa fa-phone-alt',
        tooltipText: 'Kontakter',
        tooltipPos: 'top',
        job: false,
        blockedjobs: {},
        slot: 1,
        Alerts: 0,
    },
    Boks = {
        app: 'contacts',
        color: '#D6D6CB',
        icon: 'fa fa-phone-alt',
        tooltipText: 'Kontakter',
        tooltipPos: 'top',
        job: false,
        blockedjobs: {},
        slot: 1,
        Alerts: 0,
    },
    Discord = {
        app: 'contacts',
        color: '#D6D6CB',
        icon: 'fa fa-phone-alt',
        tooltipText: 'Kontakter',
        tooltipPos: 'top',
        job: false,
        blockedjobs: {},
        slot: 1,
        Alerts: 0,
    },
    Twitter = {},
    Tinder = {},
    Snapchat = {},
    Instagram = {},
    Spotify = {},
    Mails = {},
    Webshops = {},
    Bank = {},
    Notes = {},
    Images = {},
    DriverLicense = {},
]
AF.Notifications = {}
AF.Data = {
    Player: {},
    PhoneData: {},
}

AF.Functions = {
    Open: function () {
        $(APP).addClass('active');
        console.log("open", AF.Data)

        AF.Functions.SetupApps();
        AF.Functions.UpdateTimer();
        setInterval(() => {
            AF.Functions.UpdateTimer();
        }, 1000);
    },
    SetPosition: function() {
        if (AF.Data.PhoneData.metadata) {
            var posRight = AF.Data.PhoneData.metadata.right;
            var posBottom = AF.Data.PhoneData.metadata.bottom;
            var posWidth = AF.Data.PhoneData.metadata.width;
            var posHeight = AF.Data.PhoneData.metadata.height;

            $(APP).find('.position').css({
                right: posRight,
                bottom: posBottom,
                width: posWidth,
                height: posHeight,
            });
        }
    },
    SetupApps: function () {
        console.log(AF.Apps)
        var $apps = ``;
        AF.Apps.map((item, key) => {
            $apps += `
                <div class="w-25 h-25 p-1 text-center">
                    <div class="rounded-3 p-2" style="background-color: ${item.color};">
                        <i class="${item.icon} fs-4 d-flex justify-content-center"></i>
                    </div>
                    <p class="mt-1" style="font-size: .5rem;">${item.tooltipText}</p>
                </div>
            `;
        });
        $('[apps]').html($apps);
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
            AF.Functions.Close();
            break;
    }
});

$(document).ready(function(){
    AF.Data.PhoneData = {metadata: {right: "3rem", bottom: "1rem", width: "245px", height: "475px"}}
    AF.Data.Player = {PlayerData: {metadata: {"fitbit":[],"status":[],"tracker":false,"criminalrecord":{"hasRecord":false},"callsign":"NO CALLSIGN","thirst":58.199999999998,"phonedata":{"SerialNumber":95768855,"InstalledApps":[]},"craftingrep":0,"stress":0,"walletid":"QB-28517895","jobrep":{"trucker":0,"hotdog":0,"taxi":0,"tow":0},"phone":{"profilepicture":"default","background":"https://arcticfireline.com/assets/files/img/gta/wallpaper.webp"},"attachmentcraftingrep":0,"hunger":53.79999999999199,"ishandcuffed":false,"isdead":false,"dealerrep":0,"inlaststand":false,"bloodtype":"AB+","injail":0,"fingerprint":"US773g31OiX5993","armor":0,"inside":{"apartment":[]},"licences":{"business":false,"driver":true,"weapon":false},"jailitems":[]}}}
    AF.Functions.SetPosition();
    AF.Functions.Open();

    if (location.origin != "http://127.0.0.1:5500") {
        $(APP).hide();

        window.addEventListener('message', function(event) {
            switch(event.data.action) {
                case `${GetParentResourceName()}:Open`:
                    AF.Data.Player = event.data.Player;
                    AF.Data.PhoneData = event.data.PhoneData;
                    AF.Functions.SetPosition();
                    AF.Functions.Open();
                    break;
                case `${GetParentResourceName()}:UpdatePlayer`:
                    AF.Data.Player = event.data.Player;
                    break;
                case `${GetParentResourceName()}:Close`:
                    AF.Functions.Close();
                    break;
            }
        });
    }
});