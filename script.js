// =====================================================
// DUMMY ARTIST DATA
// Structured so it can later be swapped for real API/backend data.
// No real names, photos, or contact details — category-based profiles only.
// =====================================================

const artists = [
  {
    id: 1001,
    category: "Folk Artist",
    location: "Jaipur",
    rating: 4.8,
    eventsCompleted: 42,
    experience: "6+ Years",
    eventTypes: ["Weddings", "Cultural Events", "Corporate Events", "Festivals"],
    languages: ["Hindi", "Rajasthani"],
    skills: ["Folk Music", "Live Performance", "Traditional Instruments"],
    performanceType: "Solo & Group",
    availability: "Weekends & Festivals",
    tags: ["Folk Music", "Cultural Events", "Traditional Performance"],
    description: "Traditional folk performances for cultural celebrations and events."
  },
  {
    id: 1012,
    category: "Singers",
    location: "Delhi",
    rating: 4.9,
    eventsCompleted: 67,
    experience: "8+ Years",
    eventTypes: ["Weddings", "Corporate Events", "Private Parties"],
    languages: ["Hindi", "English", "Punjabi"],
    skills: ["Playback Singing", "Live Vocals", "Bollywood Covers"],
    performanceType: "Solo with Band",
    availability: "Flexible",
    tags: ["Bollywood", "Live Vocals", "Wedding Sangeet"],
    description: "Versatile vocalist bringing energy to weddings and celebrations."
  },
  {
    id: 1023,
    category: "Musicians",
    location: "Mumbai",
    rating: 4.7,
    eventsCompleted: 58,
    experience: "7+ Years",
    eventTypes: ["Corporate Events", "Lounges", "Private Parties"],
    languages: ["English", "Hindi"],
    skills: ["Guitar", "Live Band", "Acoustic Sets"],
    performanceType: "Solo & Band",
    availability: "Weekday Evenings",
    tags: ["Acoustic", "Live Band", "Instrumental"],
    description: "Smooth acoustic and band performances for intimate to large gatherings."
  },
  {
    id: 1034,
    category: "Dancers",
    location: "Mumbai",
    rating: 4.9,
    eventsCompleted: 91,
    experience: "9+ Years",
    eventTypes: ["Weddings", "Sangeet", "Corporate Events"],
    languages: ["Hindi", "English"],
    skills: ["Bollywood", "Contemporary", "Choreographed Sets"],
    performanceType: "Group Performance",
    availability: "Flexible",
    tags: ["Bollywood", "Sangeet", "Group Act"],
    description: "High-energy Bollywood and contemporary dance acts for celebrations."
  },
  {
    id: 1045,
    category: "Choreographers",
    location: "Bangalore",
    rating: 4.6,
    eventsCompleted: 34,
    experience: "5+ Years",
    eventTypes: ["Weddings", "Sangeet", "Corporate Events"],
    languages: ["English", "Kannada", "Hindi"],
    skills: ["Sangeet Choreography", "Group Training", "Concept Design"],
    performanceType: "Choreography & Direction",
    availability: "By Booking",
    tags: ["Sangeet", "Group Training", "Concept Direction"],
    description: "Custom choreography design and training for wedding sangeet performances."
  },
  {
    id: 1056,
    category: "DJs",
    location: "Gurgaon",
    rating: 4.8,
    eventsCompleted: 76,
    experience: "6+ Years",
    eventTypes: ["Weddings", "Private Parties", "Corporate Events"],
    languages: ["English", "Hindi"],
    skills: ["Live Mixing", "Bollywood Sets", "EDM"],
    performanceType: "Solo",
    availability: "Weekends",
    tags: ["Live Mixing", "Party Sets", "Sound Design"],
    description: "High-energy DJ sets tailored to weddings and celebration afterparties."
  },
  {
    id: 1067,
    category: "Comedians",
    location: "Chandigarh",
    rating: 4.7,
    eventsCompleted: 39,
    experience: "5+ Years",
    eventTypes: ["Corporate Events", "Private Parties", "College Fests"],
    languages: ["Hindi", "English", "Punjabi"],
    skills: ["Stand-Up", "Crowd Work", "Custom Sets"],
    performanceType: "Solo",
    availability: "Flexible",
    tags: ["Stand-Up", "Crowd Work", "Corporate-Friendly"],
    description: "Sharp, clean stand-up sets customized for corporate and private audiences."
  },
  {
    id: 1078,
    category: "Hosts",
    location: "Bangalore",
    rating: 4.8,
    eventsCompleted: 84,
    experience: "8+ Years",
    eventTypes: ["Weddings", "Corporate Events", "Award Shows"],
    languages: ["English", "Hindi", "Kannada"],
    skills: ["Stage Anchoring", "Event Flow", "Bilingual Hosting"],
    performanceType: "Solo",
    availability: "Flexible",
    tags: ["Anchoring", "Bilingual", "Event Flow"],
    description: "Polished stage anchoring keeping events engaging and on schedule."
  },
  {
    id: 1089,
    category: "Magicians",
    location: "Pune",
    rating: 4.6,
    eventsCompleted: 28,
    experience: "4+ Years",
    eventTypes: ["Birthday Parties", "Corporate Events", "College Fests"],
    languages: ["Hindi", "English"],
    skills: ["Close-Up Magic", "Stage Illusions", "Crowd Interaction"],
    performanceType: "Solo",
    availability: "Weekends",
    tags: ["Close-Up Magic", "Stage Illusions", "Interactive"],
    description: "Engaging close-up and stage magic for family and corporate audiences."
  },
  {
    id: 1093,
    category: "Makeup Artists",
    location: "Lucknow",
    rating: 4.9,
    eventsCompleted: 103,
    experience: "10+ Years",
    eventTypes: ["Weddings", "Photoshoots", "Fashion Shows"],
    languages: ["Hindi", "English", "Urdu"],
    skills: ["Bridal Makeup", "HD Makeup", "Airbrush"],
    performanceType: "One-on-One Service",
    availability: "By Booking",
    tags: ["Bridal", "HD Makeup", "Airbrush"],
    description: "Bridal and event makeup with a decade of styling experience."
  },
  {
    id: 1102,
    category: "Performers",
    location: "Ahmedabad",
    rating: 4.5,
    eventsCompleted: 22,
    experience: "3+ Years",
    eventTypes: ["Corporate Events", "College Fests", "Private Parties"],
    languages: ["Gujarati", "Hindi", "English"],
    skills: ["Fire Performance", "Aerial Act", "Stage Presence"],
    performanceType: "Solo & Group",
    availability: "By Booking",
    tags: ["Fire Act", "Aerial", "Stage Performance"],
    description: "Bold visual performances blending fire and aerial elements."
  },
  {
    id: 1114,
    category: "Sketchists",
    location: "Hyderabad",
    rating: 4.6,
    eventsCompleted: 31,
    experience: "4+ Years",
    eventTypes: ["Weddings", "Corporate Events", "Exhibitions"],
    languages: ["Telugu", "Hindi", "English"],
    skills: ["Live Portraits", "Caricature", "Digital Sketching"],
    performanceType: "Live Interactive",
    availability: "Flexible",
    tags: ["Live Portraits", "Caricature", "Interactive"],
    description: "Live sketch portraits that double as memorable event keepsakes."
  },
  {
    id: 1125,
    category: "Singers",
    location: "Pune",
    rating: 4.7,
    eventsCompleted: 49,
    experience: "6+ Years",
    eventTypes: ["Weddings", "Private Parties", "Corporate Events"],
    languages: ["Marathi", "Hindi", "English"],
    skills: ["Semi-Classical", "Live Vocals", "Fusion"],
    performanceType: "Solo with Band",
    availability: "Weekends",
    tags: ["Semi-Classical", "Fusion", "Live Vocals"],
    description: "Fusion vocal performances blending classical roots with modern sound."
  },
  {
    id: 1136,
    category: "Dancers",
    location: "Chandigarh",
    rating: 4.8,
    eventsCompleted: 63,
    experience: "7+ Years",
    eventTypes: ["Weddings", "Sangeet", "Festivals"],
    languages: ["Punjabi", "Hindi"],
    skills: ["Bhangra", "Giddha", "Group Choreography"],
    performanceType: "Group Performance",
    availability: "Flexible",
    tags: ["Bhangra", "Folk Dance", "Group Act"],
    description: "Vibrant Bhangra and folk dance performances full of energy."
  },
  {
    id: 1147,
    category: "Folk Artist",
    location: "Lucknow",
    rating: 4.5,
    eventsCompleted: 26,
    experience: "4+ Years",
    eventTypes: ["Cultural Events", "Festivals", "Weddings"],
    languages: ["Hindi", "Awadhi"],
    skills: ["Kathak-Inspired Folk", "Storytelling", "Live Music"],
    performanceType: "Solo & Group",
    availability: "By Booking",
    tags: ["Storytelling", "Cultural Events", "Traditional"],
    description: "Narrative folk performances rooted in regional storytelling traditions."
  },
  {
    id: 1158,
    category: "Musicians",
    location: "Hyderabad",
    rating: 4.9,
    eventsCompleted: 88,
    experience: "9+ Years",
    eventTypes: ["Weddings", "Corporate Events", "Lounges"],
    languages: ["Telugu", "Hindi", "English"],
    skills: ["Violin", "Fusion Ensemble", "Instrumental Covers"],
    performanceType: "Solo & Ensemble",
    availability: "Flexible",
    tags: ["Violin", "Fusion", "Ensemble"],
    description: "Elegant violin and fusion ensemble performances for refined events."
  }
];

// =====================================================
// CATEGORY VISUALS — accent color + minimal line-art icon
// No emojis, no photos: abstract/instrument-inspired SVG per category.
// =====================================================

const CATEGORY_ACCENTS = {
  "Folk Artist": "orange",
  "Singers": "pink",
  "Musicians": "blue",
  "Dancers": "purple",
  "Choreographers": "purple",
  "DJs": "teal",
  "Comedians": "green",
  "Hosts": "blue",
  "Magicians": "orange",
  "Makeup Artists": "pink",
  "Performers": "orange",
  "Sketchists": "teal"
};

const ACCENT_HEX = {
  orange: "#ff9d4d",
  purple: "#8b5cf6",
  blue: "#4a9fff",
  teal: "#2ecc9a",
  green: "#22c55e",
  pink: "#ec4899"
};

const CATEGORY_ICONS = {
  "Folk Artist": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="12" rx="8" ry="4.5" stroke-linecap="round"/><path d="M4 12v3c0 2.5 3.6 4.5 8 4.5s8-2 8-4.5v-3" stroke-linecap="round"/><path d="M9 9.5v-2M15 9.5v-2" stroke-linecap="round"/></svg>`,
  "Singers": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="9" y="3" width="6" height="10" rx="3"/><path d="M6 11a6 6 0 0 0 12 0" stroke-linecap="round"/><path d="M12 17v4M9 21h6" stroke-linecap="round"/></svg>`,
  "Musicians": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7" cy="17" r="2.6"/><circle cx="17" cy="15" r="2.6"/><path d="M9.6 17V5.5L19 4v11" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "Dancers": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="5" r="2"/><path d="M12 7v5M12 12l-5 6M12 12l6 4M12 9l-6-2M12 9l6 1" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "Choreographers": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="5" r="1.8"/><path d="M9 7v5l-4 6M9 12l5 3" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 4c1.5 1 1.5 3 0 4M18.5 2.5c2.5 1.7 2.5 5 0 6.7" stroke-linecap="round" opacity="0.55"/></svg>`,
  "DJs": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.2"/><path d="M4 8h2M18 8h2M4 16h2M18 16h2" stroke-linecap="round"/></svg>`,
  "Comedians": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="9.5" y="3" width="5" height="9" rx="2.5"/><path d="M7 10.5a5 5 0 0 0 10 0" stroke-linecap="round"/><path d="M12 15.5v2M4 21c1.5-2 3.5-2 4.5-.5M20 21c-1.5-2-3.5-2-4.5-.5" stroke-linecap="round"/></svg>`,
  "Hosts": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="9.5" y="3" width="5" height="9" rx="2.5"/><path d="M7 10.5a5 5 0 0 0 10 0" stroke-linecap="round"/><path d="M12 15.5v2M8 21h8" stroke-linecap="round"/></svg>`,
  "Magicians": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 19L17 7" stroke-linecap="round"/><path d="M19 5l.9 1.9L21.8 8l-1.9.9-.9 1.9-.9-1.9L16.2 8l1.9-.9z"/><path d="M6.5 15.5l1.4 1.4M4 12l1.2 1.2" stroke-linecap="round" opacity="0.6"/></svg>`,
  "Makeup Artists": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 4l6 6-8.5 8.5a2 2 0 0 1-1.3.6l-3.2.3.3-3.2a2 2 0 0 1 .6-1.3L14 4z" stroke-linejoin="round"/><path d="M12.5 5.5l6 6" /></svg>`,
  "Performers": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l1.9 4.4L18.5 8l-3.3 3.2.8 4.6L12 13.6l-4 2.2.8-4.6L5.5 8l4.6-.6z" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
  "Sketchists": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 20l1-4.2L15.8 5 19 8.2 8.2 19z" stroke-linejoin="round"/><path d="M13.5 6.7l3.3 3.3" /></svg>`
};

// Category-relevant, non-identifiable event/object photography.
// Every artist card gets its own unique, category-relevant, non-identifiable
// event/object photo (keyed by artist id so repeated categories still differ).
const ARTIST_IMAGES = {
  1001: "assets/images/folk-artist.jpg",
  1012: "assets/images/singers.jpg",
  1023: "assets/images/musicians.jpg",
  1034: "assets/images/dancers.jpg",
  1045: "assets/images/choreographers.jpg",
  1056: "assets/images/djs.jpg",
  1067: "assets/images/comedians.jpg",
  1078: "assets/images/hosts.jpg",
  1089: "assets/images/magicians.jpg",
  1093: "assets/images/makeup-artists.jpg",
  1102: "assets/images/performers.jpg",
  1114: "assets/images/sketchists.jpg",
  1125: "assets/images/singers-2.jpg",
  1136: "assets/images/dancers-2.jpg",
  1147: "assets/images/folk-artist-2.jpg",
  1158: "assets/images/musicians-2.jpg"
};

function getCategoryVisual(category) {
  const accentKey = CATEGORY_ACCENTS[category] || "purple";
  const hex = ACCENT_HEX[accentKey];
  const icon = CATEGORY_ICONS[category] || CATEGORY_ICONS["Performers"];
  return { hex, icon };
}

function getArtistVisual(artist) {
  const { hex, icon } = getCategoryVisual(artist.category);
  const image = ARTIST_IMAGES[artist.id] || null;
  return { hex, icon, image };
}

// =====================================================
// STATE
// =====================================================

let state = {
  search: "",
  category: "all",
  location: "all",
  eventType: "all",
  minRating: 0,
  minEvents: 0,
  sort: "relevance"
};

// =====================================================
// DOM REFS
// =====================================================

const artistGrid = document.getElementById("artistGrid");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");
const emptyClearBtn = document.getElementById("emptyClearBtn");
const filterBar = document.getElementById("filterBar");

const detailsModal = document.getElementById("detailsModal");
const detailsContent = document.getElementById("detailsContent");
const contactModal = document.getElementById("contactModal");
const contactForm = document.getElementById("contactForm");
const contactFormView = document.getElementById("contactFormView");
const contactSuccessView = document.getElementById("contactSuccessView");
const contactArtistId = document.getElementById("contactArtistId");

// =====================================================
// CUSTOM DROPDOWNS (replaces native <select> to avoid the
// browser's default white listbox rendering)
// =====================================================

const RATING_OPTIONS = [
  { value: "0", label: "Any Rating" },
  { value: "4.5", label: "4.5+" },
  { value: "4.7", label: "4.7+" },
  { value: "4.8", label: "4.8+" },
  { value: "4.9", label: "4.9+" }
];

const EXPERIENCE_OPTIONS = [
  { value: "0", label: "Any Experience" },
  { value: "20", label: "20+ Events" },
  { value: "40", label: "40+ Events" },
  { value: "60", label: "60+ Events" },
  { value: "80", label: "80+ Events" }
];

const SORT_OPTIONS = [
  { value: "relevance", label: "Relevance" },
  { value: "rating", label: "Rating" },
  { value: "events", label: "Most Events" },
  { value: "experience", label: "Experience" }
];

let dropdownDefs = {};

function buildDropdownDefs() {
  const categories = [...new Set(artists.map(a => a.category))].sort();
  const locations = [...new Set(artists.map(a => a.location))].sort();
  const eventTypes = [...new Set(artists.flatMap(a => a.eventTypes))].sort();

  dropdownDefs = {
    category: {
      baseLabel: "Category",
      options: [{ value: "all", label: "All Categories" }, ...categories.map(c => ({ value: c, label: c }))]
    },
    location: {
      baseLabel: "Location",
      options: [{ value: "all", label: "All Locations" }, ...locations.map(l => ({ value: l, label: l }))]
    },
    eventType: {
      baseLabel: "Event Type",
      options: [{ value: "all", label: "All Event Types" }, ...eventTypes.map(t => ({ value: t, label: t }))]
    },
    rating: { baseLabel: "Rating", options: RATING_OPTIONS },
    experience: { baseLabel: "Experience", options: EXPERIENCE_OPTIONS },
    sort: { baseLabel: "Sort", options: SORT_OPTIONS }
  };
}

function stateKeyFor(filterKey) {
  return { category: "category", location: "location", eventType: "eventType", rating: "minRating", experience: "minEvents", sort: "sort" }[filterKey];
}

function renderDropdownPanel(el, filterKey) {
  const def = dropdownDefs[filterKey];
  const panel = el.querySelector(".fdropdown-panel");
  const currentValue = String(getCurrentDropdownValue(filterKey));

  panel.innerHTML = def.options.map(opt => `
    <div class="fdropdown-option ${String(opt.value) === currentValue ? "is-selected" : ""}" data-value="${opt.value}">${opt.label}</div>
  `).join("");
}

function getCurrentDropdownValue(filterKey) {
  switch (filterKey) {
    case "category": return state.category;
    case "location": return state.location;
    case "eventType": return state.eventType;
    case "rating": return state.minRating;
    case "experience": return state.minEvents;
    case "sort": return state.sort;
  }
}

function updateDropdownLabel(el, filterKey) {
  const def = dropdownDefs[filterKey];
  const currentValue = String(getCurrentDropdownValue(filterKey));
  const match = def.options.find(o => String(o.value) === currentValue);
  const label = el.querySelector(".fdropdown-label");
  const isDefault = currentValue === "all" || currentValue === "0" || (filterKey === "sort" && currentValue === "relevance");

  if (filterKey === "sort") {
    label.textContent = `Sort: ${match ? match.label : "Relevance"}`;
  } else {
    label.textContent = isDefault ? def.baseLabel : match.label;
  }

  el.querySelector(".fdropdown-trigger").classList.toggle("is-active", !isDefault);
}

function closeAllDropdowns(except) {
  document.querySelectorAll(".fdropdown.is-open").forEach(d => {
    if (d !== except) {
      d.classList.remove("is-open");
      resetDropdownPanelPosition(d);
    }
  });
}

// The mobile filter bar scrolls horizontally (overflow-x: auto), which per the
// CSS spec auto-computes overflow-y to "auto" too — so a plain
// position:absolute panel gets vertically clipped by that same bar instead of
// floating above the page. Below this breakpoint we instead switch the open
// panel to position:fixed with a JS-computed viewport position, which escapes
// that clipping ancestor entirely (fixed elements aren't confined by a
// non-transformed ancestor's overflow). Desktop/tablet keep the original
// CSS-only position:absolute behavior untouched.
const MOBILE_DROPDOWN_BREAKPOINT = 640;
function isMobileDropdownLayout() {
  return window.innerWidth <= MOBILE_DROPDOWN_BREAKPOINT;
}

function resetDropdownPanelPosition(fdropdownEl) {
  const panel = fdropdownEl.querySelector(".fdropdown-panel");
  panel.style.position = "";
  panel.style.top = "";
  panel.style.left = "";
  panel.style.right = "";
  panel.style.width = "";
  panel.style.visibility = "";
  panel.style.opacity = "";
}

function positionDropdownPanel(fdropdownEl) {
  const panel = fdropdownEl.querySelector(".fdropdown-panel");

  if (!isMobileDropdownLayout()) {
    resetDropdownPanelPosition(fdropdownEl);
    return;
  }

  const trigger = fdropdownEl.querySelector(".fdropdown-trigger");
  const triggerRect = trigger.getBoundingClientRect();
  const margin = 12;
  const gap = 8;
  const panelWidth = Math.max(200, triggerRect.width);
  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;

  // measure the panel's natural height off-screen before committing to a
  // final position, so we know whether it fits below or needs to flip above
  panel.style.position = "fixed";
  panel.style.visibility = "hidden";
  panel.style.top = "0px";
  panel.style.left = "0px";
  panel.style.width = panelWidth + "px";
  const panelHeight = panel.offsetHeight;

  const spaceBelow = viewportH - triggerRect.bottom - margin;
  const spaceAbove = triggerRect.top - margin;
  const openUpward = panelHeight > spaceBelow && spaceAbove > spaceBelow;

  let top = openUpward ? (triggerRect.top - panelHeight - gap) : (triggerRect.bottom + gap);
  top = Math.max(margin, Math.min(top, viewportH - margin - panelHeight));

  let left = triggerRect.left;
  left = Math.max(margin, Math.min(left, viewportW - margin - panelWidth));

  panel.style.left = left + "px";
  panel.style.top = top + "px";
  panel.style.right = "auto";
  panel.style.visibility = "";
}

function initDropdowns() {
  buildDropdownDefs();

  document.querySelectorAll(".fdropdown").forEach(el => {
    const filterKey = el.dataset.filter;
    renderDropdownPanel(el, filterKey);
    updateDropdownLabel(el, filterKey);

    const trigger = el.querySelector(".fdropdown-trigger");
    trigger.addEventListener("click", e => {
      e.stopPropagation();
      const isOpen = el.classList.contains("is-open");
      closeAllDropdowns();
      if (!isOpen) {
        el.classList.add("is-open");
        positionDropdownPanel(el);
      }
    });

    el.querySelector(".fdropdown-panel").addEventListener("click", e => {
      const opt = e.target.closest(".fdropdown-option");
      if (!opt) return;
      applyDropdownSelection(filterKey, opt.dataset.value);
      renderDropdownPanel(el, filterKey);
      updateDropdownLabel(el, filterKey);
      el.classList.remove("is-open");
      resetDropdownPanelPosition(el);
    });
  });

  document.addEventListener("click", () => closeAllDropdowns());

  // keep the open panel correctly placed if the viewport changes size/orientation
  // or the mobile filter bar is scrolled horizontally underneath it
  window.addEventListener("resize", () => {
    const openEl = document.querySelector(".fdropdown.is-open");
    if (openEl) positionDropdownPanel(openEl);
  });
  filterBar.addEventListener("scroll", () => {
    const openEl = document.querySelector(".fdropdown.is-open");
    if (openEl) positionDropdownPanel(openEl);
  });
}

function applyDropdownSelection(filterKey, rawValue) {
  switch (filterKey) {
    case "category": state.category = rawValue; break;
    case "location": state.location = rawValue; break;
    case "eventType": state.eventType = rawValue; break;
    case "rating": state.minRating = parseFloat(rawValue); break;
    case "experience": state.minEvents = parseInt(rawValue); break;
    case "sort": state.sort = rawValue; break;
  }
  renderArtists();
}

function refreshAllDropdownLabels() {
  document.querySelectorAll(".fdropdown").forEach(el => {
    const filterKey = el.dataset.filter;
    renderDropdownPanel(el, filterKey);
    updateDropdownLabel(el, filterKey);
  });
}

// =====================================================
// FILTER + SORT LOGIC
// =====================================================

function getFilteredArtists() {
  let result = artists.filter(artist => {
    const searchTarget = `${artist.category} ${artist.location} ${artist.skills.join(" ")} ${artist.tags.join(" ")} ${artist.eventTypes.join(" ")} ${artist.description}`.toLowerCase();
    const matchesSearch = state.search === "" || searchTarget.includes(state.search.toLowerCase());
    const matchesCategory = state.category === "all" || artist.category === state.category;
    const matchesLocation = state.location === "all" || artist.location === state.location;
    const matchesEventType = state.eventType === "all" || artist.eventTypes.includes(state.eventType);
    const matchesRating = artist.rating >= state.minRating;
    const matchesEvents = artist.eventsCompleted >= state.minEvents;

    return matchesSearch && matchesCategory && matchesLocation && matchesEventType && matchesRating && matchesEvents;
  });

  switch (state.sort) {
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "events":
      result.sort((a, b) => b.eventsCompleted - a.eventsCompleted);
      break;
    case "experience":
      result.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
      break;
    default:
      break; // relevance = dataset order
  }

  return result;
}

// =====================================================
// RENDER
// =====================================================

function renderArtists() {
  const filtered = getFilteredArtists();

  resultCount.textContent = `${filtered.length} Artist${filtered.length === 1 ? "" : "s"} Available`;

  if (filtered.length === 0) {
    artistGrid.hidden = true;
    emptyState.hidden = false;
    return;
  }

  artistGrid.hidden = false;
  emptyState.hidden = true;

  artistGrid.innerHTML = filtered.map(artist => {
    const { hex, icon, image } = getArtistVisual(artist);
    const visualStyle = image
      ? `background-image: linear-gradient(180deg, rgba(8,8,15,0.05) 0%, rgba(8,8,15,0.65) 100%), url('${image}'); background-size: cover; background-position: center;`
      : `background: radial-gradient(circle at 20% 20%, ${hex}2e, transparent 55%), radial-gradient(circle at 80% 75%, ${hex}1c, transparent 55%), var(--color-surface-2);`;
    return `
    <article class="artist-card" data-id="${artist.id}">
      <div class="card-visual" style="${visualStyle}">
        ${image ? "" : `<span class="icon-badge" style="--card-accent:${hex}; --card-accent-border:${hex}40; --card-accent-bg:${hex}14;">${icon}</span>`}
      </div>
      <div class="card-body">
        <h3 class="card-category">${artist.category}</h3>
        <p class="card-location">📍 ${artist.location}</p>
        <div class="card-stats">
          <span class="stat-rating">★ ${artist.rating.toFixed(1)}</span>
          <span>${artist.eventsCompleted} Events</span>
        </div>
        <div class="card-tags">
          ${artist.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <p class="card-desc">${artist.description}</p>
        <div class="card-actions">
          <button class="btn btn--outline btn--sm" data-action="details" data-id="${artist.id}">View Details</button>
          <button class="btn btn--primary btn--sm" data-action="contact" data-id="${artist.id}">Contact Artist</button>
        </div>
      </div>
    </article>
  `;
  }).join("");
}

// =====================================================
// EVENT BINDINGS — search & clear
// =====================================================

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

searchInput.addEventListener("input", debounce(e => {
  state.search = e.target.value.trim();
  renderArtists();
}, 150));

function clearFilters() {
  state = { search: "", category: "all", location: "all", eventType: "all", minRating: 0, minEvents: 0, sort: "relevance" };
  searchInput.value = "";
  refreshAllDropdownLabels();
  renderArtists();
}

clearFiltersBtn.addEventListener("click", clearFilters);
emptyClearBtn.addEventListener("click", clearFilters);

// =====================================================
// CARD ACTIONS — details / contact (event delegation)
// =====================================================

artistGrid.addEventListener("click", e => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const id = parseInt(btn.dataset.id);
  const artist = artists.find(a => a.id === id);
  if (!artist) return;

  if (btn.dataset.action === "details") openDetailsModal(artist);
  if (btn.dataset.action === "contact") openContactModal(artist);
});

// =====================================================
// DETAILS MODAL
// =====================================================

function openDetailsModal(artist) {
  const { hex, icon, image } = getArtistVisual(artist);
  const visualStyle = image
    ? `background-image: linear-gradient(180deg, rgba(8,8,15,0.05) 0%, rgba(8,8,15,0.55) 100%), url('${image}'); background-size: cover; background-position: center;`
    : `background: radial-gradient(circle at 50% 30%, ${hex}22, transparent 70%); color:${hex};`;
  detailsContent.innerHTML = `
    <div class="detail-visual" style="${visualStyle}">${image ? "" : icon}</div>
    <h2 class="detail-category">${artist.category}</h2>
    <p class="detail-id">Profile #${artist.id}</p>

    <div class="detail-grid">
      <div class="detail-item">
        <div class="detail-label">Location</div>
        <div class="detail-value">${artist.location}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Rating</div>
        <div class="detail-value">★ ${artist.rating.toFixed(1)} / 5</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Events Completed</div>
        <div class="detail-value">${artist.eventsCompleted}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Experience</div>
        <div class="detail-value">${artist.experience}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Performance Type</div>
        <div class="detail-value">${artist.performanceType}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Availability</div>
        <div class="detail-value">${artist.availability}</div>
      </div>
    </div>

    <div class="detail-block">
      <div class="detail-label">Languages</div>
      <div class="pill-list">${artist.languages.map(l => `<span class="pill">${l}</span>`).join("")}</div>
    </div>

    <div class="detail-block">
      <div class="detail-label">Suitable For</div>
      <div class="pill-list">${artist.eventTypes.map(t => `<span class="pill">${t}</span>`).join("")}</div>
    </div>

    <div class="detail-block">
      <div class="detail-label">Skills</div>
      <div class="pill-list">${artist.skills.map(s => `<span class="pill">${s}</span>`).join("")}</div>
    </div>

    <p class="detail-desc">${artist.description}</p>

    <div class="detail-actions">
      <button class="btn btn--primary btn--full" data-action="contact-from-details" data-id="${artist.id}">Contact Artist</button>
    </div>
  `;
  openModal(detailsModal);
}

detailsContent.addEventListener("click", e => {
  const btn = e.target.closest("button[data-action='contact-from-details']");
  if (!btn) return;
  const id = parseInt(btn.dataset.id);
  const artist = artists.find(a => a.id === id);
  closeModal(detailsModal);
  setTimeout(() => openContactModal(artist), 150);
});

// =====================================================
// CONTACT MODAL
// =====================================================

function openContactModal(artist) {
  contactForm.reset();
  clearFormErrors();
  contactArtistId.value = artist.id;
  contactFormView.hidden = false;
  contactSuccessView.hidden = true;
  openModal(contactModal);
}

function clearFormErrors() {
  document.querySelectorAll(".field-error").forEach(el => el.textContent = "");
  document.querySelectorAll(".contact-form input, .contact-form textarea").forEach(el => el.classList.remove("invalid"));
}

function validateContactForm(data) {
  const errors = {};
  if (!data.name.trim()) errors.contactName = "Please enter your name.";
  if (!data.email.trim()) {
    errors.contactEmail = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.contactEmail = "Please enter a valid email address.";
  }
  if (!data.eventType.trim()) errors.contactEventType = "Please enter an event type.";
  if (!data.eventLocation.trim()) errors.contactEventLocation = "Please enter an event location.";
  if (!data.message.trim()) errors.contactMessage = "Please tell us a bit about your requirement.";
  return errors;
}

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  clearFormErrors();

  const data = {
    name: document.getElementById("contactName").value,
    email: document.getElementById("contactEmail").value,
    eventType: document.getElementById("contactEventType").value,
    eventLocation: document.getElementById("contactEventLocation").value,
    message: document.getElementById("contactMessage").value
  };

  const errors = validateContactForm(data);

  if (Object.keys(errors).length > 0) {
    Object.entries(errors).forEach(([fieldId, msg]) => {
      document.getElementById(`err-${fieldId}`).textContent = msg;
      document.getElementById(fieldId).classList.add("invalid");
    });
    return;
  }

  // Dummy frontend-only submission — no data is sent anywhere.
  contactFormView.hidden = true;
  contactSuccessView.hidden = false;
});

// =====================================================
// MODAL HELPERS — open/close, ESC key, click outside
// =====================================================

function openModal(modalEl) {
  modalEl.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(modalEl) {
  modalEl.classList.remove("open");
  document.body.style.overflow = "";
}

function closeAllModals() {
  [detailsModal, contactModal].forEach(closeModal);
}

document.querySelectorAll("[data-close-modal]").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal-overlay");
    closeModal(modal);
  });
});

[detailsModal, contactModal].forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal(modal);
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeAllModals();
    closeAllDropdowns();
  }
});

// =====================================================
// MOBILE NAV
// =====================================================

document.querySelectorAll(".nav-disabled").forEach(link => {
  link.addEventListener("click", e => e.preventDefault());
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// =====================================================
// BOOTSTRAP
// =====================================================

initDropdowns();
renderArtists();
