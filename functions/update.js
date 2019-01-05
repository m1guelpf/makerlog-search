const algoliasearch = require('algoliasearch');
const util = require('util');
const request = util.promisify(require('request'));
require('dotenv').config()

exports.handler = async (event, context, callback) => {
    const client = algoliasearch(process.env.APP_KEY, process.env.ADMIN_KEY)

    const index = client.initIndex('products')
    const {
        body
    } = await request('https://api.getmakerlog.com/products/?format=json')

    const projectsTmp = [...JSON.parse(body)]

    while (projectsTmp.length) index.addObjects(projectsTmp.splice(0, 1000))

    callback(null, {
        statusCode: 200,
        body: "Products updated"
    });
}