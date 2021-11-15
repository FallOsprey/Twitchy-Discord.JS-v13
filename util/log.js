const client = require("../bot.js")
const types = {
    'ERROR': '\x1b[31m',
    'WARN': '\x1b[93m',
    'SUCCESS': '\x1b[32m',
    'CLIENT': '\x1b[34m',
    'EXECUTION': '\x1b[37m',
    'EXEC': '\x1b[30m',
    'PREFIX': '\x1b[37m',
    'COLOR0': '\x1b[0m',
    'COLOR1': '\x1b[1m',
    'COLOR2': '\x1b[2m',
    'COLOR3': '\x1b[3m',
    'COLOR4': '\x1b[4m',
    'COLOR5': '\x1b[5m',
    'COLOR6': '\x1b[6m',
    'COLOR7': '\x1b[7m',
    'COLOR8': '\x1b[8m',
    'COLOR9': '\x1b[9m',
    'COLOR10': '\x1b[10m',
    'COLOR11': '\x1b[11m',
    'COLOR12': '\x1b[12m',
    'COLOR13': '\x1b[13m',
    'COLOR14': '\x1b[14m',
    'COLOR15': '\x1b[15m',
    'COLOR16': '\x1b[16m',
    'COLOR17': '\x1b[17m',
    'COLOR18': '\x1b[18m',
    'COLOR19': '\x1b[19m',
    'COLOR20': '\x1b[20m',
    'COLOR21': '\x1b[21m',
    'COLOR22': '\x1b[22m',
    'COLOR23': '\x1b[23m',
    'COLOR24': '\x1b[24m',
    'COLOR25': '\x1b[25m',
    'COLOR26': '\x1b[26m',
    'COLOR27': '\x1b[27m',
    'COLOR28': '\x1b[28m',
    'COLOR29': '\x1b[29m',
    'COLOR30': '\x1b[30m',
    'COLOR31': '\x1b[31m',
    'COLOR31': '\x1b[31m',
    'COLOR32': '\x1b[32m',
    'COLOR33': '\x1b[33m',
    'COLOR34': '\x1b[34m',
    'COLOR35': '\x1b[35m',
    'COLOR36': '\x1b[36m',
    'COLOR37': '\x1b[37m',
    'COLOR38': '\x1b[38m',
    'COLOR39': '\x1b[39m',
    'COLOR40': '\x1b[40m',


    // Gray (Default) log('COLOR0', `Test Color`)
    // Yellow log('COLOR1', `Test Color`)
    // Italicized log('COLOR3', `Test Color`)
    // Underlined log('COLOR4', `Test Color`)
    // Highlited log('COLOR7', `Test Color`)
    // Invisible?!?! log('COLOR8', `Test Color`)
    // Dark Gray log('COLOR30', `Test Color`)
    // Red log('COLOR31', `Test Color`)
    // Light Green log('COLOR32', `Test Color`)
    // Blue log('COLOR34', `Test Color`)
    // Magenta log('COLOR35', `Test Color`)
    // Light Blue log('COLOR36', `Test Color`)
    // White log('COLOR37', `Test Color`)
}


module.exports = function log(type, message) {
        //client.channels.get("876939184756097064").send("Command Executed");

        const event = `\x1b[1m${types[type]}[${type}]\x1b[0m`
        console.log(`${event} ${message}`)
    
    }
