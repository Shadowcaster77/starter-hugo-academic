---
title: Front-end and back-end development for multiple sclerosis lesion segmentation (MulS) challenge
summary: Develop new Multiple Sclerosis Lesion Segmentation (MulS) challenge. Reproduce methods: FLEXCONN, OASIS, LST, TOADS to compare to our results and use pyqt5, VTK to design GUI for new methods.

tags:
- ML/DL
date: "2021-05-27T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  focal_point: Smart

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides: example
---

Multiple sclerosis (MS) is a chronic, inflammatory demyelinating disease of the central nervous system in the brain. Magnetic resonance imaging (MRI) is critically important in clinical practice to characterize MS lesions and provide important biomarkers for diagnosis and prognosis. However, MS lesion segmentation is quite challenging and complicated as lesions vary vastly in terms of location, appearance, size, and shape. Thus, there is an apparent need for the automatic detection and segmentation of MS lesions. The current public MS challenge dataset has its limitations due to its small scale, lack of diversity, efficient and effective evaluation criteria. Thus, we will build a new challenge for MS lesion segmentation to promote research in this field.

Successfully train data sets from isbi-15 and get predictions for test datasets using FLEXCONN. For method LST, able to successfully find a bug inside their open-sourced codes and has contacted the developer to notice the problem found. Using the same set of data as used in FLEXCONN, I can process MRI images (by reorienting the image) and identify MS lesions to produce both probability and binary maps. For method OASIS, able to use R from scratch. Based on the API provided, come up with code and provide user manuals guiding how to load images to R, perform cross-sectional MS Lesion Segmentation; process; show results through the FSLR interface, and generate binary maps to submit to the Lesion Challenges. 
 
In the second semester, I was working on GUI development which can be used for our future new method for lesion segmentation. Able to use PYQT5 to design two versions of GUI. Version 1.0.0 has an interface where it can read an MRI image as a .nii file and show it in different layers of all x, y, z axes where users are able to change the exact layering by a slider. In addition, users are able to label the image by providing the coordinates and colors which will show live on the output image. Version 2.0.0 was built through VTK where it can construct a 3D image from a .nii file and mouse interactions are also supported. 


