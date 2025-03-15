
document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById('posts-container');
    const postList = [
        { title: "Sample Blog Post", link: "posts/post1.html" }
    ];

    postList.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `<h2><a href="${post.link}">${post.title}</a></h2>`;
        postsContainer.appendChild(postCard);
    });
});
