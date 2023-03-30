---
layout: layouts/post.njk
title: Magical Princess Minky Momo
name: 魔法のプリンセス ミンキー モモ
description: Description Text
id : minky-momo
episodes: 62
format: TV
tags: ['minky-momo', 'princess', 'single heroine']
date: 1982-03-18
enddate: 1983-03-18
---

<b>Episode List</b>
<table class="EpisodeList">
<tr><th>Episode</th><th>Date</th><th>Titlecard</th><th>Image</th><th>English</th><th>Japanese</th><th>Notes</th>
{%- for post in collections.minky-momo-episodes -%}
  <tr>
    <th><a href="{{ post.url | url }}">{{ post.data.episode }}</a></th>
    <th>{{ post.date | readableDate }}</th>
    <th><img src="{{ post.url | url }}{{ post.data.titlecard }}"></th>
    <th><img src="{{ post.url | url }}{{ post.data.image }}"></th>
    <th>{{ post.data.title }}</th>
    <th>{{ post.data.name }}</th>
    <th>{{ post.data.note }}</th>
  </tr></a>
{%- endfor -%}
</table>