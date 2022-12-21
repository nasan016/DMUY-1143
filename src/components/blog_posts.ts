import { ref } from "vue"

const week_1 = ["Week 1",
"This week I decided to practice learning more about UI/UX by building my blog to look like a code editor. An issue that I have with many modern code editors is that they are very convoluted and hard for people to use. I decided to simplify the design of the code editor so that it could be more fit for displaying information. I plan on implementing new features and improving the stylistic choices made while creating this blog for the first few weeks. Eventually, I will experiment with ways to make websites more engaging by building components unrelated to this blog and posting them for people to test out."
]

const week_2 = ["Week 2",
 "This week I cleaned up the code for the blog to get it ready to support mobile devices. The thing I need to figure out next is how the website will look on a mobile screen. Thinking of a design that is responsive, functional and follows the whole aesthetic of the blog is something I'm currently struggling with."
]

const week_3 = ["Week 3",
 "My friends hate the design (maybe they just hate me), or rather, they don't appreciate the design. I feel like the code editor idea is a little too niche and it's something only I'd appreciate (because I spend 12 hours a day staring at it). I want to redesign my blog to be very minimalist and to run off of singular HTML page. I also want to give it character so that anybody can appreciate the design. I have a few ideas written down in my notebook, but it's cluttered with pictures of cats I drew so I don't really understand what I want to do."
]

const week_4 = ["Week 4",
"I have an idea for how the blog is going to look. I want it to have a minimalist/deconstructed feel. In doing so, I feel like I'm limiting myself from adding everything I want to it, so I'm going to have certain documentations on a seperate webpage. I want to try my best to have my design allow me to incorporate everything I want to show, but I feel like adding images to the blog will be a stark contrast from the design I'm trying to achieve."
]

const week_5 = ["Week 5",
"I finished creating the landing page for the new blog design. I added a little flare to it because I didn't want it to be completely dull and I added a little click animation before you actually enter the blog (there is no blog yet it takes too much time to code that portion and it took too much time to code this landing page). For the actual blog part itself, I am at a complete loss. I do not know how I want it to look and I don't know how I want it to work. I think the main issue is, I don't know how to make it work."
]

const week_6 = ["Week 6",
"I have finally finished creating the actual text display for the blog. This was a fairly difficult task for me because the previous designs I came up with didn't really work when it came to functionality. I think to improve on my workflow moving forward, I would need to actually carefully plan out what I'm doing and testing to see if the idea is actually feasible. Now I need to actually implement the 'Archive' section which may be difficult because I've never really tried implementing images into my websites"]

const week_7 = ["Week 7",
"I tried putting images into my website and I completely crashed it. This is going to take some time figuring out. Where do I want to put the button for the archive section? Next to the numbers? At the bottom? Somewhere else? Every idea I have seems terrible right now. I have a mockup for it on a seperate page that works, but unfortunately it doesn't really work on this website."]

const week_8 = ["Week 8",
"So instead of working on my blog website, I wanted to learn other things. I started practicing the piano again after a long hiatus. I really wish that instead of majoring in something that I was good at, I majored in something that I loved. I love music and I want it to be a part of my life. I was always afraid to continue practicing the piano because I thought I would be wasting my time. I never thought it was worth to continue playing the instrument if I wasn't going to be the best, but that mindset has really proved detrimental to me. Instead of playing to become the best, I want to play to become the best version of me."]

const week_9 = ["Week 9",
"The 'Archive' button has finally found it's home! Now I need to figure out how I want the photos to look! I'm going to see if there is a Vue plugin or some other npm plugin that would allow me to make viewing photos easy to implement and easy for the user to use."]

const week_10 = ["Week 10",
"I would like to give a little rant about the schooling system we have. In my computer science courses I feel like my learning is limited to the text that is written in books and the words that are being said by my professors. I hate learning like this. I feel like computer science is a major where you should be learning how to learn rather than learning things for specific languages. It's cool that my teachers teach me things in Python/C++ but it doesn't really translate to other languages I use. Not once have I used a single data structure or algorithm in my actual projects. Learning computer science should be learning how to ask the right questions and how to find the answers to the problems you are facing. I understand that theory and fundamentals are important, but I feel like a robot sitting down in class studying the same thing for 3 weeks straight. This IDM course is truly a change of pace because I finally get to study how I want to study with no one telling what is right and what is wrong."]

const week_11 = ["Week 11",
"I didn't do anything this week to be completely honest. Studying for exams is about all I did. I hate math."]

const week_12 = ["Week 12",
"I asked my friend for help on learning the programming language Rust. It's a really hard language to learn so I looked to him to give me some pointers on how to get started. I wanted to make a game based that runs off of a computer terminal because of a game my brother introduced me to as a kid: 'Nethack.' I thought the idea of having a game run off of a computer terminal was so cool because that means any computer could run it and anybody could play it. I love the idea of accessibility and I love the idea of people enjoying my projects. Hopefully when I have some sort of prototype I could add it to this website to show it off."]

const week_13 = ["Week 13",
"Studying for exams again. Can't really do anything else or I'll fail my math course :("]

const week_14 = ["Week 14",
"This is a very sad week. I have made mistakes, I am not perfect, and I would love to own up to my mistakes. I want to work on a project that incorporates my love for music along with my skills in computer science to make something for her. Apologies have been said in many insignificant ways and hopefully this one will be the one that reaches her. I have thought of making a music player with songs that I play in the piano, recording those songs, and putting them in the music player. Sorry is the hardest word to say, but I am willing to let go of my pride to save the most real and genuine thing that I've ever experienced in my life."]

const week_15 = ["Week 15",
"I cried so much while driving home that I had to pull over in the highway until I calmed down. I finished the music player project though! It's a little private so I don't want to share the link for it but I think have pictures of it on my constant output somewhere. She was my pride and joy. Before I met her, I had absolutely no drive to do anything. I played videogames and slept all day. I skipped class, never studied, and didn't even try becoming a better version of myself. She was a source of inspiration. She pushed me to be a better me and I can't thank her enough for it. I will cherish every moment I spent with her and hold them close to my heart. I'll look back on the memories and experiences we shared with joy and love. I am so proud that I had the chance to love her."]

export const show_screen = ref('landing')

export const images = ['img_1.png', 'img_2.png', 'img_3.png', 'img_4.png', 'img_5.png', 'img_6.png', 'img_7.png', 'img_8.png', 'img_9.png', 'img_10.png']
export const posts = [week_1, week_2, week_3, week_4, week_5, week_6, week_7, week_8, week_9, week_10, week_11, week_12, week_13, week_14, week_15]