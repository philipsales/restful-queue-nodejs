var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test'){
    try {
        var config = require('./config.json');
        var envConfig = config[env];
        Object.keys(envConfig).forEach((key) => {
            process.env[key] = envConfig[key];
        });
    } catch(e) {
        console.log('Error: Could not find configuration file. Please create config.json file, base it from config.json.example');
        process.exit(1);
    }
}