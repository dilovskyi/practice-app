export const LANGUAGES = ["ru", "en"];

// Used in CollapseList component
export const PAGE_TYPE = {
  generate: "generate",
  compare: "compare",
  find: "find",
  sort: "sort",
};

//Used for bind Route in App component
export const PAGE_PATH = {
  home: "/",
  generate: "/generate",
  compare: "/compare",
  find: "/find",
  sort: "/sort",
};

// Used to render menu items in AppHeader
export const PAGES = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "generate",
    path: "/generate",
  },
  {
    name: "compare",
    path: "/compare",
  },
  { name: "find", path: "/find" },
  {
    name: "sort",
    path: "/sort",
  },
];
