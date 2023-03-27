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

  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("justYear", (dateString) => {
    dateObj = new Date(dateString);
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy');
  });
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("dd-mm-yyyy");
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