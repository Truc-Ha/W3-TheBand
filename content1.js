const data = [
    {
        img_url: "https://www.w3schools.com/w3images/la.jpg",
        title: "Los Angeles",
        des: "We had the best time playing at Venice Beach!"
    },
    {
        img_url: "https://www.w3schools.com/w3images/ny.jpg",
        title: "New York",
        des: "The atmosphere in New York is lorem ipsum."
    },
    {
        img_url: "https://www.w3schools.com/w3images/chicago.jpg",
        title: "Chicago",
        des: "Thank you, Chicago - A night we won't forget."
    }
]

var i = 0

setInterval(() => {
    document.getElementById("content1").style.background = `url("${data[i].img_url}") no-repeat center/cover`
    document.getElementsByClassName("content1-title")[0].innerHTML = data[i].title
    document.getElementsByClassName("content1-des")[0].innerHTML = data[i].des
    if (++i === 3) i = 0;  
}, 3000)