---
layout: project
permalink: /:title/
date: 2018-10-12

meta:
  keywords: ""

categories:
  - "project"
  - "software"
  - "hardware"
  - "product"
  - "research"


project:
  title: "Domestic Widgets"
  logo: "/assets/images/domesticwidgets/logo.png"
  technology:
    - tech: "Serverless back end"
      tool: "Cloud Functions - node.js"
    - tech: "NoSQL database"
      tool: "Cloud Firestore"
    - tech: "Natural language processing"
      tool: "Cloud Dialogflow"
    - tech: "Microcontrollers"
      tool: "ESP8266 - C++"
    - tech: "Prototyping"
      tool: "Adobe Suite, lasercutter"
  resources:
    - resource:  "fa-link"
      text:  "Web-app demo"
      url:   "https://dwidgets.web.app/"
    - resource:  "fa-file-pdf"
      text:  "research paper"
      url:   "https://figshare.com/articles/Domestic_widgets_Leveraging_household_creativity_in_co-creating_data_physicalisations/7855778/2"
    - resource:  "fa-link"
      text:  "Domestic Widgets website"
      url:   "https://www.domesticwidgets.com/"
    - resource:  "fa-play-circle"
      text:  "demonstration video"
      url:   "https://youtu.be/RggI7wR4VwQ"

images:
  - image:
    url: "/assets/images/domesticwidgets/1.jpg"
    title: "The Domestic Widgets toolkit"
    alt: "Cardboard pieces, electronic components, a Google Home and an assembled Domestic Widget"
  - image:
    url: "/assets/images/domesticwidgets/2.jpg"
    title: "A Widget is made with everyday materials and tools"
    alt: "A messy table surface with craft supplies. Someone working on a Domestic Widget."
  - image:
    title: "Two examples of how to appropriate the servo motor movement"
    url: "/assets/images/domesticwidgets/3.jpg"
    alt: "Two example Widgets, one placed upside down, the other holding two flags."
  - image:
    type: "video"
    url: "RggI7wR4VwQ"
    title: "A Widget is controlled and configured through the Google Home"
  - image:
    title: "Families' Widgets, tracking temperature, space rockets and wind speeds"
    url: "/assets/images/domesticwidgets/7.jpg"
    alt: "Early form explorations of the prototype."
  - image:
    title: "The toolkit was demonstrated and tested at the UK Maker Faire in 2018"
    url: "/assets/images/domesticwidgets/5.jpg"
    alt: "Myself and two visitors of the 2018 Maker Faire in discussion."
  - image:
    title: "Multiple forms were iterated to offer an easy, tool-less, but sturdy artefact"
    url: "/assets/images/domesticwidgets/6.jpg"
    alt: "Early form explorations of the prototype."

---
<p>Domestic Widgets is a kit that allows families to create physical data visualisations using everyday materials and tools. After the cardboard design is assembled, it can be connecting to real-time data, such as the weather or seismic activity anywhere in the world. There is no soldering or coding involved. Instead, Widgets are configured using your voice through a Google Home. With this kit, I explored how we can involve and empower families in the development of future Internet of Things (IoT) products and scenarios - and especially involve more members of the household in these activities with different ages and interests.
</p>
<h2 class="h2">Technology</h2>
<p>
A Domestic Widget hosts a Wi-Fi enabled microcontroller and servo motor. Every minute, this microcontroller requests instructions, which are simplified physical positions and movements based on live data streams. Users interact through a Google Home voice assistant, and choose data streams and a particular method of mapping the data to physical movements.
</p>
<h2 class="h2">Contribution</h2>
<p>
As part of my design-research led PhD, I fully designed and developed this toolkit. This includes the physical (product) design, hardware, software, server protocol, voice interface 'app', instruction booklets as well as the photographs displayed here. In addition, I was responsible for the setup, execution and analysis of the research activities involving the Domestic Widget's deployment.
</p>
