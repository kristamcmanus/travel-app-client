'use strict'

const store = require('../store')

// displays messaging for when tour is successfully added
const onAddTourSuccess = function (response) {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Successfully added Tour!')
  $('#add-tour').trigger('reset')
}

// displays messaging for when a tour is successfully edited/updated
const onEditTourSuccess = function (response) {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Successfully edited tour! Click View All Tours button to view new logged tour.')
  $('#edit-tour').trigger('reset')
  }

// displays messaging for when a tour is successfully deleted
const onDeleteTourSuccess = function () {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Successfully deleted tour! Click View All tours button to view all tours.')
  $('.tour-item').hide()
  $('#delete-tour').trigger('reset')
}

// displays all tours recorded
const onViewAllToursSuccess = function (response) {
  const tours = response.tours
  let toursHtml = ''
  tours.forEach(tour => {
    toursHtml += `
      <div class="tour-item">
        <p>ID: ${tour._id}</p>
        <p>Name: ${tour.name}</p>
        <p>Description: ${tour.description}</p>
        <p>Date: ${tour.date}</p>
      </div>
    `
    $('#display-tours').html(toursHtml)
    // displays messaging for when viewing all tours is successful
    setTimeout(() => {
      $('#messages').text('')
    }, 3000)
    $('#messages').text('Nice! You can now view all your tours.')
  })
}

// displays error message
const onError = function (err) {
  setTimeout(() => {
    $('#messages').text('')
  }, 3000)
  $('#messages').text('Hmm...something went wrong. Please try again!')
}

module.exports = {
  onAddTourSuccess,
  onEditTourSuccess,
  onDeleteTourSuccess,
  onViewAllToursSuccess,
  onError
}
