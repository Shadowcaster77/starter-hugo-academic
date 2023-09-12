---
title: "Field Trial of Coexistence and Simultaneous Switching of Real-time Fiber Sensing and 400GbE Supporting DCI and 5G Mobile Services"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Yue-Kai Huang
- Zehao Wang
- Ezra Ip
- admin
- Gil Zussman
- Dan Kilper
- Koji Asahi
- Hideo Kageshima
- Yoshiaki Aono
- Tingjun Chen

# Author notes (optional)
# author_notes:
# - "Equal contribution"

date: "2023-03-05T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2023-03-05T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of 2023 Optical Fiber Communications Conference and Exhibition*
publication_short: In *IEEE OFC'23*

abstract: Recent advances in optical fiber sensing has enabled telecom network operators to monitor their fiber infrastructure while creating new revenue streams in data center interconnect (DCI), public safety, and smart city applications. As using dedicated fibers for sensing may be undesirable for operators whose fiber networks are close to fully utilized for dense wavelength-division multiplexing (DWDM) transmission, it is also possible that common optical functions,
such as optical switching, can be shared between sensing and communication equipment for cost reduction. To achieve
that goal, it is crucial to study the coexistence of sensing and data transmission on the same DWDM network regarding
the impact to quality of transmission (QoT) [3], such as pre/post-FEC bit error rate (BER). Furthermore, an integrated
platform with joint sensing and communication capabilities allows the sensing system to provide advance warnings to
the network management system and to facilitate optical switching to the backup route in the event of fiber cuts.
In this paper, we report field trial results investigating the co-propagation of distributed acoustic sensing (DAS),
coherent 400GbE, and analog radio-over-fiber (ARoF) signals using field-deployed dark fibers in a dense metro area
using the city-scale PAWR COSMOS testbed [4] deployed in Manhattan. The ARoF provides direct transmission of
analog wideband radio signals over the same fiber route to support centralized RF resources for 5G/6G fronthaul. We
show that the constant-amplitude DAS operating at optimal power levels has minimal impact on the coherent 400GbE
QoT in real-time. We also demonstrate a use case of DAS-informed preemptive optical switching of a 400GbE signal
to a backup route as the DAS identified abnormal events indicating possible outage on the original fiber link.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: '[https://dl.acm.org/doi/pdf/10.1145/3274783.3275197](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10117373)'
url_code: ''
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
- content/project/LPIot/index.md

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


