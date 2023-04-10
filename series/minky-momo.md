---
layout: layouts/post.njk
title: Magical Princess Minky Momo
name: 魔法のプリンセス ミンキー モモ
description: Minky Momo is a Princess from the kingdom of Fenrasia
id : minky-momo
episodes: 62
format: TV
tags: ['minky-momo', 'age-transformation', 'princess', 'single heroine']
date: 1982-03-18
enddate: 1983-03-18
---

The series was followed up by an <a href="/series/minky-momo/">OVA, La Ronde in my Dream</a>, set sometime in the latter half of the series, but before Minky Momo's death, and a sequel/reboot series, <a href="/series/minky-momo-2/">Magical Princess Minky Momo Hold on to Your Dreams in 1991</a> that often calls back to and refers to this series, but has a different Momo main character. It had several of it's own OVA sequels.  

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