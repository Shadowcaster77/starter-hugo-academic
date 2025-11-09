---
title: "NEXUS: Efficient and Scalable Multi-Cell mmWave Baseband Processing with Heterogeneous Compute"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- "admin*"
- "Chung-Hsuan Tung"
- Zhihui Gao
- Tingjun Chen
# Author notes (optional)
# author_notes:
# - "Equal contribution"

date: "2025-09-02T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-09-02T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: (*Under Submission*)
publication_short: arXiv:2509.04625

abstract: The rapid adoption of 5G New Radio (NR), particularly in the millimeter-wave (mmWave) spectrum, imposes stringent demands on the flexibility, scalability, and efficiency of baseband processing. While virtualized Radio Access Networks (vRANs) enable dynamic spectrum sharing across cells, compute resource allocation for baseband processing, especially in multi-cell deployments with heterogeneous workloads, remains underexplored. In this paper, we present NEXUS, the first system to realize real-time, virtualized multi-cell mmWave baseband processing on a single server with heterogeneous compute resources. NEXUS integrates software-based digital signal processing pipelines with hardware-accelerated LDPC decoding, and introduces a novel framework for sharing Intel's ACC100 eASIC across multiple CPU cores via virtual functions (VFs). For single-cell operation, NEXUS employs a random forest (RAF)-based model that predicts the most energy-efficient resource allocation for the given cell configuration with microsecond-level inference latency and high accuracy. For multi-cell scenarios, NEXUS introduces a power-aware scheduler that incorporates a lightweight contention model to adjust resource allocation strategies under concurrent execution. Through extensive evaluation across various Frequency Range 2 (FR2) cell configurations, we show that NEXUS supports up to 16 concurrent cells under full load, achieving 5.37Gbps aggregate throughput, while reducing the multi-cell scheduling search space by orders of magnitude. These results demonstrate that virtualized, resource-aware baseband processing is both practical and efficient for next-generation vRAN systems.

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



