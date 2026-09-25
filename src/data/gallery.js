import groupPhoto from '../assets/gallery/biab-2024/group-photo.jpg';
import participantsSeated from '../assets/gallery/biab-2024/01-participants-seated.jpg';
import fullHallSession from '../assets/gallery/biab-2024/02-full-hall-session.jpg';
import teamWorkSession from '../assets/gallery/biab-2024/03-team-work-session.jpg';
import facilitatorPresentation from '../assets/gallery/biab-2024/04-facilitator-presentation.jpg';
import participantPitch from '../assets/gallery/biab-2024/05-participant-pitch.jpg';
import participantsListening from '../assets/gallery/biab-2024/06-participants-listening.jpg';
import teamBrainstorm from '../assets/gallery/biab-2024/07-team-brainstorm.jpg';
import facilitatorSpotlight from '../assets/gallery/biab-2024/08-facilitator-spotlight.jpg';

// Named exports so other pages can feature individual shots.
export const photos = {
  groupPhoto: {
    src: groupPhoto,
    width: 867,
    height: 648,
    alt: 'BUILD-IN-A-BOX Liberia 2024 participants and facilitators gathered for a group photo',
  },
  participantsSeated: {
    src: participantsSeated,
    width: 649,
    height: 866,
    alt: 'Participants seated at tables in the Innoignite hub on day one',
  },
  fullHallSession: {
    src: fullHallSession,
    width: 866,
    height: 648,
    alt: 'A full hall of young leaders during a bootcamp session',
  },
  teamWorkSession: {
    src: teamWorkSession,
    width: 959,
    height: 586,
    alt: 'Teams working through a design challenge at their tables',
  },
  facilitatorPresentation: {
    src: facilitatorPresentation,
    width: 723,
    height: 777,
    alt: 'A facilitator presenting to the room beside a flip chart',
  },
  participantPitch: {
    src: participantPitch,
    width: 798,
    height: 704,
    alt: 'A participant sharing her idea with the group',
  },
  participantsListening: {
    src: participantsListening,
    width: 960,
    height: 585,
    alt: 'Participants listening attentively during a session',
  },
  teamBrainstorm: {
    src: teamBrainstorm,
    width: 807,
    height: 696,
    alt: 'A team brainstorming solutions to a community challenge',
  },
  facilitatorSpotlight: {
    src: facilitatorSpotlight,
    width: 707,
    height: 795,
    alt: 'A facilitator standing in front of the Innoignite banners',
  },
};

export const galleryYears = [
  {
    year: 2024,
    title: 'BUILD-IN-A-BOX Liberia 2024 Bootcamp',
    date: 'Wednesday, July 24, 2024',
    venue: 'Innoignite Innovative Hub, Matilda Newport Junior High School',
    story: [
      'On Wednesday, July 24, 2024, we launched the BUILD-IN-A-BOX Liberia Bootcamp. Young leaders gathered at the Innoignite Innovative Hub/Space at Matilda Newport Junior High School for an immersive entrepreneurial experience.',
      'Employing the design thinking BUILD model – Believe. Understand. Invent. Listen. Deliver. – participants tackled real community challenges with ingenuity and perseverance.',
      "This partnership with the African Leadership Academy empowered our young changemakers to cultivate vital entrepreneurial leadership skills and innovative solutions to address the root causes of some of Africa's old-aged problems. Special thanks to Innoignite for their invaluable support in making this event possible.",
    ],
    cover: photos.groupPhoto,
    // In a justified row, a smaller row (fewer photos sharing the width) renders taller.
    // participantsSeated leads, paired only with facilitatorPresentation (both portrait shots,
    // so together they hold the most height), to make it the biggest tile in the grid on
    // both breakpoints. The rest fill out normal-sized rows (3 on desktop, 2 on mobile).
    photos: [
      photos.participantsSeated,
      photos.facilitatorPresentation,
      photos.teamWorkSession,
      photos.participantPitch,
      photos.fullHallSession,
      photos.teamBrainstorm,
      photos.facilitatorSpotlight,
      photos.participantsListening,
    ],
  },
];
