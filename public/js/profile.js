const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#trainer-name').value.trim();
  const description = document.querySelector('#trainer-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create trainer');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete trainer');
    }
  }
};

document
  .querySelector('.new-trainer-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.trainer-list')
  .addEventListener('click', delButtonHandler);