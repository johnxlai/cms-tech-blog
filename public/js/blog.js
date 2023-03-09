const commentForm = document.getElementById('comment-form');
const commentTextArea = document.querySelector('.comment-details');

function addComment(e) {
  e.preventDefault();

  console.log(commentTextArea.value);
}
commentForm.addEventListener('submit', addComment);
