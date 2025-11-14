// Slider
let sliderEl = document.querySelector("#slider")
let count = 0
let intervalId

let moveSlider = () => {
  count++
  if (count > 2) {
    count = 0
  }
  sliderEl.style.cssText = `
    transform: translateX(-${count * 100}%);
  `
}

let startSlider = () => {
  intervalId = setInterval(moveSlider, 1500)
}

let stopSlider = () => {
  clearInterval(intervalId)
}

sliderEl.addEventListener('mouseenter', stopSlider)
sliderEl.addEventListener('mouseleave', startSlider)

startSlider()

// Tabs
let tabButtons = document.querySelectorAll("#locationTabs button")
let tabContents = document.querySelectorAll("#tabContainer > div")

// Hide tab content
let hideTabContent = () => {
  tabContents.forEach((country) => {
    country.classList.add("hidden")
  })

  tabButtons.forEach((btn) => {
    btn.classList.remove("bg-lime-500", "text-white")
    btn.classList.add("text-lime-500")
  })
}
hideTabContent()

// Show tab content
let showTabContent = (index) => {
  tabContents[index].classList.remove("hidden")
  tabButtons[index].classList.remove("text-lime-500")
  tabButtons[index].classList.add("bg-lime-500", "text-white")
}
showTabContent(0)

// Button click
tabButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    hideTabContent()
    showTabContent(index)
  })
})