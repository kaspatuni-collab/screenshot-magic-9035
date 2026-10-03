// =====================================================================
//  ♡ EDIT EVERYTHING HERE ♡
//  All names, photos, captions, messages, the video and the letter live
//  in this one file. To use your own photos: drop them in src/assets/
//  and swap the imports below (e.g. import her1 from "@/assets/her-1.jpg").
// =====================================================================
import ph1 from "@/assets/placeholder-1.jpg"; // REPLACE with a photo of her
import ph2 from "@/assets/placeholder-2.jpg"; // REPLACE with a photo of you / both
import ph3 from "@/assets/placeholder-3.jpg"; // REPLACE with a photo of her

export const names = {
  her: "Her Name",
  me: "Your Name",
};

export const hero = {
  title: "To the girl who makes my days better ♡",
  subtitle: "I made something for you...",
  button: "Open this ♡",
};

export const intro = {
  title: "Why I Made This For You ♡",
  paragraphs: [
    "I'm not really the type to say this stuff out loud, so I figured I'd make you something instead. Basically, I just really appreciate having you in my life, and I wanted you to actually know that.",
    "Talking to you has kind of become the best part of my day. I'll be doing something completely random and catch myself waiting to tell you about it. That's new for me.",
    "I know we don't always get loads of time together, with distance and our schedules being all over the place, but honestly that just makes me value every bit of it more. Even the dumb late-night conversations.",
    "I love how easy it is being around you. You're kind, you're funny, you're ridiculously pretty, and you do all these little things that you probably don't even notice. I notice them.",
    "So yeah. This is me saying you mean a lot to me. More than I'm probably good at showing.",
  ],
};

export type Photo = { src: string; caption?: string; style: "polaroid" | "rounded" };
export const gallery: { title: string; photos: Photo[] } = {
  title: "Little Moments ♡",
  photos: [
    { src: ph1, caption: "Absolutely beautiful.", style: "polaroid" },
    { src: ph2, caption: "My favourite person to annoy.", style: "rounded" },
    { src: ph3, caption: "How are you actually this pretty?", style: "polaroid" },
    { src: ph2, caption: "One of my favourite pictures of you.", style: "polaroid" },
    { src: ph3, caption: "Wish I was there.", style: "rounded" },
    { src: ph1, caption: "", style: "polaroid" },
  ],
};

export const video = {
  title: "One of My Favourite Things ♡",
  // REPLACE: put your video in /public (e.g. public/roblox.mp4) and set src: "/roblox.mp4"
  // Leave src empty to show a placeholder card.
  src: "",
  poster: ph2,
  caption: "Just two idiots playing Roblox together ♡",
};

export const gifts = {
  title: "A Few Little Gifts For You 🎁",
  messages: [
    "You're genuinely so beautiful, and I hope you know that.",
    "I love the way talking to you can instantly make my day better.",
    "You're someone I could never get tired of talking to.",
    "You're more special to me than you probably realise.",
    "Your smile is genuinely one of my favourite things.",
    "Thank you for being you. ♡",
  ],
};

export const loves = {
  title: "Things I Love About You",
  items: [
    { label: "Your personality ♡", note: "You're just so easy to be around. Genuinely my favourite vibe." },
    { label: "Your smile ♡", note: "It does something to me every single time, not even joking." },
    { label: "Your kindness ♡", note: "The way you care about people is honestly so attractive." },
    { label: "Your sense of humour ♡", note: "You make me laugh at the stupidest things and I love it." },
    { label: "Your voice ♡", note: "I could listen to you talk about literally anything." },
    { label: "The way you make me feel ♡", note: "Calm, happy, a bit stupid. In a good way." },
    { label: "The little things you do ♡", note: "The random texts, the check-ins. I see all of it." },
    { label: "Just... you ♡", note: "Honestly that's the whole list." },
  ],
};

export const letter = {
  title: "A Little Letter For You",
  greeting: `Hey ${names.her},`,
  paragraphs: [
    "I don't really know how to start this so I'm just going to say it. I'm really glad I met you. Like, actually glad.",
    "I love our conversations. The deep ones, the stupid ones, the ones where we just send each other memes for an hour. I look forward to them more than you'd probably guess.",
    "We've already got some good memories, and somehow some of my favourites are just us playing Roblox and being idiots together. Those are honestly some of my best nights.",
    "Also, you're beautiful. I know I say it, but I don't think you get how much I mean it.",
    "I care about you a lot. I hope we keep making memories together, big ones and small ones. I'm really looking forward to all of it.",
  ],
  signoff: "Yours,",
  signature: names.me,
};

export const finale = {
  title: "That's all for now... ♡",
  message: "But I hope you always remember how appreciated, beautiful and special you are.",
  button: "Replay Everything ♡",
  footer: "Made with way too much love ♡",
};
