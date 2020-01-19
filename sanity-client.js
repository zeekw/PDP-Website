export const projectId = "ocpl5ulk"
export const dataset = "pdp-data"

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: projectId,
  dataset: dataset,
  // token: process.env.emailjs_uid, // or leave blank to be anonymous user
  useCdn: true
})

export default client
