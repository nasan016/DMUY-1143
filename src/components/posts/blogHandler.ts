import { ref } from 'vue'

const week1 = ref([
    '<WEEK_1>',
    '',
    'This week I decided to practice learning more about UI/UX by building my blog to look like a code editor.',
    'An issue that I have with many modern code editors is that they are very convoluted and hard for people to use.',
    'I decided to simplify the design of the code editor so that it could be more fit for displaying information.',
    '',
    'I plan on implementing new features and improving the stylistic choices made while creating this blog for the first few weeks.',
    '',
    'Eventually, I will experiment with ways to make websites more engaging by building components unrelated to this blog and posting them for people to test out.',
])

const week2 = ref([
    '<WEEK_2>',
    '',
    'This week I cleaned up the code for the blog to get it ready to support mobile devices.',
    'The thing I need to figure out next is how the website will look on a mobile screen.',
    '',
    'Thinking of a design that is responsive, functional and follows the whole aesthetic of the blog is something I\'m currently struggling with.',
])

export const links = [
    week1,
    week2,
]

export const index = ref(0)
export let display = links[index.value]

export const displayUpdate = () => {
    display = links[index.value]
}