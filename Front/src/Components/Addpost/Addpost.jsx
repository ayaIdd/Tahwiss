import React, { useState } from 'react';

const Addpost = () => {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 const [content, setContent] = useState('');
 const [photos, setPhotos] = useState([]);

 const handleTitleChange = (e) => {
  setTitle(e.target.value);
 };

 const handleDescriptionChange = (e) => {
  setDescription(e.target.value);
 };

 const handleContentChange = (e) => {
  setContent(e.target.value);
 };

 const handlePhotoUpload = (e) => {
  const uploadedPhotos = Array.from(e.target.files);
  setPhotos(uploadedPhotos);
 };

 const token = "YOUR_JWT_TOKEN"; // Replace this with your actual token

 const handleSubmit = async (e) => {
  e.preventDefault();

  // Create a FormData object to send the files
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  photos.forEach((photo, index) => {
   formData.append(`photos[${index}]`, photo);
  });

  try {
   // Send the POST request to your backend
   const response = await fetch('http://www.localhost:4000/posts/create', {
 method: 'POST',
 body: formData,
 headers: {
   Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
 },
   });

   // Check if the request was successful
   if (response.ok) {
 console.log('Post created successfully');
 // Optionally, you can redirect the user or perform other actions after successful post creation
   } else {
 console.error('Error creating post:', response.statusText);
   }
  } catch (error) {
   console.error('Error creating post:', error.message);
  }
 };

 return (
  <div className="add-post-container">
   <h1>Write your post, User</h1>
   <form onSubmit={handleSubmit} className="add-post-form" style={{ display: 'flex', flexDirection: 'column' }}>
    <div className="form-group" style={{ marginBottom: '20px' }}>
     <label htmlFor="title">Title:</label>
     <br />
     <input type="text" id="title" value={title} onChange={handleTitleChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
    </div>

    <div className="form-group" style={{ marginBottom: '20px' }}>
     <label htmlFor="description">Description:</label>
     <br />
     <input type="text" id="description" value={description} onChange={handleDescriptionChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
    </div>

    <div className="form-group" style={{ marginBottom: '20px' }}>
     <label htmlFor="content">Content:</label>
     <br />
     <textarea id="content" value={content} onChange={handleContentChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
    </div>

    <div className="form-group" style={{ marginBottom: '20px' }}>
     <label htmlFor="photos">Upload Photos:</label>
     <br />
     <input type="file" id="photos" multiple onChange={handlePhotoUpload} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
    </div>

    <button type="submit" className="submitButton" style={{ width: '100px', height: '30px', backgroundColor: 'green', color: 'white', borderRadius: '5px', border: 'none' }}>Submit</button>
   </form>
  </div>
 );
};

export default Addpost;
