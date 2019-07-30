const SANITY_TOKEN = process.env.SANITY_TOKEN

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'ocpl5ulk',
  dataset: 'pdp-data',
  token: SANITY_TOKEN, // or leave blank to be anonymous user
  useCdn: false
})

exports.handler = function(event, context, callback) {
  const query = '*[ _type == "event" && old != true && date < now() ] { _id, title }'
  const params = {}

  client.fetch(query, params).then(oldEvents => {
    oldEvents.forEach(event => {
      client.patch(event._id).set({old: true}).commit()
        .then(updatedEvent => {
          console.log('Marked ' + updatedEvent.title + ' as old')
        })
        .catch(err => {
          console.error('Oh no, the update failed: ', err.message)
        })
    })
  })
};
