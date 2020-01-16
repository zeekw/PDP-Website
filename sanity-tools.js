import Sanity from './sanity-client.js'
import imageUrlBuilder from '@sanity/image-url'

const BlockContent = require('@sanity/block-content-to-react')

const ImageUrlBuilder = imageUrlBuilder(Sanity)

exports.BlockContent = BlockContent
exports.ImageUrlBuilder = ImageUrlBuilder
