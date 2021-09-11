'use strict'
// import the functions that make requests to the api
const api = require('./api')
// import the functions that update our webpage's content
const ui = require('./ui')
// import the getFormFields function
const getFormFields = require('../../../lib/get-form-fields')

const store = require('../store')

const onAddTour = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.addTour(formData)
    .then(ui.onAddTourSuccess)
    .catch(ui.onError)
}

// edit tour button
const onEditTourBtn = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const displayUpdateForm = $(`.edit-tour[data-id=${id}]`)
  // $('.delete-tour').hide()
  // $('#edit-tour-btn').hide()
  displayUpdateForm.show()
}

const onEditTour = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const formData = getFormFields(form)
  api.editTour(id, formData)
    .then(ui.onEditTourSuccess)
    .catch(ui.onError)
}

// const onEditTour = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   const id = formData.tour.id
//   api.editTour(id, formData)
//     .then(ui.onEditTourSuccess)
//     .catch(ui.onError)
// }

// const onDeleteTour = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   const id = formData.tour.id
//   // const id = $(event.target).data('id')
//   api.deleteTour(id)
//     .then(ui.onDeleteTourSuccess)
//     .catch(ui.onError)
// }

const onDeleteTour = function (event) {
  event.preventDefault()
  const id = $(event.target).data("id")
  api.deleteTour(id)
    .then(ui.onDeleteTourSuccess)
    .catch(ui.onError)
}

const onViewAllTours = function () {
  event.preventDefault()
  api.viewAllTours()
    .then(ui.onViewAllToursSuccess)
    .catch(ui.onError)
}

const onMyReservations = function () {
  event.preventDefault()
  api.myReservations()
    .then(ui.onMyReservationsSuccess)
    .catch(ui.onError)
}

// change password link in navbar displays `change password` form on page
const onChangePwBtn = function (event) {
  $('#change-password').show()
  $('#add-tour').hide()
  $('#display-tours').hide()
  $('#view-edit-delete').hide()
  $('#view-all-tours').hide()
  $('#res-message').hide()
}

// add tour link in navbar displays `add tour` form on page
const onAddTourBtn = function (event) {
  $('#add-tour').show()
  $('#change-password').hide()
  $('#display-tours').hide()
  $('#view-edit-delete').hide()
  $('#view-all-tours').hide()
  $('#res-message').hide()
}

// view all onAddTours link in navbar displays edit and delete forms and view all
// onAddTours button and logged onAddTours
const onViewAllToursBtn = function (event) {
  $('#view-edit-delete').show()
  $('#display-tours').show()
  $('#change-password').hide()
  $('#add-tour').hide()
  $('#res-message').hide()
}

// my reservations link in navbar displays reservations on page
const onMyReservationsBtn = function (event) {
  $('#my-reservations').show()
  $('#res-message').show()
  $('#add-tour').hide()
  $('#change-password').hide()
  $('#display-tours').hide()
  $('#view-edit-delete').hide()
}


module.exports = {
  onAddTour,
  onEditTourBtn,
  onEditTour,
  onDeleteTour,
  onViewAllTours,
  onChangePwBtn,
  onAddTourBtn,
  onViewAllToursBtn,
  onMyReservations,
  onMyReservationsBtn
}
