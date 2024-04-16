const APP = `#app`;

AF = {}
AF.Settings = {
    MaxSlotsNonPrimary: 24, // Telefon slots som ikke er i navigationen i bunden
    MaxSlotsPrimary: 4, // Telefon slots som er i navigationen i bunden

    StartY: null,
    StartX: null,
    InitialBottom: 0,
    InitialRight: 0,
    InitialRightMargin: 16,
    PhoneContainerHeight: 0,
    AppsContainerWidth: 0,

    MoveSortable1: null,
    MoveSortable2: null,

    IntervalId: null,
    Interval: 0,

    IsEditable: false,
    IsMoveable: false,
    IsSwiping: false,
    IsMouseDown: false,
    IsMouseUp: false,
    IsMouseMove: false,
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
        AF.Settings.PhoneContainerHeight = $(".phone-container").outerHeight();
        AF.Settings.AppsContainerWidth = $(".app-start").outerWidth();
        $("head link[rel='stylesheet']").last().after(`<style>.standard-page{right: -${AF.Settings.AppsContainerWidth}px;}</style>`);
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
            <div class="app-case w-25 text-center" id="${type.toString()+'-'+key}">
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
        var falseApps = trueApps = pages = ``;
        var falseFiltered = AF.Apps.filter(app => app.primary === false).sort((a, b) => a.slot - b.slot);
        var trueFiltered = AF.Apps.filter(app => app.primary === true).sort((a, b) => a.slot - b.slot);
        var falseGroupedApps = [];
    
        for (let fi = 0; fi < falseFiltered.length; fi += AF.Settings.MaxSlotsNonPrimary) {
            falseGroupedApps.push(falseFiltered.slice(fi, fi + AF.Settings.MaxSlotsNonPrimary));
        }
    
        falseGroupedApps.forEach((item, key) => {
            pages += `<div class="dots${(key == 0 ? ' active' : '')}"></div>`;
            falseApps += `<div class="standard-page${(key == 0 ? ' active' : '')}" id="page-${(key + 1)}">`;
            item.forEach((elm, num) => {
                falseApps += AF.Functions.GetApps(num, elm, false);
            });
            falseApps += `</div>`;
        });
    
        trueFiltered.forEach((item, key) => trueApps += AF.Functions.GetApps(key, item, true));

        $('[standard-apps]').html(falseApps);
        if (falseGroupedApps.length <= 1) {
            $('[pages]').html('');
        } else {
            $('[pages] .navigation-content').html(pages);
        }
        $('[primary-apps]').html(trueApps);
    },
    CurrencyFormat: function () {
        return new Intl.NumberFormat('da-DK', {
            style: 'currency',
            currency: 'DKK'
        });
    },
    UpdateTimer: function () {
        var today = new Date();
        var time = (today.getHours().toString().length == 1 ? '0' + today.getHours() : today.getHours()) + "." + (today.getMinutes().toString().length == 1 ? '0' + today.getMinutes() : today.getMinutes());
        if ($(APP).attr('current-time') != time.toString()) {
            $(APP).attr('current-time', time);
            $('[time]').text(time);
        }
    },
    AppsEditable: function (elm) {
        console.log("apps is editable");
        
        if (!AF.Settings.IsMouseMove) {
            AF.Settings.IsEditable = true;
            AF.Settings.Interval = 0;
    
            elm.addClass('editable');
            $('.app-backdrop').addClass('show')
            $('.app-backdrop').on('click', function() {
                $('.app-backdrop').removeClass('show');
                elm.removeClass('editable');
                AF.Settings.Interval = 0;
                AF.Settings.IsEditable = false;
                AF.Settings.IsMouseUp = false;
                clearInterval(AF.Settings.IntervalId);
            });
        }
    },
    AppsMoveable: function () {
        console.log("apps is moveactive");

        if (!AF.Settings.IsMouseMove) {
            $('.app').addClass('shake');

            AF.Settings.IsMoveable = true;
            AF.Settings.Interval = 0;

            var sSlot = $('[standard-apps] .standard-page.active .app-case').length;
            var pSlot = $('[primary-apps] .app-case').length;

            AF.Settings.MoveSortable1 = new Sortable($('[standard-apps] .standard-page.active')[0], {
                group: {
                    name: 'shared',
                    put: function (to) {
                        return sSlot < AF.Settings.MaxSlotsNonPrimary;
                    }
                },
                swapThreshold: 1,
                animation: 150,
                onStart: function(event, ui) {
                    console.log('moveSortable1 onStart');
                    sSlot = $('[standard-apps] .standard-page.active .app-case').length;
                    pSlot = $('[primary-apps] .app-case').length;
                },
                onChange: function(event, ui) {
                    console.log('moveSortable1 onChange');
                    sSlot = $('[standard-apps] .standard-page.active .app-case').length;
                    pSlot = $('[primary-apps] .app-case').length;
                },
                onUpdate: function(event, ui) {
                    console.log('moveSortable1 onUpdate');
                    sSlot = $('[standard-apps] .standard-page.active .app-case').length;
                    pSlot = $('[primary-apps] .app-case').length;
                    // var data = Array.from($(this.el).find('.task.active')).map((element, key) => {
                    //     var content = $(element).find('.task-counter').attr('data-tippy-content');
                    //     $(element).find('.task-counter').attr('data-tippy-content', content.replace(content.match(/\d+/)[0], (key + 1)));
                    //     return element.getAttribute('data-id');
                    // });
                }
            });
            AF.Settings.MoveSortable2 = new Sortable($('[primary-apps]')[0], {
                group: {
                    name: 'shared',
                    put: function (to) {
                        return pSlot < AF.Settings.MaxSlotsPrimary;
                    }
                },
                swapThreshold: 1,
                animation: 150,
                onStart: function(event, ui) {
                    console.log('moveSortable2 onStart');
                    sSlot = $('[standard-apps] .standard-page.active .app-case').length;
                    pSlot = $('[primary-apps] .app-case').length;
                },
                onChange: function(event, ui) {
                    console.log('moveSortable2 onChange');
                    sSlot = $('[standard-apps] .standard-page.active .app-case').length;
                    pSlot = $('[primary-apps] .app-case').length;
                },
                onUpdate: function(event, ui) {
                    console.log('moveSortable2 onUpdate');
                    sSlot = $('[standard-apps] .standard-page.active .app-case').length;
                    pSlot = $('[primary-apps] .app-case').length;
                    // var data = Array.from($(this.el).find('.task.active')).map((element, key) => {
                    //     var content = $(element).find('.task-counter').attr('data-tippy-content');
                    //     $(element).find('.task-counter').attr('data-tippy-content', content.replace(content.match(/\d+/)[0], (key + 1)));
                    //     return element.getAttribute('data-id');
                    // });
                }
            });
            setTimeout(() => {
                $('.app').each(function(index, elm) {
                    const delay = index * 100;
                    $(this).css('animation-delay', `${delay}ms`);
                });
            }, 500);
        }
    },
    Close: function () {
        $(APP).hide();
        $.post(`https://${GetParentResourceName()}/Close`);
        console.log("close")
    },
}

$(document).on('touchstart mousedown', '.phone.show .app-start', function(event) {
    if ($(event.target).closest('.app').length == 0) {
        console.log('making apps moveable');

        $('.app').removeClass('shake');

        // Resetter sortables
        if (AF.Settings.MoveSortable1 instanceof Sortable) AF.Settings.MoveSortable1.destroy(); AF.Settings.MoveSortable1 = null;
        if (AF.Settings.MoveSortable2 instanceof Sortable) AF.Settings.MoveSortable2.destroy(); AF.Settings.MoveSortable2 = null;

        AF.Settings.Interval = 0;
        AF.Settings.IsMoveable = false;

        clearInterval(AF.Settings.IntervalId);

        if (!AF.Settings.IsEditable) {
            AF.Settings.IntervalId = setInterval(function() {
                AF.Settings.Interval += 1;

                if (AF.Settings.Interval >= 100) {
                    event.preventDefault();

                    clearInterval(AF.Settings.IntervalId);

                    AF.Functions.AppsMoveable();
                }
            }, 1);
        }
    } else {
        console.log('making apps editable');

        $('.app-backdrop').removeClass('show');
        $('.app').removeClass('editable');

        AF.Settings.Interval = 0;
        AF.Settings.IsEditable = false;

        clearInterval(AF.Settings.IntervalId);

        if (!AF.Settings.IsMoveable) {
            AF.Settings.IntervalId = setInterval(function() {
                AF.Settings.Interval += 1;

                if (AF.Settings.Interval >= 100) {
                    event.preventDefault();

                    clearInterval(AF.Settings.IntervalId);

                    AF.Functions.AppsEditable($(event.target).closest('.app'));
                }
            }, 1);
        }
    }

    if (!AF.Settings.IsMoveable && !AF.Settings.IsEditable) {
        AF.Settings.IsMouseDown = true;
        AF.Settings.StartX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
    }
});

$(document).on('touchmove mousemove', function(event) {
    if (AF.Settings.IsMouseDown && !AF.Settings.IsEditable && !AF.Settings.IsMoveable) {
        AF.Settings.IsMouseMove = true;
        let currentX;
        if (event.type === 'touchmove') {
            currentX = event.touches[0].clientX;
        } else {
            currentX = event.clientX;
        }

        let deltaX = currentX - AF.Settings.StartX;

        AF.Settings.InitialRight -= deltaX;

        AF.Settings.InitialRight = Math.min(AF.Settings.AppsContainerWidth, Math.max(-AF.Settings.AppsContainerWidth, AF.Settings.InitialRight));

        if (AF.Settings.InitialRight <= 0) {
            if ($('.standard-page.active').prev().length > 0 && $('.standard-page.active').prev().hasClass('standard-page')) {
                $('.standard-page.active').prev().css('opacity', 1);
                $('.standard-page.active').prev().css('right', '+' + ($('.standard-page.active').outerWidth() + AF.Settings.InitialRight + AF.Settings.InitialRightMargin) + 'px');
            } else {
                AF.Settings.InitialRight += 1;
            }
        } else {
            if ($('.standard-page.active').next().length > 0 && $('.standard-page.active').next().hasClass('standard-page')) {
                $('.standard-page.active').next().css('opacity', 1);
                $('.standard-page.active').next().css('right', '-' + ($('.standard-page.active').outerWidth() - AF.Settings.InitialRight + AF.Settings.InitialRightMargin) + 'px');
            } else {
                AF.Settings.InitialRight -= 1;
            }
        }

        $('.standard-page.active').css('right', AF.Settings.InitialRight + 'px');

        AF.Settings.StartX = currentX;
    }

    if (AF.Settings.IsEditable && !AF.Settings.IsMoveable && !AF.Settings.IsMouseUp) {
        if ($(event.target).closest('.app').length == 0) {
            event.preventDefault();

            $('.app-backdrop').removeClass('show');
            $('.app').removeClass('editable');

            AF.Settings.IsEditable = false;
            AF.Functions.AppsMoveable();
        }
    }

    if (AF.Settings.IsSwiping && !$('.position').hasClass('active')) {
        let currentY;
        if (event.type === 'touchmove') {
            currentY = event.touches[0].clientY;
        } else {
            currentY = event.clientY;
        }

        let deltaY = AF.Settings.StartY - currentY;

        AF.Settings.InitialBottom += deltaY;

        AF.Settings.InitialBottom = Math.max(0, AF.Settings.InitialBottom);
        AF.Settings.InitialBottom = Math.min(AF.Settings.PhoneContainerHeight, AF.Settings.InitialBottom); 
        
        let blurIntensity = Math.min(10, (AF.Settings.InitialBottom / (AF.Settings.PhoneContainerHeight / 3)) * 2);

        $('.phone-lockscreen .phone-baggrund').css('filter', 'blur(' + blurIntensity + 'px)');
        $('.phone-lockscreen, .phone-home-footer').css('bottom', AF.Settings.InitialBottom + 'px');

        AF.Settings.StartY = currentY;
    }
});

$(document).on('touchend mouseup', function(event) {
    clearInterval(AF.Settings.IntervalId);

    if (AF.Settings.IsMouseDown) {
        if (AF.Settings.InitialRight <= 0) { // SWIPE RIGHT
            if ($('.standard-page.active').prev().length > 0 && $('.standard-page.active').prev().hasClass('standard-page')) {
                var $currentNav = $('[pages] .navigation-content .dots.active');
                var $currentPage = $('.standard-page.active');
                
                if (AF.Settings.InitialRight <= (-AF.Settings.AppsContainerWidth / 2)) {
                    $currentNav.prev().addClass('active');
                    $currentNav.removeClass('active');

                    $currentPage.animate({ right: -AF.Settings.AppsContainerWidth + 'px', opacity: '0'}, 300);
                    $currentPage.prev().addClass('active');
                    $currentPage.prev().animate({ right: '0px'}, 300);
                    $currentPage.css('opacity', 0);
                    $currentPage.removeClass('active');
                } else {
                    $currentPage.prev().animate({ right: +AF.Settings.AppsContainerWidth + 'px', opacity: '0'}, 300);
                    $('.standard-page.active').animate({ right: '0px'}, 300);
                }
            } else {
                $('.standard-page.active').animate({ right: '0px'}, 300);
            }
        } else if (AF.Settings.InitialRight >= 0) { // SWIPE LEFT
            if ($('.standard-page.active').next().length > 0 && $('.standard-page.active').next().hasClass('standard-page')) {
                var $currentNav = $('[pages] .navigation-content .dots.active');
                var $currentPage = $('.standard-page.active');

                if (AF.Settings.InitialRight >= (AF.Settings.AppsContainerWidth / 2)) {
                    $currentNav.next().addClass('active');
                    $currentNav.removeClass('active');

                    $currentPage.animate({ right: +AF.Settings.AppsContainerWidth + 'px', opacity: '0'}, 300);
                    $currentPage.next().addClass('active');
                    $currentPage.next().animate({ right: '0px'}, 300);
                    $currentPage.removeClass('active');
                } else {
                    $currentPage.next().animate({ right: -AF.Settings.AppsContainerWidth + 'px', opacity: '0'}, 300);
                    $('.standard-page.active').animate({ right: '0px'}, 300);
                }
            } else {
                $('.standard-page.active').animate({ right: '0px'}, 300);
            }
        } else {
            $('.standard-page.active').animate({ right: '0px'}, 300);
        }

        AF.Settings.InitialRight = 0;
        AF.Settings.IsMouseDown = false;
        AF.Settings.IsMouseMove = false;
    }

    if (AF.Settings.IsEditable) {
        AF.Settings.IsMouseUp = true;
    }

    if (AF.Settings.IsSwiping && !$('.position').hasClass('active')) {
        if (AF.Settings.InitialBottom >= (AF.Settings.PhoneContainerHeight / 2)) {
            $('.phone-lockscreen').animate({ bottom: AF.Settings.PhoneContainerHeight + 'px', opacity: 0, display: 'none' }, 300);
            $('.phone-home-footer').css({bottom: '0px', opacity: '0'});
            $('.phone-home-footer').animate({opacity: '1'});
            $('.phone-lockscreen').addClass('open');
            $('.phone-home-footer').addClass('home');
            $('.phone-content').removeClass('closed');
        } else {
            $('.phone-lockscreen, .phone-home-footer').animate({ bottom: '0px' }, 300);
        }

        $('.phone-lockscreen').css('filter', 'none');

        AF.Settings.InitialBottom = 0;
        AF.Settings.IsSwiping = false;
    }
});

$(document).on('touchstart mousedown', '.position:not(.active) .phone-home-footer:not(.home)', function(event) {
    console.log('swiping up');
    
    AF.Settings.IsSwiping = true;
    if (event.type === 'touchstart') {
        AF.Settings.StartY = event.touches[0].clientY;
    } else {
        AF.Settings.StartY = event.clientY;
    }
});

$(document).on('touchstart mousedown', '.position:not(.active) .phone-home-footer.home', function(event) {
    $('.phone-home-footer').css("transition", "transform 0.3s").css("transform", "scale(1)");
    if (!AF.Settings.IsSwiping) {
        $('.app-content').removeClass('active');
        $('body').removeClass('light-mode');
    }
});

$(document).on('click', '.app', function(event) {
    if (!AF.Settings.IsEditable && !AF.Settings.IsMoveable) {
        event.preventDefault();
        
        var $target = $(this);

        $target.addClass('clicked');

        $(`.app-content`).removeClass('active');
        $(`#${$($target).attr('id')}-page`).addClass('active');
        setTimeout(() => {
            $('body').addClass(`${$($target).attr('mode')}-mode`);
            $target.removeClass('clicked');
        }, 250);
    }
});

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