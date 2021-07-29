// ex:02 - posting to a blog site with promises 
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
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false; // check for errors

            if (!error) {
                resolve();
            } else {
                reject('Error: this is the Custom Error I just created');
            }

        }, 2500);
    });
}
/* createPost({ title: 'Post 04', body: 'I have more to add' })
    .then(getPosts)
    .catch(err => console.log(err));  */

// Async / await   -- more elegan way of using promises


/*async function init() {
    await createPost({ title: 'Post 04', body: 'I still have more to add' });

getPosts();
}

init(); */

// Async / Await with Fetch        
async function fetchUsers() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = result.json();

    console.log(data);
}

fetchUsers();
















// Promise.All example (if you have multiple 'Promises' and don't want to have multiple '.then')

/* const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'Goodbye my Friend'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values)); */