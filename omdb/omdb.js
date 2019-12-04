console.log("js starts here")

fetch('http://www.omdbapi.com/?s=%27america%27&apikey=76a8f774')
    .then(response => response.json())
    .then(function (json) {
        for (let key in json) {
            console.log("before destructuring ",json[key])
            let [Poster, Title, Type, Year, imdbID ] = json[key]
            console.log("after",Poster, Title, Type, Year, imdbID)

            //creating cards
            let div1 = document.createElement('div')
            div1.className = "card"
            let div2 = document.createElement('div')
            div2.className = 'card-body'
            //   let img= document.createElement('img')
            //   img.src="./Batam-Island.jpg"
            let p1 = document.createElement('p')
            p1.className = "card-text"
            p1.textContent = "Title is " + Title

            let p2 = document.createElement('p')
            p2.className = "card-text"
            p2.textContent = "Type is " + Type

            let p3 = document.createElement('p')
            p3.className = "card-text"
            p3.textContent = "Year is " + Year
            let p4 = document.createElement('p')
            p4.className = "card-text"
            p4.textContent = "imdbID is " + imdbID

            div2.appendChild(p1)
            div2.appendChild(p2)
            div2.appendChild(p3)
            div2.appendChild(p4)

            div1.appendChild(div2)







            document.body.appendChild(div1)

        }
    })