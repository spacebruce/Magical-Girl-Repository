const htmlmin = require("html-minifier");
const Image = require('@11ty/eleventy-img');
const path = require('path');

// Thumbnailify
const imageShortcode = async (relativeSrc, alt, className, widths = [null, 400, 800, 1280], formats = ['jpeg', 'webp'], sizes = '100vw') => {
  const { dir: imgDir } = path.parse(relativeSrc);
  const fullSrc = path.join('src', relativeSrc);
  const imageMetadata = await Image(fullSrc, {
    widths,
    formats,
    outputDir: path.join('_site', imgDir),
    urlPath: imgDir,
  });
};

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