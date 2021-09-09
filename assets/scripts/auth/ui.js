'use strict'

const store = require('../store')

const onSignUpSuccess = function () {
  $('#messages').text('Thanks for signing up!')
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#sign-up').trigger('reset')
  $('.navbar').hide()
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#messages').text('Successfully signed in!')
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#sign-out').show()
  $('.navbar').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-in').trigger('reset')
  $('#edit-tour').show()
  $('#delete-tour').show()
  $('#view-all-tours').show()
  $('#display-tours').show()
  $('#view-edit-delete').show()
  $('#my-reservations').show()
  $('#bg-img').hide()
}

const onChangePasswordSuccess = function () {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Password changed successfully!')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Signed out successfully!')
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#add-tour').hide()
  $('#edit-tour').hide()
  $('#delete-tour').hide()
  $('#view-all-tours').hide()
  $('#view-edit-delete').hide()
  $('#display-tours').hide()
  $('#display-tours').empty()
  $('.navbar').hide()
  $('#my-reservations').hide()
  $('#bg-img').show()
  store.user = null
}

// displays error message
const onError = function (err) {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Hmm...something went wrong. Please try again!')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onError
}
