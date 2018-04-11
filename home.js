const remote =require('electron').remote
const main  = remote.require('./index.js')

var button = document.createElement('button')
button.textContent ='Open Window Two'
button.addEventListener('click', () => {
    var Window= remote.getCurrentWindow()
    main.openWindow('pageTwo') 
    window.close()
},false)
document.body.appendChild(button)