---
layout: project
permalink: /:title/
date: 2017-03-28

meta:
  keywords: ""

categories:
  - "project"
  - "software"
  - "research"

project:
  title: "WaveTrace"
  logo: "/assets/images/wavetrace/logo.png"
  technology:
    - tech: "Android (Wear) app"
      tool: "Android native - Java"
    - tech: "Local web server"
      tool: "Processing - Java"
    - tech: "Demo user interfaces"
      tool: "Processing - Java"
  resources:
    - resource:  "fa-file-pdf"
      text:  "performance research paper"
      url:   "https://dl.acm.org/authorize?N676156"
    - resource:  "fa-file-pdf"
      text:  "experience research paper"
      url:   "https://dl.acm.org/authorize?N678796"
    - resource:  "fa-play-circle"
      text:  "technique and performance video"
      url:   "https://youtu.be/jTRq4IBVjP4"
    - resource:  "fa-play-circle"
      text:  "technique and interfaces explainer video"
      url:   "https://youtu.be/Uyz0ubAhPy4"
    - resource:  "fa-code"
      text:  "code repository"
      url:   "https://doi.org/10.5281/zenodo.1490719"

images:
  - image:
    url: "/assets/images/wavetrace/4.jpg"
    title: "WaveTrace allows remote control through motion correlation with an interface"
    alt: ""
  - image:
    type: "video"
    url: "Uyz0ubAhPy4"
    title: "An explanation video of the technique and technology"
  - image:
    url: "/assets/images/wavetrace/1.jpg"
    title: "A digital photoframe displaying (normally hidden) controls"
    alt: ""
  - image:
    url: "/assets/images/wavetrace/3.jpg"
    title: "WaveTrace allows individual use of shared screens (i.e. scalable), such as in classrooms"
    alt: ""
  - image:
    url: "/assets/images/wavetrace/5.jpg"
    title: "Performance was quantitatively determined in a lab-based setting"
    alt: ""
  - image:
    url: "/assets/images/wavetrace/9.jpg"
    title: "Experience was qualitatively studied in a lab-based setting"
    alt: ""

---

<p>
WaveTrace is a tracking technique which allows you to interact with systems by mimicking the movement of its 'options'. When activated, your Wi-Fi enabled smartwatch will calculate if your wrist is moving similarly to any of the presented options, and if so, will activate that option. This allows you to interact with numerous devices and services without the use of optical sensors (i.e. cameras), or the need to remember any gesture whatsoever. After performance testing in a lab-based setting, four prototypes were created for four different scenarios to study its real-world usefulness for: smart home control, television control, classroom participation, and individual interaction with public displays.
</p>
<h2 class="h2">Technology</h2>
<p>
The system builds upon a prototype build for <u><a href="{{ "/smoothmoves" | prepend: baseurl }}">SmoothMoves</a></u>, and utilises an Inertial Measurement Unit (IMU) built into most smart watches. With a flick of the wrist, the WaveTrace Android smartwatch app requests devices on the local network to display their targets such that their targets movement's do not correlate. Wrist movement data is then send over UDP to a central hub (laptop), via a bluetooth connected smart phone, over Wi-Fi, which then continuously performs a correlation between this movement data, and - upon selection - controls the device showing the correlated target. A newer version of this prototype used an Android Wear 2.0 smartwatch, eliminating the need for a smart phone.
</p>
<h2 class="h2">Contribution</h2>
<p>
As part of my Master Thesis, I fully developed the software for this specific interaction technique, and studied its performance. Similarly, I built upon this with four software prototypes and user studies and analysed the results. After my MSc, I developed this research prototype into a <u><a href="{{ "/motionlights" | prepend: baseurl }}"> product family of three lights</a></u>.
</p>