Config = {}

Config.Command = 'aphone'
Config.CommandDescription = 'Opens the phone'

Config.Keybind = true
Config.OpenKey = 'F4'

Config.AnimDict = 'anim@cellphone@in_car@ds'
Config.Prop = 'prop_npc_phone_02'
Config.Bone = 28422

Config.PhoneDuration = 2000 -- Hver 2 sekund

Config.Apps = {
    Contacts = {},
    Settings = {},
    Messages = {},
    FaceTime = {},
    Boks = {},
    Discord = {},
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
}

Config.PhoneApplications = {
    ["phone"] = { -- Needs to be unique
        app = "phone", -- App route
        color = "#04b543", -- App icon color
        icon = "fa fa-phone-alt", -- App icon
        tooltipText = "Phone", -- App name
        tooltipPos = "top",
        job = false, -- Job requirement
        blockedjobs = {}, -- Jobs cannot use this app
        slot = 1, -- App position
        Alerts = 0, -- Alert count
    },
}