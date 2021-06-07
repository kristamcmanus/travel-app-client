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

  // navbar
  $('.navbar').hide()
  $('.navbar').on('click', tourEvents.onNavbar)

  // tours
  $('#add-tour').hide()
  $('#add-tour').on('submit', tourEvents.onAddTour)
  $('#add-tour-btn').on('click', tourEvents.onAddTourBtn)
  $('#view-edit-delete').hide()
  $('#view-edit-delete').on('click', tourEvents.onViewAllToursBtn)
  $('#view-all-tours').hide()
  $('#view-all-tours').on('click', tourEvents.onViewAllTours)
  $('#view-all-tours').on('click', tourEvents.onViewAllToursBtn)
  $('#view-all-tours-btn').on('click', tourEvents.onViewAllToursBtn)
  // $('.edit-tour').hide()
  // $('#edit-tour-btn').hide()
  // $('#delete-tour').hide()
  // $('#edit-tour-btn').on('click', '.edit-tour', tourEvents.onEditTourBtn)
  $('#display-tours').on('click', '#edit-tour-btn', tourEvents.onEditTourBtn)
  // $('#display-tour').on('click', tourEvents.onEditTourBtn)
  // $('.edit-tour').on('submit', tourEvents.onEditTour)
  // $('#display-tours').on('click', '.edit-tour', tourEvents.onEditTour)
  // $('#edit-tour-btn').on('click', tourEvents.onEditTour)
  // $('#edit-tour-btn').on('click', '.edit-tour', tourEvents.onEditTour)
  // $('#edit-tour-btn').show('click', '.edit-tour')
  // $('#display-tours').on('click', '#edit-tour-btn', tourEvents.onEditTour)
  $('#display-tours').on('submit', '.edit-tour', tourEvents.onEditTour)
  // $('#delete-tour').hide()
  // $('#delete-tour').on('submit', tourEvents.onDeleteTour)
  $('#display-tours').on('click', '#delete-tour', tourEvents.onDeleteTour)
  $('#display-tours').on('click', tourEvents.onViewAllToursSuccess)
  $('#display-tours').on('click', tourEvents.onDeleteTourSuccess)
  $('#change-pw-btn').on('click', tourEvents.onChangePwBtn)
  $('.book-tour-btn').on('click', tourEvents.onMyReservations)
  $('#my-reservations').hide()
  $('#my-reservations').on('submit', tourEvents.onMyReservations)
  $('#my-reservations-btn').on('click', tourEvents.onMyReservationsBtn)

})
