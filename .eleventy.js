const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig)
{
  eleventyConfig.addPassthroughCopy("media");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("episodes/**/*.jpg");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addWatchTarget("media");
  eleventyConfig.addWatchTarget("css");
  eleventyConfig.addWatchTarget("fonts");

  const {
      DateTime
    } = require("luxon");
  
      eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
          zone: 'utc'
        }).toFormat('yyyy-MM-dd');
      });
  
      eleventyConfig.addFilter("readableDate", dateObj => {
      return DateTime.fromJSDate(dateObj, {
        zone: 'utc'
      }).toFormat("dd-MM-yyyy");
    });

    eleventyConfig.addCollection("tagGroup", function (collectionApi) {
      return collectionApi.getFilteredByTags("post", "page");
    });

    //eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    //  if (outputPath.endsWith(".html")) {
    //    return htmlmin.minify(content, {
    //      removeComments: true,  
    //      useShortDoctype: true,
    //    });
    //  }
    //  return content;
    //});
};