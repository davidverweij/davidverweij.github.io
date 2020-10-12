---
layout: project
permalink: /:title/
date: 2019-04-25

categories:
  - "thing"
  - "software"

meta:
  keywords: ""

project:
  title: "Google Assistant Simulator"
  logo: "/assets/images/googlesimulator/logo.png"
  technology:
    - tech: "Web application"
      tool: "Javascript, HTML, CSS"
  resources:
    - resource:  "fa-link"
      text:  "Web-app"
      url:   "https://dwidgets.web.app/"
    - resource:  "fa-code"
      text:  "Code repository"
      url:   "https://github.com/davidverweij/ga-mockup"  

images:
  - image:
    url: "/assets/images/googlesimulator/1.jpg"
    title: "The simulator takes touch input to limit possible responses, and shows the Widget's state on the bottom"
    alt: "The simulator on display on a laptop, Widget status on the bottom, interface on the top"
  - image:
    url: "/assets/images/googlesimulator/2.jpg"
    title: "As the conversation progresses, the Widget's status is updated."
    alt: "3 views of the simulator, showing a conversation progressing"
  - image:
    url: "/assets/images/googlesimulator/3.jpg"
    title: "The simulator was demonstrated in kiosk mode, in a noisy public environment"
    alt: "A tablet on display, showing the simulator"




---
<p>
To demonstrate the <u><a href="{{ "/domesticwidgets" | prepend: baseurl }}">Domestic Widgets</a></u> concept in a open an public space (e.g. a conference or event), I developed a web-app that mimics the Domestic Widget Agent on the Google Assistant. The goal was to replicate the experience of the functional Conversation Agent, but prevent erroneous user interaction and distracting functionalities. This web-app allowed users to access most functionality as in the original App, however with – instead of voice control – touch based input. By setting up a tablet in kiosk mode, this web-app could effectively be used by any visitor and be left turned-on throughout the event. The user’s actions would still functionally affect the Domestic Widgets (which is this app’s purpose). For demonstration purposes, this version is disconnected from the database.
</p>
