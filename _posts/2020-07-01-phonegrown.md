---
layout: project
permalink: /:title/
date: 2020-07-01

meta:
  keywords: ""

categories:
  - "project"
  - "software"
  - "research"


project:
  title: "Phone Grown"
  logo: "/assets/images/phonegrown/logo.jpg"
  technology:
    - tech: "Serverless back end"
      tool: "Google App Script - JavaScript"
    - tech: "Anonymous database"
      tool: "Cloud Firestore - NoSQL"
    - tech: "UI Design"
      tool: "Google Sheets"
    - tech: "Mobile Web application"
      tool: "Javascript, HTML, CSS"
  resources:
    - resource:  "fa-link"
      text:  "Project Website"
      url:   "https://www.davidverweij.com/phone-grown/"
    - resource:  "fa-link"
      text:  "Tutorial on Instructables.com"
      url:   "https://www.instructables.com/Turn-an-Unused-Smartphone-Into-a-Smart-Display/"
    - resource:  "fa-code"
      text:  "Code repository"
      url:   "https://github.com/davidverweij/phone-grown"  
    - resource:  "fa-file-pdf"
      text:  "Academic proposition paper"
      url:   "https://doi.org/10.13140/RG.2.2.10942.92487/1"

images:
  - image:
    url: "/assets/images/phonegrown/1.jpg"
    title: "Phone grown is an internet connected background for your drawings"
    alt: "A drawing showing half rainy and half sunny weather. The halves are highlighted depending on the weather, using a phone placed behind the drawing"
  - image:
    url: "/assets/images/phonegrown/2.jpg"
    title: "Use case example of an old phone reminding who's turn it is to clean the litterbox"
    alt: "A drawing of a family, with one person highlighted by a phone behind the drawing"
  - image:
    url: "/assets/images/phonegrown/3.jpg"
    title: "The phone is easily set up by visiting a simple, open-source website"
    alt: "A phone in hand, showing a popup to connect to the Google Sheet"
  - image:
    url: "/assets/images/phonegrown/4.jpg"
    title: "Once setup, the phone can change background colour based on a design in Google Sheets"
    alt: "A phone in hand, showing a popup indicating a live connection to the Google Sheet"
  - image:
    url: "/assets/images/phonegrown/5.jpg"
    title: "The core system, database and user interface are all embedded in a single Google Sheets"
    alt: "The phone showing the same background as one on a laptop, which shows the UI embedded in the Google Sheet"
  - image:
    url: "/assets/images/phonegrown/6.jpg"
    title: "Backgrounds are designed in relation to data sources and using Google Sheets' UI"
    alt: "A laptop showing a spreadsheet where cells are given a background colour using the built-in tools of Google Sheets"
---
<p>
Phone Grown is an open-source, DIY tutorial that helps families transform an unused smartphone into an ambient information display. It is built on a Google Sheet template, which acts as the database and user interface. With the database 'exposed', families can configure rules and design visual outputs for your phone to respond with any incoming data. Using pen and paper, they can contextualise these visual outputs further to suit your needs. With this tutorial, I explored how we can involve and empower families in the development of future Internet of Things (IoT) products and scenarios.
</p>
<h2 class="h2">Technology</h2>
<p>
A Google Sheet template with a document-bound script contains a few predefined formulas and methods. Once deployed, your copy of the Sheet (and script) gives you a personal API. A phone can then connect to that Sheet through that API. Using existing web services (e.g. <u><a href="https://ifttt.com/google_sheets" target="_blank">IFTTT.com</a></u>), numerous data sources can be hooked up to the Sheet. Based on your rules set in the UI, a flag will be set on a secure external database. The phone, which is listening to this flag, will request new instructions and output the visual design on screen - providing a push notification-like service.
</p>
<h2 class="h2">Contribution</h2>
<p>
This project continues the research from the <u><a href="{{ "/domesticwidgets" | prepend: baseurl }}">Domestic Widgets</a></u>, which are both part of my PhD. I iteratively designed the Google Sheet template and developing the communication protocol to provide a seamless connection between the phone and incoming data sources. I additionally developed the tutorial with feedback from pilot runs, which is now published on  <u><a href="https://www.instructables.com/Turn-an-Unused-Smartphone-Into-a-Smart-Display/" target="_blank">Instructables.com</a></u>.
</p>
