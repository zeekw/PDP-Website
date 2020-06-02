import Sanity from './sanity-client.js'

export const BlockContent = require('@sanity/block-content-to-react')

export var serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    file: props => (FileRefToElement(props)),
    embed: props => (
      <div className="embed" dangerouslySetInnerHTML={{__html:
    props.node.code}}></div>
    )
  }
}
