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
  url: "https://domesticwidgets.com/"
  logo: "/assets/images/projects/domesticwidgets/logo.png"
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
    url: "/assets/images/projects/domesticwidgets/1.jpg"
    title: "The Domestic Widgets toolkit"
    alt: "Cardboard pieces, electronic components, a Google Home and an assembled Domestic Widget"
  - image:
    url: "/assets/images/projects/domesticwidgets/2.jpg"
    title: "A Widget is made with everyday materials and tools"
    alt: "A messy table surface with craft supplies. Someone working on a Domestic Widget."
  - image:
    title: "Two Example widgets showing different ways to appropriate the servo motor movement"
    url: "/assets/images/projects/domesticwidgets/3.jpg"
    alt: "Two example Widgets, one placed upside down, the other holding two flags."
  - image:
    title: "A Widget is controlled and configured through a Google Home voice assistant app"
    url: "/assets/images/projects/domesticwidgets/4.jpg"
    alt: "A Widget being programmed using the Google Home."
  - image:
    title: "Widgets created by different families, tracking temperature, space rocket launches and wind speeds"
    url: "/assets/images/projects/domesticwidgets/7.jpg"
    alt: "Early form explorations of the prototype."
  - image:
    title: "The toolkit was demonstrated and tested at the UK Maker Faire in 2018"
    url: "/assets/images/projects/domesticwidgets/5.jpg"
    alt: "Myself and two visitors of the 2018 Maker Faire in discussion."
  - image:
    title: "Multiple forms were iterated to offer an easy, tool-less, but sturdy artefact"
    url: "/assets/images/projects/domesticwidgets/6.jpg"
    alt: "Early form explorations of the prototype."

---
<p>Domestic Widgets is a kit that allows households to create 'physical data visualisations' using everyday materials and tools. With a minimal amount of components and a voice assistant for control, families can jointly craft IoT objects without coding or soldering. Contrasting existing kits and approaches, this design leverages the household creativity of existing activities, such as tinkering and crafting with household materials. With this kit, I explored how we can involve and empower families in the development of future Internet of Things (IoT) products and scenarios - and especially involve more members of the household in these activities with different ages and interests.</p>

<h2 class="h2">Technology</h2>
<p>
A Domestic Widget consists out of a low cost small USB powered Wi-Fi enabled microcontroller (ESP8266) and a micro-servo motor (SG90) that can measure its own position. Every minute, this microcontroller polls a HTTP-based RESTful API for instructions. These instructions are simplified representations of live data streams, indicating a specific movement, position and/or duration for the servo motor to represent. Configuring a Widget is done through interaction with a custom built voice assistant for the Google Home. With it, you can choose a data source and configure a mapping for the physical representation for which a demonstration is partly needed by moving the servo motor. This configuration is stored in the database, which polls periodically for new data based on the data source.
</p>