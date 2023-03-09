// Add new post btn
const newPostBtn = document.querySelector('.js-new-post-btn');
const createPostForm = document.querySelector('.create-post-form');

//Show new blog form
function showForm() {
  createPostForm.classList.remove('hidden');
}

//hide new blog form
function hideForm() {
  createPostForm.classList.add('hidden');
}

//Add blog
const newPostHandler = async (e) => {
  e.preventDefault();
  const title = document.querySelector('#post-title').value.trim();
  const post_content = document.querySelector('#post-content').value;

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

//Show form for creation
newPostBtn.addEventListener('click', showForm);

//Create new post
createPostForm.addEventListener('submit', newPostHandler);
