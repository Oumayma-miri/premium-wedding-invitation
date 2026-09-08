import bridePhoto from "../assets/images/bride.jpg"
import groomPhoto from "../assets/images/groom.jpg"

export const wedding = {
  bride: {
    name: "Emma",
    photo: bridePhoto,
  },
  groom: {
    name: "Adam",
    photo: groomPhoto,
  },
  date: "18 June 2027",
  dateTime: "2027-06-18T16:00:00+01:00",
  venue: "The Royal Garden",
  location: "Tunis, Tunisia",
  locationDetails: {
    venue: "The Royal Garden",
    address: "Tunis, Tunisia",
    description: "We cannot wait to welcome you to this garden celebration.",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=The+Royal+Garden+Tunis+Tunisia",
    mapEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=10.14%2C36.79%2C10.20%2C36.83&layer=mapnik",
  },
  details: {
    date: "18 June 2027",
    ceremony: {
      title: "Ceremony",
      date: "18 June 2027",
      time: "4:00 PM",
      venue: "The Royal Garden",
      address: "Tunis, Tunisia",
    },
    reception: {
      title: "Reception",
      time: "6:30 PM",
      venue: "The Royal Garden",
      address: "Dinner, dancing, and a little magic under the lights",
    },
  },
  dressCode: {
    title: "Elegant formal",
    value: "Dress to feel wonderful",
    description: "We would love to see you in your finest celebration attire. Comfortable shoes are encouraged for dancing.",
  },
  rsvp: {
    title: "Will you join us?",
    buttonLabel: "Send response",
  },
  wishes: {
    title: "Leave a little wish",
    buttonLabel: "Send wish",
  },
  invitation:
    "Together with their families, Emma and Adam joyfully invite you to celebrate the beginning of their forever.",
  story: {
    title: "Our Story",
    text: "Somehow, among ordinary days and unexpected laughter, Emma and Adam found a love that felt like home. Now they are gathering the people they love most to celebrate the next chapter.",
    timeline: [
      {
        date: "The beginning",
        title: "A happy coincidence",
        description: "One conversation became many, and a beautiful friendship began to grow.",
      },
      {
        date: "Today",
        title: "A promise for always",
        description: "With full hearts, they are ready to say yes to a lifetime together.",
      },
    ],
  },
  sections: {
    envelope: true,
    hero: true,
    story: true,
    gallery: false,
    countdown: true,
    details: true,
    location: true,
    dressCode: true,
    rsvp: true,
    wishes: true,
    final: true,
  },
  colors: {
    primary: "#800020",
    background: "#FFF8F0",
    text: "#6F4E37",
    accent: "#D4A017",
  },
}