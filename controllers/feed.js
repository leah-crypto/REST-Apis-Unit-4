exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: 'First Post', content: 'This is the first post!' }]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content)
  // Create post in db
  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};

//code from codepen I wrote there


// const getButton = document.getElementById('get');
// const postButton = document.getElementById('post');


// getButton.addEventListener('click', () => {
//   fetch('http://localhost8080/feed/posts').then(res => res.json()).then(resData => console.log(resData)).catch(err => {
//     console.log(err)
//   })
// })

// postButton.addEventListener('click', () => {
//   fetch('http://loaclhost:8080/feed/post', () => {
//     method: "POST",
//       body: JSON.stringify({
//         title: 'Leahs Post',
//           content: 'Created by CodePen'
//       })
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(res => res.json()).then(resData => console.log(resData)).catch(err => {
//     console.log(err)
// })

{/* <button id = "get">Get Posts</button>
<button id= "post"> Create a post </button> */}