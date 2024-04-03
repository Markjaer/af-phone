local QBCore = exports['qb-core']:GetCoreObject()
local project = GetCurrentResourceName()

local regex = '[?!@#]'
local frontCam = false

local Player = {
    PlayerData = {},
    PlayerJob = {},
}
local PhoneData = {
    isOpen = false,
    MetaData = {},
    Notifications = {},
    Apps = {
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
}

local anim = Config.AnimDict
local prop = Config.Prop
local bone = Config.Bone

-- Utils
local function LoadDict(dict)
    RequestAnimDict(dict)
    while not HasAnimDictLoaded(dict) do
        Wait(100)
    end
end

local function LoadProp(model)
    RequestModel(model)
    while not HasModelLoaded(model) do
        Wait(100)
    end
end

-- Open Phone
local function OpenPhone()
    QBCore.Functions.TriggerCallback(project..':server:HasPhone', function(HasPhone)
        if HasPhone then
            PhoneData.isOpen = true
            SetNuiFocus(true, true)
            SendNUIMessage({
                action = project..':Open',
                PhoneData = PhoneData,
                PlayerData = PlayerData,
                PlayerJob = PlayerJob,
                Apps = Config.Apps,
                PlayerId = GetPlayerServerId(PlayerId())
            })
        end
    end)
    QBCore.Functions.Notify('Telefon åbnet', 'success')
end

-- Close Phone
local function ClosePhone()
    DeleteEntity(object)
    DetachEntity(object, 1, 1)
    ClearPedTasks(ped)

    SetNuiFocus(state, state)
    QBCore.Functions.Notify('Telefon lukket', 'success')
end

-- Event for server-side
RegisterNetEvent(project..':client:Open', function()
    OpenPhone()
end)

RegisterNetEvent(project..':client:Close', function()
    ClosePhone()
end)

RegisterNetEvent('QBCore:Client:OnJobUpdate', function(JobInfo)
    Player.PlayerJob = JobInfo
    SendNUIMessage({
        action = project..':PlayerData',
        Player = Player
    })
end)

-- Command / Keybind
RegisterCommand(Config.Command, function()
    TriggerEvent(project..':client:Open')
end, false)

if Config.Keybind then
    RegisterKeyMapping(Config.Command, Config.CommandDescription, 'KEYBOARD', Config.OpenKey)
end

-- RegisterNUICallback
RegisterNUICallback('TakePhoto', function(_, cb)
    SetNuiFocus(false, false)
    CreateMobilePhone(1)
    CellCamActivate(true, true)
    local takePhoto = true
    while takePhoto do
        if IsControlJustPressed(1, 27) then -- Toogle Mode
            frontCam = not frontCam
            CellFrontCamActivate(frontCam)
        elseif IsControlJustPressed(1, 177) then -- CANCEL
            DestroyMobilePhone()
            CellCamActivate(false, false)
            cb(json.encode({ url = nil }))
            break
        elseif IsControlJustPressed(1, 176) then -- TAKE.. PIC
            if Config.Webhook then
                exports['screenshot-basic']:requestScreenshotUpload(tostring(Config.Webhook), 'files[]', function(data)
                    SaveToInternalGallery()
                    local image = json.decode(data)
                    DestroyMobilePhone()
                    CellCamActivate(false, false)
                    TriggerServerEvent('qb-phone:server:addImageToGallery', image.attachments[1].proxy_url)
                    Wait(400)
                    TriggerServerEvent('qb-phone:server:getImageFromGallery')
                    cb(json.encode(image.attachments[1].proxy_url))
                    takePhoto = false
                end)
            else
                QBCore.Functions.Notify('Webhook mangler!', 'error')
                return
            end
            QBCore.Functions.TriggerCallback('qb-phone:server:GetWebhook', function(hook)
                if not hook then
                    QBCore.Functions.Notify('Camera not setup', 'error')
                    return
                end
                exports['screenshot-basic']:requestScreenshotUpload(tostring(hook), 'files[]', function(data)
                    SaveToInternalGallery()
                    local image = json.decode(data)
                    DestroyMobilePhone()
                    CellCamActivate(false, false)
                    TriggerServerEvent('qb-phone:server:addImageToGallery', image.attachments[1].proxy_url)
                    Wait(400)
                    TriggerServerEvent('qb-phone:server:getImageFromGallery')
                    cb(json.encode(image.attachments[1].proxy_url))
                    takePhoto = false
                end)
            end)
        end
        HideHudComponentThisFrame(7)
        HideHudComponentThisFrame(8)
        HideHudComponentThisFrame(9)
        HideHudComponentThisFrame(6)
        HideHudComponentThisFrame(19)
        HideHudAndRadarThisFrame()
        EnableAllControlActions(0)
        Wait(0)
    end
    Wait(1000)
    OpenPhone()
end)

-- Close
RegisterNUICallback('Close', function(data, cb)
    ClosePhone()
    cb('ok')
end)

-- Threads
CreateThread(function()
    while true do
        Wait(60000)
        QBCore.Functions.TriggerCallback(project..':server:HasPhone', function(HasPhone)
            if HasPhone then
                -- Check notifications (PhoneData.Notifications)
            end
        end)
    end
end)