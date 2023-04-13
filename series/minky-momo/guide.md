---
layout: layouts/post.njk
title: Magical Princess Minky Momo | Episode Guide
name: 魔法のプリンセス ミンキー モモ
description: Minky Momo is a Princess from the kingdom of Fenrasia tasked with restoring the dreams of the people of earth. 
subpages: [['/series/minky-momo/','Main'], ['/series/minky-momo/characters/','Characters'], ['/series/minky-momo/guide/','Episode Guide'], ['/series/minky-momo/gallery/', 'Gallery' ]]
id : minky-momo
episodes: 62
format: ['TV', 'OVA', 'Movie', 'Novel']
tags: [ 'minky-momo', 'guide']
date: 1982-03-18
enddate: 1983-03-18
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