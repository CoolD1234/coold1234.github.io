document.getElementById('menu-icon').addEventListener('click', function() {
    let nav = document.getElementById('nav-bar');
    if (nav.innerHTML.includes('Home')) {
        nav.innerHTML = `
            <div id="menu-icon">&#9776;</div>
            <img src="placeholder-logo.png" alt="Zonikyo Logo" id="logo">
            <a href="home.html">Home</a>
            <a href="categories.html">Categories</a>
            <a href="upload.html">Upload a Game</a>
            <a href="https://www.authpro.com/authpro:login" class="btn-gradient">Login/Signup</a>
        `;
    } else {
        nav.innerHTML = `
            <div id="menu-icon">&#9776;</div>
            <img src="placeholder-logo.png" alt="Zonikyo Logo" id="logo">
            <a href="https://www.authpro.com/authpro:login" class="btn-gradient">Login/Signup</a>
        `;
    }
});
