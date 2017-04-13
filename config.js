const sizeOf = require('image-size')
const relative = false

const dist = './dist/'
const imageRoot = 'images/'

const getRelativePath = (relative,filename) => {
  let relativePath = ''
  if (relative) {
    var dir = filename.replace('app/pug/files/', '').replace('.pug', '').split('/').length
    for (var i = 0; i < dir; ++i) {
      if (i % 2 === 0 || i === 0) {
        relativePath = './' + relativePath
      } else {
        relativePath = '.' + relativePath
      }
    }
  } else {
    relativePath = '/'
  }
}

module.exports = {
  filters: {
    'image': function (block, options) {
      let imagePath = options.url.match(/\/images\/(.*)$/) ? options.url.match(/\/images\/(.*)$/)[1] : options.url
      const url = imageRoot + imagePath
      const dimensions = sizeOf(dist + url)
      const width = options.size ? Math.ceil(dimensions.width / options.size) : dimensions.width
      let relativePath = getRelativePath(options.relative, options.filename)

      let text = `src='${relativePath}${url}'`

      if (options.size) {
        text = `${text} width='${width}'`
      }

      if (options.alt) {
        text = `${text} alt='${options.alt}'`
      }

      return `<img ${text}>`
    },
    'picture': function (block, options) {
      return `
        <picture>
          <source media="(min-width: 768px)" srcset="https://www.mitsue.co.jp/knowledge/blog/frontend/img/20161221_04.gif">
          <source media="(min-width: 384px)" srcset="https://www.mitsue.co.jp/knowledge/blog/frontend/img/20161221_03.gif">
          <img src="https://www.mitsue.co.jp/knowledge/blog/frontend/img/20161221_02.gif" alt="dummy image">
        </picture>
      `
    },
    'srcset': function (block, options) {
      return `
        <img src=""
             srcset=""
             alt="">
      `
    }
  },
  'data': {
    'index': {
      'title': 'タイトル',
      'keyword': 'キーワード',
      'desc': '説明文'
    },
    'test/index': {
      'title': 'asddgg',
      'keyword': 'キーワード',
      'desc': '説明文'
    },
    'test/aaa': {
      'title': 'asddgdhffhjg',
      'keyword': 'キーワード',
      'desc': '説明文'
    }
  }
}
