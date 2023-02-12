let toggleMode = () => {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Max.png")
    img.setAttribute("alt", "Max Profile")
  } else {
    img.setAttribute("src", "./assets/jeremyprofile.png")
  }
}

//let button = document.querySelector(".light");
