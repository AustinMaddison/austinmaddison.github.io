---
date: '{{ time.Now.Format "2006-01-02" }}'
draft: true
title: '{{ replace .File.ContentBaseName `-` ` ` | title }}'
description: Description
image_thumbnail: "images/thumbnail.png"
image_cover: "images/cover.png"
category: 
tags:
    - Example Tag
weight: 1   
---