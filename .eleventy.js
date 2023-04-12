const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig)
{
  eleventyConfig.addPassthroughCopy("media");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("series/**/*.jpg");
  eleventyConfig.addPassthroughCopy("series/**/*.png");
  eleventyConfig.addPassthroughCopy("series/**/*.mp4");
  eleventyConfig.addWatchTarget("media");
  eleventyConfig.addWatchTarget("css");
  eleventyConfig.addWatchTarget("series");

  const { DateTime } = require("luxon");
  eleventyConfig.addFilter("justYear", (dateString) => {
    dateObj = new Date(dateString);
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy');
  });
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("yyyy-MM-dd");
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