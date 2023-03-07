const newPost = document.querySelector('.js-new-post-btn');
//form
const createPostForm = document.querySelector('.create-post-form');
const date = new Date();

const newPostHandler = async (e) => {
  e.preventDefault();
  const title = document.querySelector('#post-title').value.trim();
  const post_content = document.querySelector('#post-content').value;
  // const post_date = date.toLocaleTimeString();

  if (title && post_content) {
    const response = await fetch(`/api/blog`, {
      method: 'POST',
      body: JSON.stringify({ title, post_content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog post');
    }
  }
};
createPostForm.addEventListener('submit', newPostHandler);

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.delete-btn')
  .addEventListener('click', delButtonHandler);
