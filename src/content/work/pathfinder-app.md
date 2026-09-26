---
title: 'Pathfinder'
description: 'A trip-planning mobile app that turns scattered ideas into a shareable itinerary.'
category: 'Mobile'
tech: ['React Native', 'Expo', 'Supabase']
year: 2024
role: 'Product Design'
client: 'Pathfinder'
order: 4
---

## Overview

FreshFonts is a free and open source self-hosted font & icon server that provides a google-fonts-like api with easily embeddable script tags that you place in your `head` <slot />, along with a single css class that you place in your `styles/global.css` file for each font you want to use in your site or application. Fontsource can also be used as a general font manager for your local machine, as it uses the bun runtime to communicate with your operating system and can enable or disable fonts instantly and on demand, giving you more free resources by not having to have unused fonts loaded at all times.

## The challenge

Fonts are notorious for being resource hogs, slowing down even the most powerful machines when a few hundred of them are installed. Graphic designers and web designers are the primary users this software is intended for, but you will probably like it nmore than your current font manager (they all suck).

## Approach

- Using the `woff2` standard **only**, and extending that requirement from only machines sertving web fonts to providing an api for local machines to use the same highly efficient format -  we were able to create a deno fresh based application whose speed still surprises us daily. 
- Lightweight font preview renders paired with efficient svg icon renders keeps even massive libraries in check.
- Extending  and abstracting the client-server font exchange to local machines by treating the application as the server and the machine as the client, fonts are rendered on demand and only when they are needed.

