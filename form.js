// const reviewsForm = document.querySelector('.reviews-form');
const modalForm = document.querySelector('.modal-form');

function formInfo(event) {
  event.preventDefault();
  console.log('User name:', event.target.elements.user_name.value);
  console.log('User email:', event.target.elements.user_email.value);

  event.target.reset();
}

// reviewsForm.addEventListener('submit', formInfo);
modalForm.addEventListener('submit', formInfo);
