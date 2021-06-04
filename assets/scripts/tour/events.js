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

const onEditTour = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.tour.id
  api.editTour(id, formData)
    .then(ui.onEditTourSuccess)
    .catch(ui.onError)
}

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

// change password link in navbar displays `change password` form on page
const onChangePwBtn = function (event) {
  $('#change-password').show()
  $('#add-tour').hide()
  $('#display-tours').hide()
  $('#view-edit-delete').hide()
  $('#view-all-tours').hide()
}

// add tour link in navbar displays `add tour` form on page
const onAddTourBtn = function (event) {
  $('#add-tour').show()
  $('#change-password').hide()
  $('#display-tours').hide()
  $('#view-edit-delete').hide()
  $('#view-all-tours').hide()
}

// view all onAddTours link in navbar displays edit and delete forms and view all
// onAddTours button and logged onAddTours
const onViewAllToursBtn = function (event) {
  $('#view-edit-delete').show()
  $('#view-all-tours').show()
  $('#display-tours').show()
  $('#change-password').hide()
  $('#add-tour').hide()
}

module.exports = {
  onAddTour,
  onEditTour,
  onDeleteTour,
  onViewAllTours,
  onChangePwBtn,
  onAddTourBtn,
  onViewAllToursBtn
}
