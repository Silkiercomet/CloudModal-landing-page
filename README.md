# CloudModal Landing Page

This repository contains the landing page for CloudModal. It is responsive, beautiful, easy to use, and will work on any device. The purpose of this project was to practice my frontend skills with a real-life project.

## Table of Contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

A landing page created with a mobile-first workflow in mind. It has animations and two sliders with small differences between them, providing an overall good experience and a beautiful design.

### Screenshot

![workit landing page](./screenshot.jpeg)

### Links
https://github.com/Silkiercomet/CloudModal-landing-page
- Solution URL: [github repo](https://github.com/Silkiercomet/CloudModal-landing-page)
- Live Site URL: [live site URL](https://silkiercomet.github.io/CloudModal-landing-page/)

## My Process

First, I created the HTML template of the page using the BEM naming convention. I created a well-defined (semantic), intuitive, and readable foundation to start adding the cascading style, which was created from the mobile-first workflow, making the development of larger screens easier. After that, I added the JavaScript for the sliders, fade-in animation, and functionality of an accordion in the script.js file.

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- BEM naming convention
- Intersection Observer API

### Continued Development

There is a lot to improve, mainly in the script file. Both sliders could have easily used the same querySelector, so the functionality of both could have been defined in a single instance of the drag function. But for the sake of time, I duplicated the code. This goes against the DRY (Don't Repeat Yourself) principle, so that can be done to improve the performance of the page.

Also, the mobile menu doesn't have a good use because the only option that the navbar offers is the login one, which can be provided with a single button instead of the hamburger menu.

### Useful Resources

- [BEM naming convention](https://getbem.com/naming/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## Author

- Website - [Luis Colina Portfolio](https://luis-colina-portfolio.netlify.app/)
