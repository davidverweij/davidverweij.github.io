---
layout: project
permalink: /:title/
date: 2016-12-14

meta:
  keywords: ""


categories:
  - "project"
  - "software"
  - "research"


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
    - tech: "UI design"
      tool: "Adobe Illustrator"
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
#  - image:
#    type: "video"
#    url: "2oBnIIu0Au8"
#    title: "A brief explanation video of the technique and technology"
  - image:
    url: "/assets/images/smoothmoves/4.jpg"
    title: "With a sensor on your glasses, the technique also works on a phone"
    alt: "Showing Augmented Reality using a phone, user wears separate sensor-equipped glasses"
  - image:
    url: "/assets/images/smoothmoves/5.jpg"
    title: "Instead of depth-sensing, AR markers can also trigger the visuals"
    alt: "Detailed shot of the phone showing moving buttons in the AR app, an AR marker triggers the visualisation."
---
<p>SmoothMoves is an interaction technique for Augmented Reality (AR), based on smooth pursuits head movements. Using AR, circular moving targets (or 'buttons') are overlaid on an interactable object. By ever so slightly moving your head along with these targets, you can select the buttons. The prototype was built to demonstrate potential use cases of the technique in real-world settings.
</p>
<h2 class="h2">Technology</h2>
<p>
An Inertial Measurement Unit (IMU) attached to a spectacle frame continuously tracks head movements, whilst an Android application overlays moving targets on an AR marker. A laptop receives movement data of the targets and the user, and calculates a correlation between the two. If they match, the laptop will send instructions to interactable object. This prototype (as shown on the last two pictures) was later ported to a Microsoft Holo Lens, which removed the need for AR markers and the laptop.
</p>
<h2 class="h2">Contribution</h2>
<p>
Using the code base of an existing research prototype, I created the Android AR app and further developed it into an interactive demo with a set of Phillips Hue lights. This included the design of the UI and video-graphing the overall interaction with the system. I further developed this technique into a smartwatch alternative, see <u><a href="{{ "/wavetrace" | prepend: baseurl }}">WaveTrace</a></u>.
</p>
