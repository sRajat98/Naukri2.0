export const breakpoints = {
  mobileS: 320,
  mobileM: 400,
  mobileL: 580,
  tablet: 780,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const minMediaQueries = {
  mobileS: `(min-width: ${breakpoints.mobileS}px)`,
  mobileM: `(min-width: ${breakpoints.mobileM}px)`,
  mobileL: `(min-width: ${breakpoints.mobileL}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  laptop: `(min-width: ${breakpoints.laptop}px)`,
  laptopL: `(min-width: ${breakpoints.laptopL}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
};

export const maxMediaQueries = {
  mobileS: `(max-width: ${breakpoints.mobileS}px)`,
  mobileM: `(max-width: ${breakpoints.mobileM}px)`,
  mobileL: `(max-width: ${breakpoints.mobileL}px)`,
  tablet: `(max-width: ${breakpoints.tablet}px)`,
  laptop: `(max-width: ${breakpoints.laptop}px)`,
  laptopL: `(max-width: ${breakpoints.laptopL}px)`,
  desktop: `(max-width: ${breakpoints.desktop}px)`,
};

export const getDevice = (width) => {
  if (
    width <= breakpoints.mobileS ||
    width <= breakpoints.mobileM ||
    width <= breakpoints.mobileL ||
    width <= breakpoints.tablet
  ) {
    return "mobile";
  }
  if (width <= breakpoints.laptop || width <= breakpoints.laptopL)
    return "web-low-res";

  if (width <= breakpoints.desktop) return "web-high-res";
};

export const truncateString = (string, length) => {
  return `${string.substring(0, length)}..`;
};

export const checkWindowLocation = (location) =>
  window.location.pathname === location;

export const getFirstAlphabet = (fullName = "") => fullName.charAt(0);
