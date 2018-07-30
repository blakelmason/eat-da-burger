//add button click
$('.add-button').click(function (event) {
  event.preventDefault();
  if ($('.add-input').val() === '') {
    $('.add-input').attr('placeholder', 'You must name da burger!');
    $('.add-input').addClass('border border-danger');
    console.log('no burger. . .');
  } else {
    var burgerName = $('.add-input').val()
    console.log($('.add-input').val())
    axios.post('/burgers/add', { name: burgerName })
      .then(function (response) {
        location.reload();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
})

//eat button click
$('.eat-button').click(function (event) {
  event.preventDefault();
  axios.put('/burgers/eat/' + $(this).parent().attr('id'))
    .then(function (response) {
      location.reload();
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
})

//digest button click
$('.digest-button').click(function (event) {
  event.preventDefault();
  axios.delete('/burgers/digest/' + $(this).parent().attr('id'))
    .then(function (response) {
      location.reload();
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
})