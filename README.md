# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![mobile view](./screenshots/mobile-view.png)
![tablet view](./screenshots/tablet-view.png)
![desktop view](./screenshots/desktop-view.png)

### Links

- Solution URL: [Github solution](https://github.com/rainSaxFrontend-Mentor-Projects/Pod-Request-Access-Landing-Page)
- Live Site URL: [Live site Github Pages](https://rainsaxfrontend-mentor-projects.github.io/Pod-Request-Access-Landing-Page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This project was another opportunity I took for practicing using a mobile first approach. A new challenge I faced was trying to figure out how to add a darker overlay on the mobile hero image. I achieved this using the mix-blend-mode: multiply option on the ::after pseudoelement of my main content div. I also got some practice with using an image for a background, setting it to not repeat, and positioning it where desired.

```
main::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--black);
    z-index: -1;
    opacity: 0.7993;
    mix-blend-mode: multiply;
}
```
### Useful resources

- [MDN description on mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) - This helped me understand what mix-blend-mode does.
- [YT video of mix-blend-mode being used](https://www.youtube.com/watch?v=TAA89nkEuhw) - This great video showed how to use mix-blend-mode to achieve the effect I was looking for.

## Author

- Frontend Mentor - [@rainSax](https://www.frontendmentor.io/profile/rainSax)