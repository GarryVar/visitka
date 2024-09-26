import siodOmLotus from "../sounds/siod_om_lotus.mp3";
import siodLogo from "../images/siod-logo-vector.webp"
import shankeyInfinity from "../sounds/shankey_infinity_in_infinity.mp3";
import shankeyInfinityCover from "../images/shankty_infinity.webp"
import jyotish1000Little from "../sounds/jyotish_1000_little_indians.mp3";
import jyotishLogo from "../images/jyotish_logo.webp";


export const tracks = [
  {
    track: siodOmLotus,
    artist: "S.i.O.D",
    trackTitle: "Om (Lotus)",
    durationMin: '11',
    durationSec: '52',
    cover: siodLogo,
    artistLinkDiscogs: 'https://www.discogs.com/ru/artist/3376567-SIOD',
    released: false,
  },

  {
    track: shankeyInfinity,
    artist: "Shankey",
    trackTitle: "Infinity in Infinity",
    durationMin: '10',
    durationSec: '57',
    cover: shankeyInfinityCover,
    artistLinkDiscogs: 'https://www.discogs.com/ru/artist/6471962-Shankey',
    released: true,
  },
  {
    track: jyotish1000Little,
    artist: "Jyotish",
    trackTitle: "1000 little indians",
    durationMin: '07',
    durationSec: '36',
    cover: jyotishLogo,
    artistLinkDiscogs: 'https://www.discogs.com/ru/artist/2001307-Jyotish',
    released: true,
  },
];