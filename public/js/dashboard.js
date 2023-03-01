const newPost = document.querySelector('.js-new-post-btn');

const newPostHandler = async (e) => {
  e.preventDefault();
  const postTitle = document.querySelector('#post-title').value.trim();
  const postContent = document.querySelector('#post-constent').value.trim();

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
newPost.addEventListener('click', newPostHandler);
