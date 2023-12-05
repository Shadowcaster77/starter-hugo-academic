---
title: "Programmable Millimeter-Wave MIMO Radios with Real-Time Baseband Processing"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- admin
- Zhihui Gao
- Chung-Hsuan Tung
- Tingjun Chen
# Author notes (optional)
# author_notes:
# - "Equal contribution"

date: "2023-09-06T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2023-09-06T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *In The 17th ACM Workshop on Wireless Network Testbeds, Experimental evaluation & Characterization 2023 (WiNTECH’23)*
publication_short: In *ACM WiNTECH’23*

abstract: Baseband processing is one of the most time-consuming and computationally expensive tasks in radio access networks (RANs), which is typically realized in dedicated hardware. The concept of virtualizing the RAN functions by moving their computation to edge data centers can significantly reduce the deployment cost and enable more flexible use of the network resources. Recent studies have focused on software-based baseband processing for large-scale sub-6 GHz MIMO systems, while 5G also embraces the millimeterwave (mmWave) frequency bands to achieve further improved data rates leveraging the widely available spectrum. Therefore, it is important to build a platform for the experimental investigation of software-based baseband processing for mmWave MIMO systems. In this paper, we implement programmable mmWave MIMO radios equipped with real-time baseband processing capability, leveraging the open-access PAWR COSMOS testbed. We first develop Agora-UHD, which enables UHD-based software-defined radios (SDRs) to interface with Agora, an open-source software realization of real-time massive MIMO baseband processing. Next, we integrate Agora-UHD with the USRP SDRs and IBM 28 GHz phased array antenna module (PAAM) subsystem boards deployed in the PAWR COSMOS testbed. We demonstrate a 2×2 28 GHz polarization MIMO link with a bandwidth of 122.88 MHz, and show that it can meet the real-time processing deadline of 0.375 ms (3 transmission time intervals for numerology 3 in 5G NR FR2) using only 8 CPU cores. The source code of Agora-UHD and its integration with the programmable 28 GHz radios in the COSMOS testbed with example tutorials are made publicly available.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: '< staticref "uploads/WiNTECH2023_PAAM.pdf" >'
url_code: 'https://github.com/Agora-wireless/Agora/tree/uhd-dev-wip'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- content/project/Bee/index.md


# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---
<!-- 
{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}} -->



