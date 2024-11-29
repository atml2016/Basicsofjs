/*
console.log("start");
setTimeout( () => console.log("Asynchronous Task"),5000);
console.log("End");

*/

/*
function fetchData(callback){
    setTimeout( () => {
        callback("Data Fetched");
    },7000);
}

fetchData(data => {
    console.log(data);
});

*/

/*
function fetchData(callback){
    setInterval( () => {
        callback("Data Fetched");
    },7000);
}

fetchData(data => {
    console.log(data);
});

*/

const fetchPost = async () => {
  try {
    console.log("Fetching post.....");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const post = await response.json();
    console.log("Post fetch successfully:", posts.slice(0, 3));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

fetchPost();
