local QBCore = exports['qb-core']:GetCoreObject()
local project = GetCurrentResourceName()

QBCore.Functions.CreateCallback(project..':server:GetPhoneData', function(source, cb)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    if Player ~= nil then
        local fines = {}

        local garageresult = MySQL.query.await('SELECT * FROM player_vehicles WHERE citizenid = ?', { Player.PlayerData.citizenid })
        if garageresult[1] ~= nil then
            PhoneData.Garage = garageresult
        end
        MySQL.rawExecute('SELECT * FROM td_fines WHERE is_header = 1 ORDER BY sort DESC', function(result)
            if result[1] ~= nil then
                for _, v in pairs(result) do
                    local f = MySQL.rawExecute.await('SELECT * FROM td_fines WHERE section = ? AND is_header = 0 ORDER BY sort ASC', { v.id })
                    fines[#fines + 1] = {
                        header = v,
                        data = f
                    }
                end
                cb(fines)
            end
        end)
    end
end)