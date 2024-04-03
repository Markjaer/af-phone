local QBCore = exports['qb-core']:GetCoreObject()
local project = GetCurrentResourceName()

QBCore.Functions.CreateCallback(project..':server:GetPhoneData', function(source, cb)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    if Player ~= nil then
        local PhoneData = {}

        local garageresult = MySQL.query.await('SELECT * FROM player_vehicles WHERE citizenid = ?', { Player.PlayerData.citizenid })
        if garageresult[1] ~= nil then
            PhoneData.Garage = garageresult
        end
        cb(PhoneData)
    end
end)

QBCore.Functions.CreateCallback(project..':server:HasPhone', function(source, cb)
    local Player = QBCore.Functions.GetPlayer(source)
    if Player ~= nil then
        local HasPhone = Player.Functions.GetItemByName('phone')
        if HasPhone ~= nil then
            cb(true)
        else
            cb(false)
        end
    end
end)