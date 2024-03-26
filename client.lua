local QBCore = exports['qb-core']:GetCoreObject()
local project = GetCurrentResourceName()

local open = false
local object = nil

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

-- Toggle tablet & animation
local function ToggleTablet(data, state)
    local ped = PlayerPedId()
    open = state
    
    if state then
        LoadDict(anim)

        if not object then
            LoadProp(prop)

            local coords = GetEntityCoords(ped)
            local hand = GetPedBoneIndex(ped, bone)

            object = CreateObject(GetHashKey(prop), coords, 1, 1, 1)
            AttachEntityToEntity(object, ped, hand, 0.0, 0.0, 0.0, 50.0, 320.0, 50.0, 1, 1, 0, 0, 2, 1)
        end

        if not IsEntityPlayingAnim(ped, anim, 'base', 3) then
            TaskPlayAnim(ped, anim, 'base', 8.0, 1.0, -1, 49, 1.0, 0, 0, 0)
        end

        SetNuiFocus(state, state)
        SendNUIMessage({ 
            action = project..':open',
            data = data,
            lang = Config.Lang
        })
        QBCore.Functions.Notify('Telefon åbnet', 'success')
    else
        DeleteEntity(object)
        DetachEntity(object, 1, 1)
        ClearPedTasks(ped)

        SetNuiFocus(state, state)
        QBCore.Functions.Notify('Telefon lukket', 'success')
    end
end

-- Event for server-side
RegisterNetEvent(project..':client:open', function(data)
    ToggleTablet(data, true)
end)

RegisterNetEvent(project..':client:close', function()
    ToggleTablet(nil, false)
end)

-- Selected item
RegisterNUICallback('SelectVehicle', function(data, cb)
    if data.event then
        print("trigger nu", json.encode(data))
        TriggerEvent(data.event, data)
        cb('ok')
    else
        QBCore.Functions.Notify('Opstod en fejl!', 'error')
    end
end)

-- Close
RegisterNUICallback('Close', function(data, cb)
    ToggleTablet(nil, false)
    cb('ok')
end)