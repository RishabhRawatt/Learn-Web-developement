const projects = document.querySelector(".projects");
const preview = document.querySelector(".preview");
const previewImg = document.querySelector(".preview-img");
const pID = document.getElementById("pId");

const projectsContainer = document.querySelector(".projects");
// import { projectMapping } from "./projectMap.mjs";

const projectMapping = {
  p1: "expandcards",
  p2: "progresssteps",
  p3: "rotatenavigation",
  p4: "hiddensearchbar",
  p5: "blurloading",
  p6: "scrollanimation",
  p7: "splitLandingPage",
  p8: "formWaveAnimation",
  p9: "soundBoard",
  p10: "pitajiJokes",
  p11: "eventKeyCodes",
  p12: "faqCollapse",
  p13: "randomChoicePicker",
  p14: "animatedNavigation",
  p15: "incrementCounter",
  p16: "jalLijiye",
  p17: "movieApp",
  p18: "backgroundSlider",
  p19: "themeClock",
  p20: "buttonRipple",
  p21: "dragDrop",
  p22: "drawingBoard",
  p23: "kineticCssLoader",
  p24: "contentPlaceholder",
  p25: "stickyNavbar",
  p26: "doubleVerticalSlider",
  p27: "toastNotification",
  p28: "githubProfiles",
  p29: "doubleHeartClick",
  p30: "autoTextEffect",
  p31: "passwordGenerator",
  p32: "toggleCheckbox",
  p33: "notesApp",
  p34: "animatedCountdown",
  p35: "imageCarousel",
  p36: "hoverBoard",
  p37: "pokedex",
  p38: "mobileTabNav",
  p39: "passwordStrengthBg",
};

let isInside = false;

document.addEventListener("DOMContentLoaded", function () {
  // Array of project data
  const projectsData = [
    {
      id: "p1",
      number: "1",
      name: "Expanding Cards",
      keywords: "keywords",
    },
    {
      id: "p2",
      number: "2",
      name: "Progress Steps",
      keywords: "keywords",
    },
    {
      id: "p3",
      number: "3",
      name: "Rotating Navigation",
      keywords: "keywords",
    },
    {
      id: "p4",
      number: "4",
      name: "Hidden Search Widget",
      keywords: "keywords",
    },
    {
      id: "p5",
      number: "5",
      name: "Blurry Loading",
      keywords: "keywords",
    },
    {
      id: "p6",
      number: "6",
      name: "Scroll Animation",
      keywords: "keywords",
    },
    {
      id: "p7",
      number: "7",
      name: "Split Landing Page",
      keywords: "keywords",
    },
    {
      id: "p8",
      number: "8",
      name: "Form Wave Animation",
      keywords: "keywords",
    },
    {
      id: "p9",
      number: "9",
      name: "Sound Board",
      keywords: "keywords",
    },
    {
      id: "p10",
      number: "10",
      name: "Dad Jokes",
      keywords: "keywords",
    },
    {
      id: "p11",
      number: "11",
      name: "Event KeyCodes",
      keywords: "keywords",
    },
    {
      id: "p12",
      number: "12",
      name: "FAQ Collapse",
      keywords: "keywords",
    },
    {
      id: "p13",
      number: "13",
      name: "Random Choice Picker",
      keywords: "keywords",
    },
    {
      id: "p14",
      number: "14",
      name: "Animated Navigation",
      keywords: "keywords",
    },
    {
      id: "p15",
      number: "15",
      name: "Incrementing Counter",
      keywords: "keywords",
    },
    {
      id: "p16",
      number: "16",
      name: "Drink Water",
      keywords: "keywords",
    },
    {
      id: "p17",
      number: "17",
      name: "Movie App",
      keywords: "keywords",
    },
    {
      id: "p18",
      number: "18",
      name: "Background Slider",
      keywords: "keywords",
    },
    {
      id: "p19",
      number: "19",
      name: "Theme Clock",
      keywords: "keywords",
    },
    {
      id: "p20",
      number: "20",
      name: "Button Ripple Effect",
      keywords: "keywords",
    },
    {
      id: "p21",
      number: "21",
      name: "Drag & Drop",
      keywords: "keywords",
    },
    {
      id: "p22",
      number: "22",
      name: "Drawing App",
      keywords: "keywords",
    },
    {
      id: "p23",
      number: "23",
      name: "Kinetic Css Loader",
      keywords: "keywords",
    },
    {
      id: "p24",
      number: "24",
      name: "Content Placeholder",
      keywords: "keywords",
    },
    {
      id: "p25",
      number: "25",
      name: "Sticky Navbar",
      keywords: "keywords",
    },
    {
      id: "p26",
      number: "26",
      name: "Double Vertical Slider",
      keywords: "keywords",
    },
    {
      id: "p27",
      number: "27",
      name: "Toast Notification",
      keywords: "keywords",
    },
    {
      id: "p28",
      number: "28",
      name: "Github Profiles",
      keywords: "Axios, github Api",
    },
    {
      id: "p29",
      number: "29",
      name: "Double Click Heart",
      keywords: " Custom Events",
    },
    {
      id: "p30",
      number: "30",
      name: "Auto Text Effect",
      keywords: " setimeout",
    },
    {
      id: "p31",
      number: "31",
      name: "Password Generator",
      keywords: "Random, ASCII",
    },
    {
      id: "p32",
      number: "32",
      name: "Toggle Checkboxes",
      keywords: "checkbox ,Animation",
    },
    {
      id: "p33",
      number: "33",
      name: "Notes App",
      keywords: "LocalStorage , Markdown",
    },
    {
      id: "p34",
      number: "34",
      name: "Animated Countdown",
      keywords: "Animation , CSS",
    },
    {
      id: "p35",
      number: "35",
      name: "Image Carousel",
      keywords: "set-timeout , event listner",
    },
    {
      id: "p36",
      number: "36",
      name: "Hover Board",
      keywords: "mouseover , random",
    },
    {
      id: "p37",
      number: "37",
      name: "Poke Dex",
      keywords: "Api , JSON",
    },
    {
      id: "p38",
      number: "38",
      name: "Mobile Tab Nav",
      keywords: "UI , navigation",
    },
    {
      id: "p39",
      number: "39",
      name: "Password Strength Blur",
      keywords: "Event , CSS",
    },
  ];

  // Loop through the projectsData and generate HTML for each project
  projectsData.forEach((project) => {
    const projectHTML = `
      <div class="project" id="${project.id}">
        <div class="name">
          <p>${project.number}</p>
        </div>
        <div class="name">
          <p>${project.name}</p>
        </div>
        <div class="keywords">
          <p>${project.keywords}</p>
        </div>
      </div>
    `;

    // Append the generated HTML to the projects container
    projectsContainer.insertAdjacentHTML("beforeend", projectHTML);
  });
});

const bgPositions = {
  p1: "0 25%",
  p2: "0 50%",
  p3: "0 75%",
  p4: "0 100%",
};

const moveStuff = (e) => {
  const mouseInside = isMouseInsideContainer(e);

  if (mouseInside !== isInside) {
    isInside = mouseInside;
    if (isInside) {
      gsap.to(preview, 0.3, {
        scale: 1,
      });
    } else {
      gsap.to(preview, 0.3, {
        scale: 0,
      });
    }
  }
};

const moveProject = (e) => {
  const previewRect = preview.getBoundingClientRect();
  const offsetX = previewRect.width / 2;
  const offsetY = previewRect.height / 2;

  preview.style.left = e.pageX - offsetX + "px";
  preview.style.top = e.pageY - offsetY + "px";
};

// const moveProjectImg = (project) => {
//   const projectId = project.id;
//   const imgUrl = `url('./previewImg/${projectId}.jpg')`;
//   gsap.to(previewImg, 0.0, {
//     backgroundPosition: bgPositions[projectId] || "0 0",
//     backgroundImage: imgUrl,
//   });
// };

let currentImage = null; // Variable to store the current image URL

const moveProjectImg = (project) => {
  const projectId = project.id;
  const imgUrl = `url('./previewImg/${projectId}.png')`;

  // Check if the image is changing
  if (currentImage !== imgUrl) {
    // Fade out the current image
    gsap.to(previewImg, {
      opacity: 0,
      duration: 0.1, // Adjust the duration as needed
      onComplete: () => {
        // Change the background image
        previewImg.style.backgroundImage = imgUrl;

        // Fade in the new image
        gsap.to(previewImg, {
          opacity: 1,
          duration: 0.1, // Adjust the duration as needed
        });

        // Update the current image variable
        currentImage = imgUrl;
      },
    });
  } else {
    // If the image is not changing, update background position without fade
    gsap.to(previewImg, {
      backgroundPosition: bgPositions[projectId] || "0 0",
      duration: 0.5, // No need for a delay here
    });
  }
};

const isMouseInsideContainer = (e) => {
  const containerRect = projects.getBoundingClientRect();

  return (
    e.pageX >= containerRect.left &&
    e.pageX <= containerRect.right &&
    e.pageY >= containerRect.top &&
    e.pageY <= containerRect.bottom
  );
};

// const projectMapping = {

// };

const redirectToProjectPage = (projectId) => {
  // Get the folder name from the JSON mapping
  const folderName = projectMapping[projectId];

  if (folderName) {
    // Construct the URL based on the folder name

    const projectUrl = `./${folderName}/index.html`; // Adjust the path as needed

    // Redirect to the project page
    window.location.href = projectUrl;
  } else {
    console.error(`Folder mapping not found for project ID: ${projectId}`);
  }
};

window.addEventListener("mousemove", moveStuff);

Array.from(projects.children).forEach((project) => {
  // project.addEventListener("mousemove", moveProject);
  // project.addEventListener("mousemove", moveProjectImg.bind(null, project));
  // project.addEventListener(
  //   "click",
  //   redirectToProjectPage.bind(null, project.id)
  // );

  projectsContainer.addEventListener("mousemove", function (e) {
    const project = e.target.closest(".project");
    if (project) {
      moveProject(e);
      moveProjectImg(project);
    }
  });

  projectsContainer.addEventListener("click", function (e) {
    const project = e.target.closest(".project");
    if (project) {
      redirectToProjectPage(project.id);
    }
  });
});
