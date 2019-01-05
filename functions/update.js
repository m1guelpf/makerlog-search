const algoliasearch = require('algoliasearch');
const util = require('util');
const request = util.promisify(require('request'));

exports.handler = async (event, context, callback) => {
    require('dotenv').config()
    const client = algoliasearch(process.env.APP_KEY, process.env.ADMIN_KEY)

    const index = client.initIndex('products')
    const tmpIndex = client.initIndex('products_tmp')

    client.copyIndex(index.indexName, tmpIndex.indexName, [
        'settings',
        'synonyms',
        'rules'
    ])

    const {
        body
    } = await request('https://api.getmakerlog.com/products/?format=json')

    const projectsTmp = [...JSON.parse(body)]

    while (projectsTmp.length) tmpIndex.addObjects(projectsTmp.splice(0, 1000))

    client.moveIndex(tmpIndex.indexName, index.indexName)

    client.deleteIndex(tmpIndex.indexName)

    callback(null, {
        statusCode: 200,
        body: "Products updated"
    });
}