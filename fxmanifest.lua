fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'ArcticFireline'
description 'af-phone created by Markjaer'
version '1.0.0'

ui_page 'ui/main.html'

client_scripts {
    'config.lua',
    'client.lua',
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server.lua'
}

files {
    'ui/main.html',
    'ui/css/*.css',
    'ui/files/images/*.png',
    'ui/js/*.js',
}