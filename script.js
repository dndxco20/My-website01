const postData = [
    { user: "Global Tech", time: "2h", text: "Welcome to the new social UI layout!", likes: 24 },
    { user: "Nature Daily", time: "5h", text: "The mountains are calling...", likes: 156 }
];

const feedContainer = document.getElementById('dynamic-feed');
const postInput = document.getElementById('postInput');

function displayPosts() {
    feedContainer.innerHTML = postData.map(post => `
        <div class="post-card">
            <div style="display:flex; gap:10px; margin-bottom:10px">
                <div class="avatar-sm"></div>
                <div>
                    <div style="font-weight:600">${post.user}</div>
                    <div style="font-size:12px; color:gray">${post.time}</div>
                </div>
            </div>
            <p style="margin-bottom:12px">${post.text}</p>
            <hr style="border:0.2px solid #eee">
            <div class="post-actions">
                <div class="p-action"><i class="fa fa-thumbs-up"></i> Like (${post.likes})</div>
                <div class="p-action"><i class="fa fa-comment"></i> Comment</div>
                <div class="p-action"><i class="fa fa-share"></i> Share</div>
            </div>
        </div>
    `).join('');
}

// Event listener for creating a new post
postInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && postInput.value.trim() !== "") {
        postData.unshift({
            user: "Me",
            time: "Just now",
            text: postInput.value,
            likes: 0
        });
        postInput.value = "";
        displayPosts();
    }
});

// Run on load
displayPosts();