module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/fonts/css')

  eleventyConfig.addPassthroughCopy({ 'src/fonts': 'fonts' })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    templateFormats: ['html', 'md', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
  }
}
