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
          <img src="${tour.image}" class="card-img-top" alt="${tour.name}">
           <div class="card-body">
             <h5 class="card-title">Name: ${tour.name}</h5>
             <p class="card-text">Description: ${tour.description}</p>
             <p>Date: ${tour.date}</p>
             <p>ID: ${tour._id}</p>
             <button class="edit-tour btn-primary" id="edit-tour-btn" data-id=${tour._id}>Edit</button>
             <button class="delete-tour btn-primary" id="delete-tour" data-id=${tour._id}>Delete</button>
             <button class="book-tour btn-primary">Book</button>
             <form class="edit-tour" id="edit-tour" data-id=${tour._id}>
                <input name="tour[name]" type="text" placeholder="${tour.name}">
                <input name="tour[description]" type="text" placeholder="${tour.description}">
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
    // displays messaging for when viewing all tours is successful
    setTimeout(() => {
      $('#messages').text('')
    }, 3000)
    $('#messages').text('Nice! You can now view all your tours.')
  })
}

// <button class="delete-tour btn" id="delete-tour" data-id=${tour._id}>Delete</button>
// displays all tours recorded
// const onViewAllToursSuccess = function (response) {
//   const tours = response.tours
//   let toursHtml = ''
//   tours.forEach(tour => {
//     toursHtml += `
//       <div class="card">
//         <p>ID: ${tour._id}</p>
//         <p>Name: ${tour.name}</p>
//         <p>Description: ${tour.description}</p>
//         <p>Date: ${tour.date}</p>
//       </div>
//     `
//     $('#display-tours').html(toursHtml)
//     // displays messaging for when viewing all tours is successful
//     setTimeout(() => {
//       $('#messages').text('')
//     }, 3000)
//     $('#messages').text('Nice! You can now view all your tours.')
//   })
// }

// <div class="row row-cols-1 row-cols-md-3 g-4 card-container">
//   <div class="col">
//     <div class="card h-100">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//   </div>
// </div>

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
