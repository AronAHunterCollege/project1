// JavaScript Document
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
let container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const playButton = document.getElementById('option-buttons')
const audio = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');


function draw(state) {
  if (state == "Night") {
    fadeAnim('rgb(0, 0, 25)')
    audio.currentTime = 0;
    audio.play();
  }
  if (state == "Buildings") {
    dissolveAnim("rgb(59,59,59)")
    audio.currentTime = 0;
    audio.play();
  }
  if (state == "Mountains") {
    dissolveAnim("rgb(110, 38, 14)")
    audio.currentTime = 0;
    audio.play();
  }
  if (state == "Moon") {
    wipeAnim("rgb(147, 204, 214)")
    audio.currentTime = 0;
    audio.play();
  }
  if (state == "Stars") {
    wipeAnim("rgb(255,238,201)")
    audio.currentTime = 0;
    audio.play();
  }
  if (state == "Tree") {
    vertAnim("rgb(2, 48, 32)")
    audio.currentTime = 0;
    audio.play();
  }
  if (state == "Lake") {
    vertAnim("rgb(43, 101, 236)")
    audio.currentTime = 0;
    audio.play();
  }
  if (state == "Flowers") {
    circleAnim("rgb(255, 87, 51 )")
    audio.currentTime = 0;
    audio.play();
  }
  if (state == "Rocks") {
    circleAnim("rgb(5, 5, 5)")
    audio.currentTime = 0;
    audio.play();
  }
  if (state == "Made") {
    fadeAnim("rgb(255, 255, 255)")
    audio.currentTime = 0;
    audio.play();
  }
  if (state == "Unmade") {
    dissolveAnim("rgb(0, 0, 0)")
    audio2.currentTime = 0;
    audio2.play();
  }
}
// document.addEventListener("DOMContentLoaded", (event) => {
//   gsap.fromTo(document.body, { backgroundColor: 0 }, {backgroundColor : (0, 0, 51)});
//  });


function startGame() {
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  if (option.setState != null) { draw(option.setState) }
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'In an endless sea of stars, you awake. As far as the eye can see, there is but darkness interrupted by pin dots of light. Ahead lies potential, endless potential. By second nature, you reach out and-',
    options: [
      {
        text: 'There is a door here.',
        nextText: 2,
        setState: 'Night'

      },
      {
        text: 'There is not a door here.',
        nextText: 11
      },
    ]
  },
  {
    id: 2,
    text: 'A faint night sky fades into vision, empty and wanting. Intuitively, you know something should be there...',
    options: [
      {
        text: 'It needs its own stars to light the way.',
        nextText: 3,
        setState: 'Stars'

      },
      {
        text: 'It needs a moon to act as a beacon.',
        nextText: 3,
        setState: 'Moon'
      },
    ]
  },
  {
    id: 3,
    text: 'Through the ever-present darkness, a small glow of light envelops the space, waiting for something to catch it.',
    options: [
      {
        text: 'Glassy buildings will reflect the majesty of the light.',
        nextText: 4,
        setState: 'Buildings'

      },
      {
        text: 'Great mountains will hold the light delicately',
        nextText: 4,
        setState: 'Mountains'
      },
    ]
  },
  {
    id: 4,
    text: 'Whatever lies here will need something to take the empty space.',
    options: [
      {
        text: 'A great forest will bathe the land in comfort.',
        nextText: 5,
        setState: 'Tree'

      },
      {
        text: 'A legion of lakes will provide the world eternal flow.',
        nextText: 5,
        setState: 'Lake'
      },
    ]
  },
  {
    id: 5,
    text: 'And peppered between it all, something to catch the attention.',
    options: [
      {
        text: 'Fields of flowers will serve to warm the hearts of all.',
        nextText: 6,
        setState: 'Flowers'

      },
      {
        text: 'Wherever one goes, there will always be a need for rock to create tools.',
        nextText: 6,
        setState: 'Rocks'
      },
    ]
  },
  {
    id: 6,
    text: 'Will the world be made or unmade?',
    options: [
      {
        text: 'Made.',
        nextText: 7,
        setState: 'Made'

      },
      {
        text: 'Unmade.',
        nextText: 11,
        setState: 'Unmade.'
      },
    ]
  },
  {
    id: 7,
    text: 'And so it was Made.',
    options: [
      {
        text: 'Restart.',
        nextText: 1,
        setState: 'Unmade'
      },
    ]
  },

  {
    id: 11,
    text: 'There is nothing left for you here. But... there could be if you wished it.',
    options: [
      {
        text: 'Return.',
        nextText: 1,
        setState: 'Unmade'
      },
    ]
  },


]

startGame()

function fadeAnim(color) {
  gsap.to(document.body, {
    backgroundColor: color,
    duration: 1.5
  })
}

function dissolveAnim(color) {
  const dissolveDiv = document.createElement('div')
  dissolveDiv.className = 'dissolve'
  dissolveDiv.style.backgroundColor = color
  document.body.appendChild(dissolveDiv)
  const timeline = gsap.timeline();
  timeline.to(dissolveDiv, {
    opacity: 1,
    duration: 1,
    onComplete: () => {
      document.body.style.backgroundColor = color
      gsap.to(dissolveDiv, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          document.body.removeChild(dissolveDiv)
        }
      });
    }
  });
}

function wipeAnim(color) {
  const wipeDiv = document.createElement('div')
  wipeDiv.className = 'wipe'
  wipeDiv.style.backgroundColor = color
  document.body.appendChild(wipeDiv)
  const timeline = gsap.timeline()
  document.body.style.backgroundColor = color;
  timeline.to(wipeDiv, {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1,
    onComplete: () => {
      document.body.removeChild(wipeDiv);
    }
  });
}

function circleAnim(color) {
  const circleDiv = document.createElement('div')
  circleDiv.className = 'circle'
  circleDiv.style.backgroundColor = color
  document.body.appendChild(circleDiv)
  const timeline = gsap.timeline()
  timeline.to(circleDiv, {
    width: '200vw',
    height: '200vh',
    duration: 1,
    ease: 'power2.out',
    onComplete: () => {
      document.body.style.backgroundColor = color;
      gsap.to(circleDiv, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          document.body.removeChild(circleDiv);
        }
      })
    }
  });
}


function vertAnim(color) {
  const vertDiv = document.createElement('div')
  vertDiv.className = 'wipe'
  vertDiv.style.backgroundColor = color
  document.body.appendChild(vertDiv)
  const timeline = gsap.timeline()
  document.body.style.backgroundColor = color;
  timeline.to(vertDiv, {
    scaleX: 0,
    transformOrigin: "top center",
    duration: 1,
    onComplete: () => {
      document.body.removeChild(vertDiv);
    }
  });
}

