---
title: CBRS - Make Spectrum Sharing a Reality
summary: Spectrum Monitoring and Sharing in CBRS Band
tags:
- Radio Frequency
date: "2022-02-20T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  focal_point: Smart

links:

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides: example
---
A March 2020 report by Analysys Mason found that the U.S. was “far behind” in licensed mid-band spectrum
availability. While 5G offers tremendous investment opportunity, the critical component that is missing in the
U.S. is access to mid-band spectrum. Most of these warnings came in early 2020, prior to the CBRS Priority
Access License auction.

To address those issues, the excitement around dynamic spectrum sharing has been propelled further by
the US Federal government’s plan of exploring spectrum sharing opportunities in allocated bands. The Federal
Communications Commission (FCC) has announced a set of rules, known as Citizens Broadband Radio Service
(CBRS), for commercial wireless usage in a 100 MHz band from 3.55-3.65 GHz since then. The basic CBRS
rule is that this 3.5 GHz band can be used for commercial usage, by the secondary users (SU), when it is not
being used by the incumbent users (IU). The onus of protecting the IUs from interference from SUs is on the
spectrum access system (SAS), the central component in the CBRS ecosystem.

Given the spectrum sharing opportunity enabled by CBRS, it brought up many interesting problems:
1. How LTE access point for CBRS behaves in commercial settings;
2. What will be correlations between spectrum data collected through multiple distributed sensors (mobile
devices, SDRs) and data from the service provider end;
3. How the current ML/DL techniques [1, 2] work in field-measured datasets
