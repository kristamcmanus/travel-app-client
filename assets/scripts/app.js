'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const tourEvents = require('./tour/events')

$(() => {

  // auth
  $('#sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').hide()
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // tours
  $('.navbar').hide()
  $('.navbar').on('click', tourEvents.onNavbar)
  $('#add-tour').hide()
  $('#add-tour').on('submit', tourEvents.onAddTour)
  $('#add-tour-btn').on('click', tourEvents.onAddTourBtn)
  $('#view-edit-delete').hide()
  $('#view-edit-delete').on('click', tourEvents.onViewAllToursBtn)
  $('#view-all-tours').hide()
  $('#view-all-tours').on('click', tourEvents.onViewAllTours)
  $('#view-all-tours').on('click', tourEvents.onViewAllToursBtn)
  $('#view-all-tours-btn').on('click', tourEvents.onViewAllToursBtn)
  $('#edit-tour').hide()
  $('#edit-tour').on('submit', tourEvents.onEditTour)
  $('#display-tours').on('click', '#edit-tour', tourEvents.onEditTour)
  $('edit-tour-btn').on('click', tourEvents.onEditTour)
  $('#edit-tour').hide()
  $('#edit-tour').on('click', '#edit-tour-btn', tourEvents.onEditTour)
  $('#delete-tour').hide()
  // $('#delete-tour').on('submit', tourEvents.onDeleteTour)
  $('#display-tours').on('click', '#delete-tour', tourEvents.onDeleteTour)
  $('#display-tours').on('click', tourEvents.onViewAllToursSuccess)
  $('#display-tours').on('click', tourEvents.onDeleteTourSuccess)
  $('#change-pw-btn').on('click', tourEvents.onChangePwBtn)

})
