/*

Ask for the user's name:
Use prompt() to collect the user's name.
If the user provides a name, display a welcome message using alert().
If no name is entered, display an error message in the console and exit.
Ask if they want to continue:
Use confirm() to ask if they want to proceed.
If they confirm, show an alert saying they chose to continue.
If they cancel, show an alert saying they canceled the action.
Log screen details in the console:
Log innerWidth (browser window width).
Log innerHeight (browser window height).
Reload the page after 10 seconds:
Display a message in the console informing the user that the page will reload.
Use setTimeout() with window.location.reload() to refresh the page after 10 seconds.


*/

const username = prompt('What is your username? ')



if (username)  alert(`Welcome: ${username}`)
else {
    throw new Error('No username')
}

const constfirmation = confirm('want to proceed?')

if (constfirmation) alert('you chose to continue bro')
else alert('you chose to cancel')

console.log(screen.height, screen.width)

setTimeout((x) => {
window.location.reload()
},10000)

