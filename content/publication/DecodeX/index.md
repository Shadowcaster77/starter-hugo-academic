---
title: "DecodeX: Exploring and Benchmarking of LDPC Decoding across CPU, GPU, and ASIC Platforms"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- "admin*"
- "Yuncheng Yao"
- "Yiming Li"
- "Chung-Hsuan Tung"
- "Junyao Zheng"
- Danyang Zhuo
- Tingjun Chen
# Author notes (optional)
# author_notes:
# - "Equal contribution"

date: "2025-11-02T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-11-02T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: (*Under Submission*)
publication_short: arXiv:2511.02952

abstract: Emerging virtualized radio access networks (vRANs) demand flexible and efficient baseband processing across heterogeneous compute substrates. In this paper, we present DecodeX, a unified benchmarking framework for evaluating low-density parity-check (LDPC) decoding acceleration across different hardware platforms. DecodeX integrates a comprehensive suite of LDPC decoder implementations, including kernels, APIs, and test vectors for CPUs (FlexRAN), GPUs (Aerial and Sionna-RK), and ASIC (ACC100), and can be readily extended to additional architectures and configurations. Using DecodeX, we systematically characterize how different platforms orchestrate computation-from threading and memory management to data movement and accelerator offload-and quantify the resulting decoding latency under varying Physical layer parameters. Our observations reveal distinct trade-offs in parallel efficiency and offload overhead, showing that accelerator gains strongly depend on data-movement and workload granularity. Building on these insights, we discuss how cross-platform benchmarking can inform adaptive scheduling and co-design for future heterogeneous vRANs, enabling scalable and energy-efficient baseband processing for NextG wireless systems.

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



