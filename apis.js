/*

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); 
    })
    .then(data => {
        console.log("Post fetched:", data);
    })
    .catch(error => {
        console.error("Error fetching post:", error);
    });

*/



const fetchPost = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        console.log("Post fetched:", data);
    } catch (error) {
        console.error("Error fetching post:", error);
    }
};

fetchPost();
