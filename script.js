const tl = gsap.timeline({ delay: 1 });

const inputContainer = document.querySelector('.input-container');

inputContainer.addEventListener('swiped-right', async (e) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await res.json();
    console.log(data);
    tl.to('.input-container > img', {
      left: '100%',
      x: '-110%',
      duration: 1
    });

    tl.to(
      '.input-container > input',
      {
        opacity: 0
      },
      '-=0.5'
    );

    tl.to('.input-container', {
      width: 75,
      right: '50%',
      x: '50%'
    });

    tl.to('.input-container', {
      duration: 1.5,
      rotate: 360,
      ease: Power2.out
    });

    tl.to('.input-container', {
      duration: 1.5,
      top: '20px'
    });

    tl.to(
      '.store-images',
      {
        duration: 0.5,
        opacity: 0
      },
      '-=1.3'
    );

    tl.to(
      '.swipe-to-verify',
      {
        duration: 0.5,
        opacity: 0
      },
      '-=1.3'
    );

    tl.to(
      '.title',
      {
        duration: 0.5,
        opacity: 1
      },
      '+=.2'
    );

    tl.to('.tested-by', {
      duration: 0.5,
      opacity: 1
    });
  } catch (error) {
    console.log(error);
  }
});
