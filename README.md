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
  - [Continued development](#continued-development)
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

![](./screenshot.png)

### Links

- Solution URL: [URL](https://www.frontendmentor.io/solutions/pod-request-access-landing-page-using-parcel-and-sass-B1NmrC8Bc)
- Live Site URL: [URL](https://miguelzaga.github.io/pod-request-access-landing-page/)

## My process

### Built with

- Parcel (Though, I could not deploy it)
- Sass
- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

This is my first time using Parcel. I was going to use Webpack but it needs more configuration. I am glad that Parcel worked and that it easy to use with Sass (this is my second project using it). I watched some videos and I will try to include Sass nesting and a better structure. I also failed to deploy with parcel and gh-pages. I think I might try gulp next time.

#### JS
It is a simple handler function but I like it.
```
```js
  const handler = function (e) {
    e.preventDefault();
    if (isEmailValid(email.value)) {
      hideError();
      window.open("https://www.frontendmentor.io/profile/miguelzaga", "_blank");
    } else {
      showError();
    }
  };

  form.addEventListener("submit", handler);
```

### Continued development

I need to learn more about package managers and build tools.

### Useful resources

- [The Parcel Bundler](https://www.youtube.com/watch?v=OK6akGZCC88&list=PLoskGHof_0kHVvCWunMv1daUd-n7SIcOZ&index=1) - I organized the project based in this video. I am just getting my feet wet with Parcel.
- [When to use margin vs padding](https://stackoverflow.com/questions/2189452/when-to-use-margin-vs-padding-in-css/9183818#9183818) - This helped me organize better the margin of the elements, I did not know the collapse behavior of margin, really cool.
- [Javascript Form Validation](https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/) - This helped me go through the form validation.
- [Disable HTML validation](https://stackoverflow.com/questions/3090369/disable-validation-of-html5-form-elements) - Useful Stackoverflow question.

## Author

- Website - [Miguel Zapata](https://www.miguezaga.online)
- Frontend Mentor - [@miguelzaga](https://www.frontendmentor.io/profile/miguelzaga)
