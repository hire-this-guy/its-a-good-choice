# Hi there, I hope you have a nice day

## Running the app

- Live version of the app is deployed [here](https://hire-this-guy.netlify.app/).

- Nobody likes autoplay sound so the metronome starts silent. The button in the bottom right corner enables the sound.

- The project was created with Create React App so the usual scripts apply:

  `npm ci` - to install

  `npm run start` - watch and serve

  `npm test` - run the tests

## Choices I made

- Plain css for styling - with css variables I did not need to use a preprocessor, and it allowed me to skip additional dependencies. I'm not a fan of styled components so I did not consider them.

- Because of YAGNI I've skipped normalize/reset and did a mini reset on my own for the handfull of elements the project uses.

- No redux - it would be overkill for such a simple app

- I opted to write tests over fetching additional songs from an API as I think they are more important.

- From the beginning I've recognized the difficulty of a metronome to be keeping sound and visualization in sync, knowing how notoriously inaccurate javascript timers can be. I've opted for css animations that can be offloaded off the main thread and Web Audio API that is also supposed to be using an accurate clock.

- Undoubtedly the most time-consuming piece was the sound. I've played with a couple of libraries but I could not achieve a satisfying result so I've opted for a simple homemade solution.

- The project did not call for a more elaborate folder structure.

- Testids are grouped in one enum common for all the components. Given the size of the project and nature of the tests (being more integration than unit) I can live with this coupling for now.

## What else I would do

- I'd fetch the songs :)

- I'd revisit the sound to make it more pleasant

- I've left a TODO in the code for minor improvement - code is never perfect

## Tested in the browsers

- I've tested the project in Firefox and Chrome, I'm on linux so I had no access to Safari.
