---
layout: layouts/post.njk
title: Magical Princess Minky Momo
name: 魔法のプリンセス ミンキー モモ
description: Description Text
id : minky-momo
tags: ['minky-momo', 'princess', 'single heroine']
date: 1982-03-18
---

<b>Episode List</b>
<table>
<tr><th>Image</th><th>Episode</th><th>Date</th><th>Title</th><th>Japanese</th><th>Notes</th>
{%- for post in collections.minky-momo-episodes -%}
  <tr><th><img src="{{ post.url | url }}{{ post.data.image }}"></th><th><a href="{{ post.url | url }}">{{ post.data.episode }}</a></th><th>{{ post.date | readableDate }}</th><th>{{ post.data.title }}</th><th>{{ post.data.name }}</th></tr></a>
{%- endfor -%}
</table>