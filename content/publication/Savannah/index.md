---
title: "Savannah: Efficient mmWave Baseband Processing with Minimal and Heterogeneous Resources"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- *admin
- *Chung-Hsuan Tung *
- Anuj Kalia
- Tingjun Chen
- "* Equal contribution"
# Author notes (optional)
# author_notes:
# - "Equal contribution"

date: "2024-09-02T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2024-09-02T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the 30th Annual International Conference on Mobile Computing and Networking(MobiCom)*
publication_short: In *MobiCom'24 (To appear)*

abstract: 5G new radio (NR) employs frequency range 2 (FR2) to support higher data rates leveraging the widely available spectrum in the millimeter-wave (mmWave) bands. Compared to systems operating in sub-7 GHz FR1 bands, FR2 employs much shorter slot duration and therefore, poses significant challenges for softwarized baseband processing, a key enabler for virtualized radio access networks (vRANs). Existing systems supporting software baseband processing typically focus on enabling (massive) multiple-input and multiple output (MIMO) using multi-core edge server(s). In the context of FR2, these solutions may fail to meet the more stringent processing deadline or require more intensive computational resources. In this paper, we present Savannah, a framework for efficient mmWave baseband processing using minimal and heterogeneous computing resources, including CPU and eASIC. To address the challenges associated with baseband processing in FR2, Savannah applies techniques for vectorizing matrix operations and memory access patterns, supporting heterogeneous computation via offloading LDPC decoding to an eASIC, and enabling single-core operation. Through extensive experiments, we show that Savannah using a single CPU core and the ACC100 accelerator can support a 2×2 MIMO link with 100 MHz bandwidth under full uplink traffic load, yielding a data rate of up to 487 Mbps.

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



