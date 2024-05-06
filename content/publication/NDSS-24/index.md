---
title: "MadRadar: A Black-Box Physical Layer Attack Framework on mmWave Automotive FMCW Radars"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- David Hunt
- Kristen Angell
- admin
- Tingjun Chen
- Miroslav Pajic
# Author notes (optional)
# author_notes:
# - "Equal contribution"

date: "2024-02-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2024-02-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Network and Distributed Systems Security (NDSS) Symposium 2024*
publication_short: In *NDSS'24*

abstract: Frequency modulated continuous wave (FMCW) millimeter-wave (mmWave) radars play a critical role in many of the advanced driver assistance systems (ADAS) featured on today’s vehicles. While previous works have demonstrated (only) successful false-positive spoofing attacks against these sensors, all but one assumed that an attacker had the runtime knowledge of the victim radar’s configuration. In this work, we introduce MadRadar, a general black-box radar attack framework for automotive mmWave FMCW radars capable of estimating the victim radar’s configuration in real-time, and then executing an attack based on the estimates. We evaluate the impact of such attacks maliciously manipulating a victim radar’s point cloud, and show the novel ability to effectively ‘add’ (i.e., false positive attacks), ‘remove’ (i.e., false negative attacks), or ‘move’ (i.e., translation attacks) object detections from a victim vehicle’s scene. Finally, we experimentally demonstrate the feasibility of our attacks on real-world case studies performed using a realtime physical prototype on a software-defined radio platform.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2311.16024.pdf'
url_code: 
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



