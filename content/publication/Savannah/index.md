---
title: "Savannah: Efficient mmWave Baseband Processing with Minimal and Heterogeneous Resources"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- admin *
- Chung-Hsuan Tung *
- Anuj Kalia
- Tingjun Chen
- "* Equal contribution"
# Author notes (optional)
# author_notes:
# - "Equal contribution"

date: "2024-09-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2024-09-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the 30th Annual International Conference on Mobile Computing and Networking(MobiCom)*
publication_short: In *MobiCom'24 (To appear)*

abstract: Beyond-5G and 6G wireless networks exploit the millimeter-wave (mmWave) frequency bands to achieve significantly improved data rates, and existing mmWave systems rely on analog single-user beamforming (SUBF) or hybrid multi-user beamforming (MUBF). In this work, we focus on improving the performance of multi-user communication in mmWave networks by exploring analog MUBF using an array of subarrays (ASA) with reduced system overhead and hardware complexity as it eliminates digital beamforming and the need for estimating the channel state information (CSI). We present Mambas, a novel system that maneuvers analog MUBF using an ASA to support simultaneous communication with multiple users located in close proximity, e.g., within the half-power beamwidth of the ASA. In essence, Mambas effectively decouples the user selection, subarray allocation, and beamforming optimization based on a comprehensive understanding of the multi-user support determined by the ASA. We evaluate Mambas using a 28 GHz software-defined radio testbed and show that, compared to existing methods, Mambas can effectively support users that are 2× more closely spaced while achieving an improved sum rate of up to 2×, using only two subarrays. Large-scale ray tracing-based simulations also show that Mambas can achieve a sum rate gain of 1.92--3.86× and is able to maintain consistent performance with significantly increased user density.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
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



