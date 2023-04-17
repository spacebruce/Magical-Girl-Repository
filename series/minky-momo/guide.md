---
layout: series/minky-momo.njk
pagename : "Episode Guide"
tags: [ 'guide' ]
---
<table class="EpisodeList">
<tr><th>Episode</th><th>Date</th><th>Titlecard</th><th>Image</th><th>English</th><th>Japanese</th></tr>
{%- for post in collections.minky-momo-episodes -%}<tr>
    <th><a href="{{ post.url | url }}">{{ post.data.episode }}</a></th>
    <th>{{ post.date | readableDate }}</th>
    <th><img src="/series/{{ id }}/media/{{ post.data.titlecard }}"></th>
    <th><img src="/series/{{ id }}/media/{{ post.data.image }}"></th>
    <th>{{ post.data.title }}</th>
    <th>{{ post.data.name }}</th>
  </tr></a>{%- endfor -%}
</table>