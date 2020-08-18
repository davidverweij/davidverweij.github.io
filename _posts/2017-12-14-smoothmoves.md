---
layout: project
permalink: /:title/
date: 2019-12-01

meta:
  keywords: ""


categories:
  - "project"
  - "software"
  - "research"
  - "graphic"


project:
  title: "SmoothMoves"
  logo: "/assets/images/smoothmoves/logo.png"
  technology:
    - tech: "Serverless back end"
      tool: "Cloud Functions - node.js"
    - tech: "NoSQL database"
      tool: "Cloud Firestore"
    - tech: "Natural language processing"
      tool: "Cloud Dialogflow"
    - tech: "Microcontroller"
      tool: "Arduino - C++"
    - tech: "lasercutter"
  resources:
    - resource:  "fa-file-pdf"
      text:  "research paper"
      url:   "https://dl.acm.org/authorize?N676042"
    - resource:  "fa-play-circle"
      text:  "research video"
      url:   "https://youtu.be/vd4tXIetAz4"

images:
  - image:
    url: "/assets/images/smoothmoves/1.jpg"
    title: "SmoothMoves, an AR interaction technique using head movements"
    alt: "Smoothmoves, person with Microsoft Holo Lens, overlay of interface showing multiple moving buttons"
  - image:
    url: "/assets/images/smoothmoves/2.jpg"
    title: "Correlated head movements selects corresponding 'buttons'"
    alt: "closeup of circular moving buttons, and a face with a sensor tracking headmotion"
  - image:
    type: "video"
    url: "2oBnIIu0Au8"
    title: "A brief explanation video of the technique and technology"
  - image:
    url: "/assets/images/smoothmoves/4.jpg"
    title: "Whilst wearing glasses with a sensor, this AR technique also works on a phone"
    alt: "Showing Augmented Reality using a phone, user wears separate sensor-equipped glasses"
  - image:
    url: "/assets/images/smoothmoves/5.jpg"
    title: "No depth-sensing capabilities? AR marker can also trigger the menu"
    alt: "Detailed shot of the phone showing moving buttons in the AR app, an AR marker triggers the visualisation."
---
<p>SmoothMoves is an interaction technique for augmented reality (AR) based on smooth pursuits head movements. Using spatial-positioning for context-aware headsets, or AR markers otherwise, circular moving targets (or 'buttons') are overlaid on the interaction object. By - every so slightly - moving your head along with these targets, selection is performed.
</p>

<h2 class="h2"></h2>
<p>

My contribution was mainly ...
- initial demo + implementation of the technique (processing on Android - Java)
-- inc recognition of AR markers + phillips hue
- convertation of technique into smartwatch approach (see WaveTrace)
- Film scenario + editing for paper, and demonstration purposes
- contribution to technique details (e.g. continuous selection approach)
</p>
