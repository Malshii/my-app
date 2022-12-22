const stripe = require('stripe')('sk_test_51MHQ4TJgdBMmHGmLs95IPqWdurgSvWicz3HeZ24ZAp3WqBdXdhw4l6rv2NCEeGt9KmqHQYi95uxzn3SCQAbR1SZ900gN7qt5BO')

exports.handler = async function (event) {
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    })

    await stripe.charges.create({
        customer: customer.id,
        amount,
        name,
        description,
        currency: 'usd'
    })
}