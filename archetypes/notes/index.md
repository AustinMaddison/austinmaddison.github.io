---
title: {{ replace .File.ContentBaseName `-` ` ` | title }}
date: '{{ time.Now.Format "02 Jan 2006" }}'
description: Example Description
thumbnail: thumbnail.png
cover: cover.png
tags: [tag1, tag2]
categories: [category1]
draft: true
weight: 1     
---