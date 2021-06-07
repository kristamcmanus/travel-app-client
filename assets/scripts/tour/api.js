'use strict'
// this file contains the functions that make requests to the API
// import our apiUrl from the config file
const config = require('../config')
const store = require('../store')

const addTour = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/tours',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const editTour = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: `${config.apiUrl}/tours/${id}`,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteTour = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: `${config.apiUrl}/tours/${id}`,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const viewAllTours = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/tours',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const myReservations = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/my-reservations',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  addTour,
  editTour,
  deleteTour,
  viewAllTours,
  myReservations
}
