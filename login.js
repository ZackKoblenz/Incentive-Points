// Fake Login Function == 
// Final login.js should actually prompt user to authorize 
// Twitch access, track token, and then save changes to user
// specific data

// document.getElementById('loginBtn').onclick = function () {
//     location.href = 'index.html';
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const loginForm = document.querySelector('#loginBtn');

//     document.querySelector('#linkCreateAccount')
// });

// document.getElementById('loginBtn').onclick = function () {
//     location.href = 'https://id.twitch.tv/oauth2/authorize?client_id=9wi5buthub8vb69nho94sn8s2bhewo&redirect_uri=http://localhost:5500/&response_type=code&scope=bits:read%20channel:read:redemptions%20channel:read:subscriptions';
// }
document.getElementById('loginBtn').onclick = function () {
    location.href = 'https://id.twitch.tv/oauth2/authorize?client_id=9wi5buthub8vb69nho94sn8s2bhewo&redirect_uri=https://zackkoblenz.github.io/Incentive-Points/&response_type=code&scope=bits:read%20channel:read:redemptions%20channel:read:subscriptions';
}
