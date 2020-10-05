---
layout: project
permalink: /:title/
date: 2017-10-02

meta:
  keywords: ""

categories:
  - "thing"
  - "product"
  - "hardware"
  - "software"

project:
  title: "Motion Lights"
  logo: "/assets/images/motionlights/logo.png"
  technology:
    - tech: "Android Wear app"
      tool: "Android native - Java"
    - tech: "Prototyping"
      tool: "Adobe Suite, lasercutter"
    - tech: "Microcontrollers"
      tool: "C++, Linux, Java"
  resources:
    - resource:  "fa-file-pdf"
      text:  "research paper"
      url:   "https://dl.acm.org/authorize?N676044"
    - resource:  "fa-play-circle"
      text:  "detailed interaction video"
      url:   "https://youtu.be/GawBbBrpR_A"
    - resource:  "fa-code"
      text:  "design files and code repository"
      url:   "https://doi.org/10.5281/zenodo.1490719"
images:
  - image:
    url: "/assets/images/motionlights/1.jpg"
    title: "Engraved plexiglass provided a bright, but diffused light, comfortable enough be looked at directly and function as a UI. Photo © Twijcer"
    alt: ""
  - image:
    url: "/assets/images/motionlights/2.jpg"
    title: "Free standing or hanging lights came in three, to ensure the 'UI' was visible from all directions. Photo © Twijcer"
    alt: ""
  - image:
    url: "/assets/images/motionlights/3.jpg"
    title: "A third, wall-mounted light, (left) shows a blue selectable 'dot' traversing along the light itself. Photo © Twijcer"
    alt: ""
#  - image:
#    type: "video"
#    url: "GawBbBrpR_A"
#    title: "A detailed explanation of the interaction with two lights"
  - image:
    url: "/assets/images/motionlights/4.jpg"
    title: "The lights were displayed at the Dutch Design Week in 2017. The smartwatch was secured using a modified, 3D printed, charger"
    alt: ""
  - image:
    url: "/assets/images/motionlights/6.jpg"
    title: "A layered construction allowed for a 'simple' prototyping tools and a slim form factor"
    alt: ""
  - image:
    url: "/assets/images/motionlights/5.jpg"
    title: "An overview of different interaction modes and possibilities for each light, and the underlying architecture."
    alt: ""
---

<p>To explore how the <u><a href="{{ "/wavetrace" | prepend: baseurl }}">WaveTrace</a></u> interaction technique could be implemented in domestic, non-screen based, products, I designed and developed a product family of three lights. Each light displays contrasting coloured dots traversing the product itself, using the LEDs both as a light source and UI. Mimicking these dots (i.e. pointing at them) with your smart-watch wearing wrist will select them. Each light implemented the interaction technique slightly different to explore and demonstrate the technique's potential.
</p>
<h2 class="h2">Technology</h2>
<p>
A central hub (Raspberry PI) runs a simulation of all moving targets of all connected lights - ensuring these targets do not correlate amongst themselves. It continuously sends instructions to each light's embedded microcontroller wirelessly. A smart watch sends movement data to the hub, which then correlates these movements and acts upon 'selection'. In addition to selection, twisting the wrist while a light was selected would affect the light's overall brightness.
</p>
