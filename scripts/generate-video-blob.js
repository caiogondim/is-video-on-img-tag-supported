const fs = require('fs')
const path = require('path')

const videoFile = fs.readFileSync(path.resolve(process.cwd(), 'video.mp4'))
const videoMimeType = 'video/mp4'

const code = `
module.exports = new Blob([new Uint8Array([${[...videoFile.join(', ')]}])], {type: '${videoMimeType}'})
`

fs.writeFileSync(
  path.resolve(process.cwd(), 'src', 'video-blob.js'),
  code,
  {encoding: 'utf-8'}
)
