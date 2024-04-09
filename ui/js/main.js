const APP = `#app`;

AF = {}
AF.Settings = {
    MaxSlots: 24
}
AF.Apps = [
    Settings = {
        app: 'settings',
        color: '#D6D6CB',
        icon: 'settings.webp',
        txt: 'Settings',
        primary: false,
        slot: 1,
    },
    Contacts = {
        app: 'contacts',
        color: '#D6D6CB',
        icon: 'contacts.webp',
        txt: 'Contacts',
        primary: false,
        slot: 2,
    },
    Messages = {
        app: 'messages',
        color: '#D6D6CB',
        icon: 'messages.webp',
        txt: 'Messages',
        primary: true,
        slot: 2,
    },
    Phone = {
        app: 'phone',
        color: '#D6D6CB',
        icon: 'phone.png',
        txt: 'Phone',
        primary: true,
        slot: 1,
    },
    FaceTime = {
        app: 'facetime',
        color: '#D6D6CB',
        icon: 'facetime.webp',
        txt: 'FaceTime',
        primary: true,
        slot: 3,
    },
    Boks = {
        app: 'boks',
        color: '#D6D6CB',
        icon: 'discord.png',
        txt: 'Boks',
        primary: false,
        slot: 3,
    },
    Discord = {
        app: 'discord',
        color: '#D6D6CB',
        icon: 'discord.png',
        txt: 'Discord',
        primary: false,
        slot: 4,
    },
    Twitter = {
        app: 'twitter',
        color: '#D6D6CB',
        icon: 'twitter.webp',
        txt: 'Twitter',
        primary: false,
        slot: 5,
    },
    Tinder = {
        app: 'tinder',
        color: '#D6D6CB',
        icon: 'tinder.png',
        txt: 'Tinder',
        primary: false,
        slot: 6,
    },
    Snapchat = {
        app: 'snapchat',
        color: '#D6D6CB',
        icon: 'snapchat.webp',
        txt: 'Snapchat',
        primary: false,
        slot: 7,
    },
    Instagram = {
        app: 'instagram',
        color: '#D6D6CB',
        icon: 'instagram.webp',
        txt: 'Instagram',
        primary: false,
        slot: 8,
    },
    Spotify = {
        app: 'spotify',
        color: '#D6D6CB',
        icon: 'spotify.png',
        txt: 'Spotify',
        primary: false,
        slot: 9,
    },
    Mail = {
        app: 'mail',
        color: '#D6D6CB',
        icon: 'mail.webp',
        txt: 'Mail',
        primary: false,
        slot: 10,
    },
    Webshops = {
        app: 'webshops',
        color: '#D6D6CB',
        icon: 'webshops.jpg',
        txt: 'Webshops',
        primary: false,
        slot: 11,
    },
    Bank = {
        app: 'bank',
        color: '#D6D6CB',
        icon: 'contacts.webp',
        txt: 'Bank',
        primary: false,
        slot: 12,
    },
    Notes = {
        app: 'Notes',
        color: '#D6D6CB',
        icon: 'notes.webp',
        txt: 'Notes',
        primary: false,
        slot: 13,
    },
    Photos = {
        app: 'photos',
        color: '#D6D6CB',
        icon: 'photos.webp',
        txt: 'Photos',
        primary: false,
        slot: 15,
    },
    Camera = {
        app: 'camera',
        color: '#D6D6CB',
        icon: 'camera.webp',
        txt: 'Camera',
        primary: false,
        slot: 16,
    },
    Appstore = {
        app: 'appstore',
        color: '#D6D6CB',
        icon: 'appstore.webp',
        txt: 'App Store',
        primary: false,
        slot: 17,
    },
    DriverLicense = {
        app: 'driverlicense',
        color: '#D6D6CB',
        icon: 'driverlicense.png',
        txt: 'Driver License',
        primary: false,
        slot: 14,
    },
    DriverLicense = {
        app: 'driverlicense',
        color: '#D6D6CB',
        icon: 'driverlicense.png',
        txt: 'Driver License',
        primary: false,
        slot: 14,
    },
    DriverLicense = {
        app: 'driverlicense',
        color: '#D6D6CB',
        icon: 'driverlicense.png',
        txt: 'Driver License',
        primary: false,
        slot: 14,
    },
    DriverLicense = {
        app: 'driverlicense',
        color: '#D6D6CB',
        icon: 'driverlicense.png',
        txt: 'Driver License',
        primary: false,
        slot: 14,
    },
    DriverLicense = {
        app: 'driverlicense',
        color: '#D6D6CB',
        icon: 'driverlicense.png',
        txt: 'Driver License',
        primary: false,
        slot: 14,
    },
    DriverLicense = {
        app: 'driverlicense',
        color: '#D6D6CB',
        icon: 'driverlicense.png',
        txt: 'Driver License',
        primary: false,
        slot: 14,
    },
    DriverLicense = {
        app: 'driverlicense',
        color: '#D6D6CB',
        icon: 'driverlicense.png',
        txt: 'Driver License',
        primary: true,
        slot: 4,
    },
];
AF.Notifications = {}
AF.Data = {
    Player: {},
    PhoneData: {},
}

AF.Functions = {
    Open: function () {
        $(APP).addClass('open');
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
    GetApps: function (key, item, type) {
        var mode = 'dark';
        var icon = (item?.icon?.includes(".")) ? `<img src="./images/apps/${item?.icon}" draggable="false" width="100%" style="height: 15cqw;width: 15cqw;border-radius: 3.8cqw;box-shadow:0 0 15px 0px rgba(0, 0, 0, 25%);" />` : `<div class="rounded-3 p-2" style="background-color: ${item?.color};"><i class="${item?.icon} fs-4 d-flex justify-content-center"></i></div>`;
        return `
            <div class="w-25 text-center" id="${type.toString()+'-'+key}">
                <div class="app" id="${item?.app}" mode="${mode}" style="margin: 0 .5cqw;">
                    <span class="edit-mode position-absolute p-2 bg-secondary rounded-circle shadow border border-light border-opacity-25" style="top: -3cqw;left: 0;width: 6cqw;height: 6cqw;display:flex;align-items: center;justify-content: center;">
                        <span style="font-size: 6cqw;">-</span>
                    </span>
                    ${icon}
                    <p class="mt-0 text-truncate" style="font-size: 3.5cqw;text-shadow: 0 0 3px rgba(0, 0, 0, 25%);">${item?.txt}</p>
                </div>
            </div>
        `;
    },
    SetupApps: function () {
        var $trueApps = $falseApps = ``;
        
        AF.Apps.filter(app => app.primary === false).sort((a, b) => a.slot - b.slot).map((item, key) => $falseApps += AF.Functions.GetApps(key, item, false));
        AF.Apps.filter(app => app.primary === true).sort((a, b) => a.slot - b.slot).map((item, key) => $trueApps += AF.Functions.GetApps(key, item, true));

        $('[apps]').html($falseApps);
        $('[primary-apps]').html($trueApps);
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