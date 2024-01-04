import React, { useState ,useEffect} from 'react';
import cozy from './cozy.png';
import kabyle from './kabyle.png';
import beach from './beach.png';
import tipaza from './tipaza.png';
import natue from './nature.png';
import restaurant from './restaurant.png';
import like from './like.png';


const Posts = () => {
 const [showMore, setShowMore] = useState(false);

 const [posts, setPosts] = useState([]);

 useEffect(() => {
   // Fetch data from the backend API
   const fetchPosts = async () => {
     try {
       const response = await fetch("http://localhost:4000/posts");
       const data = await response.json();
       setPosts(data);
     } catch (error) {
       console.error('Error fetching posts:', error);
     }
   };

   fetchPosts();
 }, []);

 const visiblePosts = showMore ? posts : posts.slice(0, 6);

 const handleShowMore = () => {
  setShowMore(true);
 };

 

 return (
  <div className="posts-container" style={{ backgroundColor: 'white' }}>
   

   <div
    className="squaret"
    style={{ backgroundColor: '#F1F8FF', width: '100%', height: '160px', display: 'flex',marginTop:'4rem', marginBottom:'5rem' }}
   >
    <div style={{ marginLeft: '8rem', paddingTop: '22px' }}>
     <div style={{ borderBottom: '1px solid black', width: '310px', marginBottom: '16px' }}></div>
     <h1 style={{ color: 'black', textAlign: 'left', fontWeight: 'normal', marginBottom: '15px' }}>
      Get to Know Algeria
     </h1>
     <p style={{ color: 'green', textAlign: 'left', fontWeight: 'bold' }}>Explore All posts</p>
    </div>
    <p style={{ marginLeft: '7rem', marginTop: '0.65rem' }}>
     Here are a few things to help you get acquainted with this unique African country.
    </p>
   </div>

   <div
    style={{
     marginTop: '-5rem',
     display: 'flex',
     justifyContent: 'center',
     flexWrap: 'wrap',
     paddingTop: '0.25rem',
     paddingRight: '11rem',
     paddingLeft: '10rem',
    }}
   >
    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '2rem' }}>
     {visiblePosts.map((post, index) => (
      <div
       key={index}
       className="post-card"
       style={{
        width: '300px',
        margin: '1rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '30%',
        padding: '0px',
       }}
      >
       <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px 8px 0 0', height: '200px' }}>
        <img src={post.photos[1]} alt={post.title} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
       </div>

       <div style={{ padding: '1rem', position: 'relative' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'medium', marginBottom: '0.5rem' }}>{post.title}</h2>
        <p style={{ fontSize: '0.9rem', fontWeight: 'thin', marginBottom: '1rem' }}>{post.content}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
           style={{
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            backgroundColor: '#00BFFF',
            color: '#ffffff',
            fontWeight: 'bold',
            marginRight: '0.5rem',
            border: 'none',
           }}
          >
           {post.user_id.userName}
          </button>
         <span style={{ fontSize: '0.9rem', color: '#777777' }}>Likes: 0</span>
         <img
          src={like}
          alt="like"
          style={{ position: 'absolute', bottom: '0', right: '0', width: '35px', height: '35px' }}
         />
        </div>
       </div>
      </div>
     ))}
    </div>
   </div>

   {!showMore && (
    <button
     onClick={handleShowMore}
     style={{
      margin: '2rem auto',
      display: 'block',
      backgroundColor: 'white',
      color: 'green',
      border: '1px solid green',
      borderRadius: '20px',
      padding: '0.5rem 1rem',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
     }}
    >
     Show More
    </button>
   )}
  </div>
 );
};

export default Posts;
   
 
