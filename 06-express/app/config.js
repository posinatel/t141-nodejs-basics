module.exports = {
    // npm config set subscriber-api:host 127.0.0.1
    host: process.env.npm_package_config_host || "localhost",
    //npm config set subscriber-api:port 8080
    port: process.env.npm_package_config_port || 9000
}