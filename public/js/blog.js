const commentForm = document.getElementById('comment-form');
const commentTextArea = document.querySelector('.comment-details');
const addComments = document.querySelector('.addComments');

function addComment(e) {
  e.preventDefault();
  addComments.innerHTML = commentTextArea.value;
}
commentForm.addEventListener('submit', addComment);
