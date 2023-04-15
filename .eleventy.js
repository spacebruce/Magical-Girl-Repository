const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig)
{
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("series/**/*.jpg");
  eleventyConfig.addPassthroughCopy("series/**/*.png");
  eleventyConfig.addPassthroughCopy("series/**/*.mp4");
  eleventyConfig.addWatchTarget("assets");
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

  // ADD THIS
  eleventyConfig.addShortcode("thumbnail", (path, text) => `<a href="${path}"><img src="${path}">${text}</a>`);
};