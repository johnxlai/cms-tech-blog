const commentForm = document.getElementById('comment-form');
const commentTextArea = document.querySelector('.comment-details');
const addComments = document.querySelector('.addComments');

// /comment/:id
async function addComment(e) {
  e.preventDefault();
  let comment = commentTextArea.value;
  const blogId = document.querySelector('#blog-id').textContent;

  if (comment) {
    const response = await fetch(`/api/comment/${blogId}`, {
      method: 'POST',
      body: JSON.stringify({ body: comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/blog/${blogId}`);
    } else {
      alert('Failed to create blog post');
    }
  }
}
commentForm.addEventListener('submit', addComment);
