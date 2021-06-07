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
    <div class="card-container">
       <div class="col">
         <div class="card h-100">
           <div class="card-body">
            <img src="${tour.image}" class="card-img-top" alt="${tour.name}">
             <h5 class="card-title">${tour.city}</h5>
             <p class="card-text">${tour.description}</p>
             <p>Date: ${tour.date}</p>
             <p>Host: ${tour.host}</p>
             <button class="btn-primary" id="edit-tour-btn" data-id=${tour._id}>Edit</button>
             <button class="delete-tour btn-primary" id="delete-tour" data-id=${tour._id}>Delete</button>
             <button class="book-tour-btn btn-primary">Book</button>
             <form class="edit-tour" data-id=${tour._id}>
                <input name="tour[city]" type="text" placeholder="${tour.city}">
                <input name="tour[description]" type="text" placeholder="${tour.description}">
                <input name="tour[host]" type="text" placeholder="${tour.host}">
                <input name="tour[date]" type="text" placeholder="${tour.date}">
                <input name="tour[image]" type="url" class="tourImageUrl" placeholder=${tour.image}>
                <button type="submit" value="Update Tour">Update</button>
              </form>
           </div>
         </div>
       </div>
    </div>
    `
    $('#display-tours').html(toursHtml)
    $('.edit-tour').hide()

    // displays messaging for when viewing all tours is successful
    setTimeout(() => {
      $('#messages').text('')
      }, 3000)
      $('#messages').text('Nice! You can now view all your tours.')
      $('form').trigger('reset')
  })
}

// displays booked reservations
const onMyReservationsSuccess = function (response) {
  const tours = response.tours
  let toursHtml = ''
  tours.forEach(tour => {
    toursHtml += `
    <div class="card-container">
       <div class="col">
         <div class="card h-100">
           <div class="card-body">
            <img src="${tour.image}" class="card-img-top" alt="${tour.name}">
             <h5 class="card-title">${tour.city}</h5>
             <p class="card-text">${tour.description}</p>
             <input name="tour[host]" type="text" placeholder="${tour.host}">
             <p>Date: ${tour.date}</p>
             <button class="delete-tour btn-primary" id="delete-tour" data-id=${tour._id}>Delete</button>
             <button class="book-tour btn-primary">Book</button>
           </div>
         </div>
       </div>
    </div>
    `
    $('#my-reservations').html(toursHtml)
    $('#display-tours').hide()
    // displays messaging for when viewing all tours is successful
    setTimeout(() => {
      $('#messages').text('')
      }, 3000)
      $('#messages').text('Nice! You can now view all your reservations.')
      $('form').trigger('reset')
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
  onMyReservationsSuccess,
  onError
}
