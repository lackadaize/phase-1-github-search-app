// DOMContentLoaded 
document.addEventListener("DOMContentLoaded", (event) => {
    githubSearch()
})

// Global variables
const githubApiUrl = "https://api.github.com/"

function githubSearch () {
    // Variables
    const githubForm = document.getElementById("github-form")
    const searchInput = document.getElementById("search")
    const usersList = document.getElementById("user-list")
    const reposList = document.getElementById("repos-list")

    function userSearch (e) {
        e.preventDefault();
        usersList.innerHTML = ''
        reposList.innerHTML = ''
        const searchUser = searchInput.value
        githubForm.reset()

        fetch(`${githubApiUrl}search/users?q=${searchUser}` , {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
        .then(response => response.json())
          .then((data) => {
            const users = data.items
            users.forEach((user) => {
              loadUsers(user)
            })
          })
          .catch((error) => {
            console.log(error)
          });

        function loadUsers(user) {
            const userCard = document.createElement('li')
            userCard.setAttribute('class', 'user-card')

            const userAvatar = document.createElement('div')
            userAvatar.setAttribute('class', 'user-avatar')

            const userName = document.createElement('p')
            userName.setAttribute('class', 'user-name')

            const userUrl = document.createElement('div')
            userUrl.setAttribute('class', 'user-url')

            usersList.appendChild(userCard)
            userCard.appendChild(userAvatar)
            userCard.appendChild(userName)
            userCard.appendChild(userUrl)

            userAvatar.innerHTML = `<a href="${user.html_url}" target="_blank"><img src="${user.avatar_url}"/></a>`
            userName.innerHTML = `<a href="${user.html_url}" target="_blank">${user.login}</a>`
            userUrl.innerHTML = `<a href="${user.html_url}" target="_blank">PROFILE</a>`
        }
    }

    // Event Listeners
    githubForm.addEventListener('submit', userSearch)
    // githubForm.addEventListener('submit', repoSearch)
}

/*
Clicking on one of these users should send a request to the User Repos Endpoint and return data about all the repositories for that user.
Using the response from the Users Repos Endpoint, display all the repositories for that user on the page.
*/