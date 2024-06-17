const languages = {
  Fr: [
    {
      abbr: "Fr",
      text: "Français",
    },
    {
      abbr: "En",
      text: "Anglais",
    },
  ],
  En: [
    {
      abbr: "Fr",
      text: "French",
    },
    {
      abbr: "En",
      text: "English",
    },
  ],
};

const init = () => {
  const wrapper = document.querySelector(".wrapper");
  const timeWrapper = document.querySelector(".time-wrapper");
  const images = document.querySelectorAll(".wrapper img");
  const btn = document.querySelectorAll(".settings button");

  const langSelector = document.querySelector("#lang");

  langSelector.innerHTML = "";
  languages[lang].forEach((el) => {
    const opt = document.createElement("option");
    opt.value = el["abbr"];
    opt.innerHTML = el["text"];
    if (lang === el["abbr"]) {
      opt.selected = true;
    }
    langSelector.appendChild(opt);
  });

  updateTime();
  updateLED();
};

let lang = "Fr";

const updateTime = () => {
  const timeWrapper = document.querySelector(".time-wrapper");

  const dateWrapper = document.querySelector(".date-container");

  const hoursWrapper = document.querySelector(".hours-container");
  const minutesWrapper = document.querySelector(".minutes-container");
  const secondsWrapper = document.querySelector(".seconds-container");
  const millisecondsWrapper = document.querySelector(".milliseconds-container");

  const langSelector = document.querySelector("#lang");

  langSelector.addEventListener("change", (e) => {
    lang = e.target.value;

    langSelector.innerHTML = "";
    languages[lang].forEach((el) => {
      const opt = document.createElement("option");
      opt.value = el["abbr"];
      opt.innerHTML = el["text"];
      if (lang === el["abbr"]) {
        opt.selected = true;
      }
      langSelector.appendChild(opt);
    });
  });

  const Days = {
    En: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    Fr: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
  };
  const Months = {
    En: [
      "January",
      "February",
      "March",
      "April",
      "Mai",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    Fr: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
  };

  const LED = {
    0: [1, 1, 1, 1, 1, 1, 0],
    1: [0, 1, 1, 0, 0, 0, 0],
    2: [1, 1, 0, 1, 1, 0, 1],
    3: [1, 1, 1, 1, 0, 0, 1],
    4: [0, 1, 1, 0, 0, 1, 1],
    5: [1, 0, 1, 1, 0, 1, 1],
    6: [1, 0, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 0, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1],
  };

  setInterval(() => {
    const date = new Date();

    const day = date.getDay();
    const today = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();

    let dayCurrency;
    switch (today) {
      case 1 || 21 || 31:
        dayCurrency = "st";
        break;

      case 2 || 22:
        dayCurrency = "nd";
        break;

      case 3 || 23:
        dayCurrency = "rd";
        break;

      case 4:
        dayCurrency = "rth";
        break;

      default:
        dayCurrency = "th";
        break;
    }

    dateWrapper.innerHTML =
      lang == "Fr"
        ? `${Days[lang][day]} ${
            today < 10 ? "0" + today.toString() : today.toString()
          } ${Months[lang][month].toString()} ${year.toString()}`
        : `${Days[lang][day]} ${Months[lang][month].toString()} ${
            today < 10 ? "0" + today.toString() : today.toString()
          }${dayCurrency}, ${year.toString()}`;

    hoursWrapper.innerHTML = `${hours < 10 ? "0" + hours : hours}`;
    minutesWrapper.innerHTML = `${minutes < 10 ? "0" + minutes : minutes}`;
    secondsWrapper.innerHTML = `${seconds < 10 ? "0" + seconds : seconds}`;
    millisecondsWrapper.innerHTML = `${
      milliseconds < 100 ? "0" + milliseconds : milliseconds
    }`;
  }, 1);
};

// TODO: Set led for each number
// Customize milliseconds width and height
const updateLED = () => {
  const timeWrapper = document.querySelector(".time-wrapper:nth-child(2)");

  const dateWrapper = document.querySelector(".date-container");

  const hoursWrapper = document.querySelectorAll(
    ".time-wrapper .hours-container"
  );
  const minutesWrapper = document.querySelectorAll(
    ".time-wrapper .minutes-container"
  );
  const secondsWrapper = document.querySelectorAll(
    ".time-wrapper .seconds-container"
  );
  const millisecondsWrapper = document.querySelectorAll(
    ".time-wrapper .milliseconds-container"
  );

  console.log(hoursWrapper[hoursWrapper.length - 1]);
  console.log(minutesWrapper[minutesWrapper.length - 1]);
  console.log(secondsWrapper[secondsWrapper.length - 1]);
  console.log(millisecondsWrapper[millisecondsWrapper.length - 1]);

  const Days = {
    En: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    Fr: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
  };
  const Months = {
    En: [
      "January",
      "February",
      "March",
      "April",
      "Mai",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    Fr: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
  };

  const LED = {
    0: [1, 1, 1, 1, 1, 1, 0],
    1: [0, 1, 1, 0, 0, 0, 0],
    2: [1, 1, 0, 1, 1, 0, 1],
    3: [1, 1, 1, 1, 0, 0, 1],
    4: [0, 1, 1, 0, 0, 1, 1],
    5: [1, 0, 1, 1, 0, 1, 1],
    6: [1, 0, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 0, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1],
  };

  setInterval(() => {
    const date = new Date();

    const day = date.getDay();
    const today = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();

    let dayCurrency;
    switch (today) {
      case 1 || 21 || 31:
        dayCurrency = "st";
        break;

      case 2 || 22:
        dayCurrency = "nd";
        break;

      case 3 || 23:
        dayCurrency = "rd";
        break;

      case 4:
        dayCurrency = "rth";
        break;

      default:
        dayCurrency = "th";
        break;
    }

    dateWrapper.innerHTML =
      lang == "Fr"
        ? `${Days[lang][day]} ${
            today < 10 ? "0" + today.toString() : today.toString()
          } ${Months[lang][month].toString()} ${year.toString()}`
        : `${Days[lang][day]} ${Months[lang][month].toString()} ${
            today < 10 ? "0" + today.toString() : today.toString()
          }${dayCurrency}, ${year.toString()}`;

    hoursWrapper.innerHTML = `${hours < 10 ? "0" + hours : hours}`;
    minutesWrapper.innerHTML = `${minutes < 10 ? "0" + minutes : minutes}`;
    secondsWrapper.innerHTML = `${seconds < 10 ? "0" + seconds : seconds}`;
    millisecondsWrapper.innerHTML = `${
      milliseconds < 100 ? "0" + milliseconds : milliseconds
    }`;
  }, 1);
};
