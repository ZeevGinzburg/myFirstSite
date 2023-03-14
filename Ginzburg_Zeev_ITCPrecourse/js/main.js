//replace with your user:
const GITHUB_URL = "https://avatars.githubusercontent.com/u/109742174?s=96&v=4";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById('.img');
    const profileName = document.getElementById("profile-name");
    // update the profileImage and profileName with the information retrieved.
    
  });