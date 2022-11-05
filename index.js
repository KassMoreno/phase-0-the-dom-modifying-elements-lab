const element= document.createElement('div')
document.body.append(element)
const ul= document.createElement('ul')

for (let i; i < 3; i++) {
    const li= document.createElement('li')
    li.innerText= (i + 1).toString()
    ul.append(li)
}

element.append(ul)