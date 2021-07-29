// ex:01 - posting to a blog site 
const posts = [
    { title: 'post 01', body: 'Hello World Post!' },
    { title: 'post 02', body: 'Ahoy Matey!' },
    { title: 'post 03', body: 'Mr Watson, come here, I want to see you.' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1500); //setTimeout to replicate lag from communicating with server in this example
}

/* function createPost(post) {
    setTimeout(() => {
        post.push(post);
    }, 3500); 
  // in this example Post 04 does not get added to the DOM because the initial Function
  // finished executing before the createPost() function executes... 
  // this is why async programming is so IMPORTANT   
} */


// with a 'callback' you create an Async function
// in this example the creation of the post waits
// until it is called after the other function had completed  
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 2500);
}

;
createPost({ title: 'Post 04', body: 'I have something to add' }, getPosts);