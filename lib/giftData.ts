export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText: string;
  collageImages: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

const giftData: Record<string, GiftData> = {
  aya: {
    senderName: "Rou",
    receiverName: "youhy",
    // مسار صورة الظرف التي ستضعها لاحقاً
    envelopeImage: "/images/envelope-placeholder.png", 
    cardMessage: "Check out this awesome surprises for YOU!",
    // مسار صورة الطفل/صاحبة العيد ميلاد
    birthdayImage: "/images/kid-placeholder.jpg", 
    birthdayTitle: "Happy birthday Youhyy",
    birthdayText: "I really wanna thank you for every time you tried to be there for me and every time I got upset and you did your best to make things better. We've been through so many difficult times together, but the important thing is that we always find a way to keep going. I love all the moments and memories we've shared, the good ones and even the bad ones. Thanks for putting up with my terrible gameplay and never giving up on playing with me. I hope you know how much I appreciate having you in my life.  I hope this year brings you  everything you wish for. I hope we keep making memories, laughing, annoying each other and being there for one another. And most importantly, I hope we stay in each other's lives until we're old. Can't wait to see you become the engineer of the future 💞",
    // مسارات الـ 4 صور
    collageImages: [
      "/images/pic1.jpg", 
      "/images/pic2.jpg", 
      "/images/pic3.jpg", 
      "/images/pic4.jpg"  
    ],
    // مسار صورة الأغنية
    musicCoverImage: "/images/song-cover.jpg",
    // مسار ملف الأغنية (mp3)
    musicUrl: "/music/our-song.mp3",
    songTitle: "Our Special Song"
  },
};

export default giftData;