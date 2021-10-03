const data = require('../db.json');

exports.handler = function(event, context, callback) {
    let path = event.path.replace('/.netlify/functions/restaurant', '');
    path = path.replace('/', '');

    let id = null;

    if(path.includes('/')) {
        id = path.split('/')[1];
        path = path.split('/')[0];
    }

    console.log('path--->', path)
    console.log('id--->', id)

    callback(null, {
        statusCode: 200,
        headers: {
            /* Required for CORS support to work */
            'Access-Control-Allow-Origin': '*',
            /* Required for cookies, authorization headers with HTTPS */
            'Access-Control-Allow-Credentials': true
        },
        body: id ? JSON.stringify(data[path].find(item => item.id === id)) : JSON.stringify(data[path])
    })
}