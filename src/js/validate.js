function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.


  const latitude = document.getElementById('latitude')
  const longitude = document.getElementById('longitude')
  let errorMsg = '*'
  if (parseInt(latitude.value) >= -90 && parseInt(latitude.value) <= 90) {
    errorMsg = "*"
    document.querySelector('label[for="latitude"] .required').innerHTML = errorMsg

  }
  if (parseInt(longitude.value) >= -180 && parseInt(longitude.value) <= 180) {
    errorMsg = "*"
    document.querySelector('label[for="longitude"] .required').innerHTML = errorMsg

  }
  if (!(latitude.value === NaN || (parseInt(latitude.value) >= -90 && parseInt(latitude.value) <= 90))) {
    errorMsg = "* must be a valid number between -90 and 90"
    document.querySelector('label[for="latitude"] .required').innerHTML = errorMsg
    return false
  }
  if (!(longitude.value === NaN || (parseInt(longitude.value) >= -180 && parseInt(longitude.value) <= 180))) {
    errorMsg = "* must be a valid number between -180 and 180"
    document.querySelector('label[for="longitude"] .required').innerHTML = errorMsg
    return false
  }
  errorMsg = "*"
  document.querySelector('label[for="latitude"] .required').innerHTML = errorMsg
  document.querySelector('label[for="longitude"] .required').innerHTML = errorMsg
  console.log('TODO - validate the longitude, latitude values before submitting')
  return true
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector('form')
  form.onsubmit = validate
}
