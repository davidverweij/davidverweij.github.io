---
layout: project
permalink: /:title/
date: 2018-12-20

meta:
  keywords: ""

categories:
  - "thing"
  - "software"

project:
  title: "Sensor Data Visualisation"
  logo: "/assets/images/sensorapp/logo.png"
  technology:
    - tech: "Web application"
      tool: "Javascript, HTML, CSS"
    - tech: "Database"
      tool: "Firebase Firestore"
    - tech: "Serverless back end"
      tool: "Cloud Functions - node.js"
    - tech: "Datavisualisation"
      tool: "D3.js"
  resources:
    - resource:  "fa-play-circle"
      text:  "Project video"
      url:   "https://vimeo.com/311056015"
    - resource:  "fa-link"
      text:  "Web-app demo"
      url:   "https://youreco-demo.web.app/"
    - resource:  "fa-code"
      text:  "Code repository"
      url:   "https://github.com/davidverweij/youreco"  

images:
  - image:
    url: "/assets/images/sensorapp/1.jpg"
    title: "The web-app would filter sensor data chronologically or summed per month, updating live with new sensor readings"
    alt: "a phone and tablet both displaying the sensor app webpage, primarily consisting out of bar charts"
  - image:
    url: "/assets/images/sensorapp/3.jpg"
    title: "The app displays sensor events real time, such as from the light sensor (left)"
    alt: "A person holding a phone with the app, with a light sensor in the background on the wall"
  - image:
    url: "/assets/images/sensorapp/2.jpg"
    title: "The 'YourEco' project included shower, waste and light sensors"
    alt: "Three sensors shown side by side"
---
<p>
Whilst a fellow MSc student of mine developed a set of habit tracking sensors, I helped out by setting up a 'quick and rough' web-app that would visualise events from those sensors in a personal dashboard. This project researched how tracking and displaying habits could combat environmental 'waste' (e.g. long showers). Their proof of concept stored sensors events in a Dropbox folder. Using <u><a href="https://www.ifttt.com/" target="_blank">IFTTT</a></u>, new additions to that folder would update the database behind this dashboard. Users could then navigate to the 'YourEco' website, log-in, and see their sensor data chronologically, or summed per month.
</p>
