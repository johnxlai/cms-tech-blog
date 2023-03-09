// Add new post btn
// const newPostBtn = document.querySelector('.js-new-post-btn');
const editPostForm = document.querySelector('.edit-post-form');
const deleteFormBtn = document.querySelector('.delete-btn');
const editBtn = document.querySelector('.edit-btn');

const date = new Date();

//Show new blog form
// function showForm() {
//   editPostForm.classList.remove('hidden');
// }

//hide new blog form
// function hideForm() {
//   editPostForm.classList.add('hidden');
// }

//Add blog
// const newPostHandler = async (e) => {
//   e.preventDefault();
//   const title = document.querySelector('#post-title').value.trim();
//   const post_content = document.querySelector('#post-content').value;

//   if (title && post_content) {
//     const response = await fetch(`/api/blog`, {
//       method: 'POST',
//       body: JSON.stringify({ title, post_content }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to create blog post');
//     }
//   }
// };

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blog/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

const updateFormHandler = async (event) => {
  event.preventDefault();
  const blogId = document.querySelector('#blog-id').value;
  const title = document.querySelector('#update-post-title').value.trim();
  const post_content = document.querySelector('#update-post-content').value;

  if (title && post_content) {
    const response = await fetch(`/api/blog/update/${blogId}`, {
      method: 'PUT',
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
// newPostBtn.addEventListener('click', showForm);

//Create new post
// editPostForm.addEventListener('submit', editPostHandler);

//Delete existing post
deleteFormBtn.addEventListener('click', delButtonHandler);

editPostForm.addEventListener('submit', updateFormHandler);
