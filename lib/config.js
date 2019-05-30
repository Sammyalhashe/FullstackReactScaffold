/*
 * important constants for the application hosting
 */
const port = process.env.PORT || 3000;
module.exports = {
    port: port,
    host: process.env.HOST || 'localhost'
}
