console.log("Let's learn about The Fetch API");

// Getting content from the index.html file with DOM
let textContent = document.getElementById("textContent");

const getData = () => {
  url = "me.txt";
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      // console.log(data);
      document.getElementById("card").innerHTML = "";
      document.getElementById("card2").innerHTML = "";
      document.getElementById("textContent").innerHTML = data;
    });
};


// ----------------------------------------------------------------------------
// Getting textButton from the index.html file with DOM
// Add event listner to the button
let textButton = document
  .getElementById("textButton")
  .addEventListener("click", getData);

// getJson method for getting the local json data
const getJson = () => {
  url = "posts.json";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      let output = ``;
      posts.forEach((post) => {
        output += `<hr>
        <h3 style="text-align: left; margin-left: 0.875rem;" class="card-title">${post.name}</h3>
        <p style="text-align: center; class="card-text">${post.content}</p>
      </div>
     `;
        document.getElementById("textContent").innerHTML = "";
        document.getElementById("card2").innerHTML = "";
        document.getElementById("card").innerHTML = output;

      });

    });
};

// Getting localJsonButton from the index.html file with DOM
// Add event listner to the button
let localJsonButton = document
  .getElementById("localJsonButton")
  .addEventListener("click", getJson);


// ---------------------------------------------------------------------------------------------------

const getGithubUsers = () => {
  url = "https://api.github.com/users";
  fetch(url).then((response) => {
    return response.json();
  }).then((users) => {
    let output = ``;
    users.forEach((user) => {
      output += `<hr>
      <h6 style="text-align: left; margin-left: 1.25rem;" class="card-title">${user.login}</h3>
      <p style="text-align: center;" class="card-text"><a href="${user.html_url}" target="_blank">Visit Profile<a/></p>
    </div>
   `;
      document.getElementById("textContent").innerHTML = "";
      document.getElementById("card").innerHTML = "";
      document.getElementById("card2").innerHTML = output;
    });

  })
}


// Getting gitHubUsersButton from the index.html file with DOM
// Add event listner to the button
let gitHubUsersButton = document
  .getElementById("gitHubUsersButton")
  .addEventListener("click", getGithubUsers);
