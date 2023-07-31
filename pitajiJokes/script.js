const jokeElement = document.getElementById("joke");

const jokeBtn = document.getElementById("jokeBtn");

const generatejoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  
  //using .then
  //pass headers cause it will give html default when fetch
  //   fetch("https://icanhazdadjoke.com", config)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       jokeElement.innerHTML = data.joke;
  //     });
  // };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeElement.innerHTML = data.joke;
};

generatejoke();

jokeBtn.addEventListener("click", generatejoke);
