// razzle.config.js

// module.exports = {
//     modify: (config, { target, dev }, webpack) => {
//         const appConfig = config; // stay immutable here

//         // Change the name of the server output file in production
//         appConfig.module.rules = {
//             test: /\.(gif|jpe?g|png|ico)$/,
//             loader: 'url-loader?limit=10000'
//         }; 

//         return appConfig;
//     },
// }