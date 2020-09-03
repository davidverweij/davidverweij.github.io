---
layout: project
permalink: /:title/
date: 2017-12-14

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
    - tech: "Android app"
      tool: "Processing for Android - Java"
    - tech: "Local web server"
      tool: "Processing - Java"
    - tech: "Microcontroller"
      tool: "Arduino - C++"
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
    title: "SmoothMoves overlays moving interaction targets in AR"
    alt: "Smoothmoves, person with Microsoft Holo Lens, overlay of interface showing multiple moving buttons"
  - image:
    url: "/assets/images/smoothmoves/2.jpg"
    title: "Correlating head movements selects 'buttons'"
    alt: "Closeup of circular moving buttons, and a face with a sensor tracking head motion"
  - image:
    type: "video"
    url: "2oBnIIu0Au8"
    title: "A brief explanation video of the technique and technology"
  - image:
    url: "/assets/images/smoothmoves/4.jpg"
    title: "With a sensor on your glasses, the technique also works on a phone"
    alt: "Showing Augmented Reality using a phone, user wears separate sensor-equipped glasses"
  - image:
    url: "/assets/images/smoothmoves/5.jpg"
    title: "Instead of depth-sensing, AR markers can also trigger the visuals"
    alt: "Detailed shot of the phone showing moving buttons in the AR app, an AR marker triggers the visualisation."
---
<p>SmoothMoves is an interaction technique for Augmented Reality (AR) based on smooth pursuits head movements. Using spatial-positioning for context-aware headsets, or AR markers otherwise, circular moving targets (or 'buttons') are overlaid on the interaction object. By - every so slightly - moving your head along with these targets, selection is performed.
</p>
<h2 class="h2">Technology</h2>
<p>
The initial prototype utilised a common Inertial Measurement Unit (IMU), in combination with an Arduino Uno, attached to a spectacle frame and powered by a USB connection. A <u><a href="https://android.processing.org/" taget="_blank">Processing for Android</a></u> application would overlay moving targets on an valid AR marker, on screen. The IMU (over USB) and the smartphone (over Wi-Fi) both send their status, as well as movement data of their targets or user to a laptop nearby. This laptop continuously performs a correlation between this movement data, and - upon selection - controls local Wi-Fi enabled smart lights. This prototype (as shown on the last two pictures) was later ported to a Microsoft Holo Lens, which removed the need for AR markers and an auxiliary laptop.
</p>
<h2 class="h2">Contribution</h2>
<p>
I joined this project after the interaction technique was studied in a lab-based environment. Using their code base, I created an Android AR app and further developed it into an interactive demo with a set of Phillips Hue lights. This included the design of the UI and video-graphing the overal interaction with the system. Whilst this version was later ported to the Microsoft Holo Lens by someone else, I further developed it into a smartwatch alternative, see <u><a href="../wavetrace">WaveTrace</a></u>.
</p>
