---
layout: project
permalink: /:title/
date: 2016-06-01

meta:
  keywords: ""

categories:
  - "project"
  - "research"


project:
  title: "FireFlies"
  logo: "/assets/images/fireflies/logo.png"
  technology:
    - tech: "Android app"
      tool: "Processing for Android - Java"
  resources:
    - resource:  "fa-file-pdf"
      text:  "research paper"
      url:   "https://dl.acm.org/authorize?N676044"
    - resource:  "fa-play-circle"
      text:  "paper presentation video"
      url:   "https://youtu.be/DQcdwvIyEyw"
    - resource:  "fa-play-circle"
      text:  "short explainer video"
      url:   "https://youtu.be/m4gSaI1LxA8"
images:
  - image:
    url: "/assets/images/fireflies/1.jpg"
    title: "The teacher can control the bottom half of all 'fireflies' through the app"
    alt: "A tablet running the app, showing a classroom layout and colour controls, alongside four FireFlies"
  - image:
    url: "/assets/images/fireflies/2.jpg"
    title: "Pupils control the top half of their FireFly by rotating and pressing the outer shell"
    alt: "A classroom with a FireFly on each table, showing various colours on their top and bottom halves"
  - image:
    type: "video"
    url: "m4gSaI1LxA8"
    title: "30 second explainer video about this research"
  - image:
    url: "/assets/images/fireflies/3.jpg"
    title: "The base station chargers all battery operated FireFlies"
    alt: "A large wooden box in a classroom, hosting all fireflies on top"
  - image:
    url: "/assets/images/fireflies/4.jpg"
    title: "A FireFly without its outer shell. A lithium battery is hidden under the PCB"
    alt: "LEDs on a lasercut wooden base, showing wiring going into a PCB"

---
<p>
FireFlies is a set of tangible 'pixels', each for one student in a high school classroom. Using a tablet, the teacher can colour code the bottom half of these pixels individually or as a group. The students can turn the outer shell of their pixel to change the colour of the top half, or press it down to turn it off. This project explored how high schools would utilise another layer of personal, non-verbal and persistent communication.
</p>
<!--
<h2 class="h2">Technology</h2>
<p>
Each FireFly hosts a custom PCB, LEDs, a potentiometer switch and a rechargeable battery. The tablet app sends instructions over bluetooth to a hub embedded in the chargeing station, which is then forwarded to all FireFlies in a bluetooth mesh network. The app only controls the FireFlies' bottom half, whilst the potentiometer controls the top half - hence communication is one-directional.
</p>-->
<h2 class="h2">Contribution</h2>
For this project, I was responsible for the setup, execution and analysis of the research deployment in high schools. Aside from debugging and slightly altering the tablet app, the prototype was built before my involvement.
<p>

</p>
