var verses = [ 
    "2 Timothy 1:7 - For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
    "Psalms 37:4 - Delight thyself also in the LORD; and he shall give thee the desires of thine heart.",
    "Psalms 121:1-8 - (A Song of degrees.) I will lift up mine eyes unto the hills, from whence cometh my help.   (Read More...)",
    "Proverbs 30:5 - Every word of God is pure: he is a shield unto them that put their trust in him.",
    "Mark 11:24 - Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.",
    "Psalms 28:7 - The LORD is my strength and my shield; my heart trusted in him, and I am helped: therefore my heart greatly rejoiceth; and with my song will I praise him.",
    "Psalms 34:4 - I sought the LORD, and he heard me, and delivered me from all my fears.",
    "Philippians 4:13 - I can do all things through Christ which strengtheneth me.",
    "1 Thessalonians 5:9-11 - For God hath not appointed us to wrath, but to obtain salvation by our Lord Jesus Christ,   (Read More...)",
    "Psalms 55:22 - Cast thy burden upon the LORD, and he shall sustain thee: he shall never suffer the righteous to be moved.",
    "Jeremiah 29:11 - For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
    "Romans 15:13 - Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.",
    "Psalms 126:5 - They that sow in tears shall reap in joy.",
    "Jeremiah 29:11-14 - For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.   (Read More...)",
    "John 16:33 - These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.",
    "Ephesians 4:29 - Let no corrupt communication proceed out of your mouth, but that which is good to the use of edifying, that it may minister grace unto the hearers.",
    "Hebrews 10:25 - Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.",
    "Hebrews 4:12 - For the word of God is quick, and powerful, and sharper than any two edged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart."
]

function newVerse() {
    var randomNumber = Math.floor(Math.random() * (verses.length));
   document.getElementById("verseDisplay").innerHTML = verses[randomNumber]; 
}