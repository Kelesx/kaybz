document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById('posts-container');
    
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postCard = document.createElement('div');
                postCard.className = 'post-card';
                postCard.innerHTML = `<h2><a href="${post.link}">${post.title}</a></h2>`;
                postsContainer.appendChild(postCard);
            });
        })
        .catch(error => {
            console.error("Error loading posts:", error);
        });
});
