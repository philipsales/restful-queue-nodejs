var env = process.env.NODE_ENV || 'local';
var config 
var envConfig

try {
    if (env === 'production' || env === 'prod'){
        config = require('./config.prod.json');
    } 
    else {
        config = require('./config.json');
    }

    envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });

} catch(e) {
    console.log('Error: Could not find configuration file. Please create config.json file, base it from config.json.example');
    process.exit(1);
}


module.exports = { config };