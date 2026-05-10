// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "*Co-first authors. †Co-corresponding authors.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "A current version of my CV is available below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "Bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "books-four-reincarnations-poems",
          title: 'Four Reincarnations: Poems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/four_reincarnations/";
            },},{id: "books-genentech-the-beginnings-of-biotech",
          title: 'Genentech: The Beginnings of Biotech',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/genentech/";
            },},{id: "books-mathematica-a-secret-world-of-intuition-and-curiosity",
          title: 'Mathematica: A Secret World of Intuition and Curiosity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mathematica/";
            },},{id: "books-the-drunkard-39-s-walk-how-randomness-rules-our-lives",
          title: 'The Drunkard&amp;#39;s Walk: How Randomness Rules Our Lives',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_drunkards_walk/";
            },},{id: "books-the-man-who-loved-only-numbers",
          title: 'The Man Who Loved Only Numbers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_man_who_loved_only_numbers/";
            },},{id: "books-under-a-white-sky-the-nature-of-the-future",
          title: 'Under a White Sky: The Nature of the Future',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/under_a_white_sky/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%77%33%32%35%37@%63%75%6D%63.%63%6F%6C%75%6D%62%69%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-3441-7953", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kevinwang631", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kevinwang631", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
