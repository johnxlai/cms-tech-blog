const newPost = document.querySelector('.js-new-post-btn');
//form
const createPostForm = document.querySelector('.create-post-form');

const newPostHandler = async (e) => {
  e.preventDefault();
  const postTitle = document.querySelector('#post-title').value.trim();
  const postContent = document.querySelector('#post-content').value;

  console.log('test');

  if (postTitle && postContent) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ postTitle, postContent }),
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
