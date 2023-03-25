const reaction = document.getElementById('reaction')
const memory = document.getElementById('memory')
const verbal = document.getElementById('verbal')
const visual = document.getElementById('visual')

const arr = [reaction, memory, verbal, visual]

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            arr[i].textContent = data[i].score
        }
    })
    .catch(error => console.log(error))