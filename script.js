const imageDog = document.getElementById("imageDog");
const fetchData = document.getElementById("fetchData");
const ErrorMessage = document.getElementById("ErrorMessage");

const setDisableAttrsButton = () => {
  fetchData.setAttribute("disabled", true);
  fetchData.innerHTML = "Loading...";
};

const fetchDog = async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    if (data.status !== "success") {
      throw new Error("Something gone wrong");
    }
    imageDog.setAttribute("src", data.message);
  } catch (error) {
    ErrorMessage.innerHTML = "Что-то пошло не так...";
    console.log(error);
  } finally {
    fetchData.removeAttribute("disabled");
    fetchData.innerHTML = "Fetch";
  }
};

setDisableAttrsButton();
fetchDog();

const debounce = (cb, delay) => {
  let run = false;
  return () => {
    if (run) {
      return;
    }
    run = true;
    ErrorMessage.innerHTML = "";
    setDisableAttrsButton();
    setTimeout(() => {
      cb();
      run = false;
    }, delay);
  };
};

const debounceDelay = debounce(fetchDog, 500);

fetchData.addEventListener("click", debounceDelay);
