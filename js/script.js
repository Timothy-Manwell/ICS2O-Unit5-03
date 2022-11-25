// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-03/sw.js", {
    scope: "/ICS2O-Unit5-03/",
  })
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = "Your age: " + valueFromSlider
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  
  if (valueFromSlider > 13) {
    document.getElementById("movie-rating").innerHTML =
      "You can see up to an r rated movie."
  } else if (valueFromSlider == 13) {
    document.getElementById("movie-rating").innerHTML =
      "You can see up to a Pg 13 rated movie."
  } else if (valueFromSlider < 13) {
    document.getElementById("movie-rating").innerHTML =
      "You can see up to a G 13 rated movie."
  }
}
