const body = document.body
const header = document.createElement('header')

const header_top = document.createElement('div')
header_top.classList.add('header_top')

const logo_img = document.createElement('img')
logo_img.src = './img/someloge.png'

const h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'

const nav = document.createElement('nav')
const ul = document.createElement('ul')
ul.classList.add('menu')

const arr = ['Главная', 'О приложении', 'О проекте', 'Скачать', 'Конатакты']
for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.classList.add('menu_item')
    a.textContent = arr[i]
    li.append(a)
    ul.append(li)
}

const main = document.createElement('main')
const section = document.createElement('section')
const question_block = document.createElement('div')
question_block.classList.add('question_block')


for (let i = 0; i < 3; i++) {
    const question = document.createElement('div')
    question.classList.add('question')
    const img = document.createElement('img')
    img.src = './img/rawpixel-196464-unsplash.png'
    const p = document.createElement('p')
    p.textContent = 'Часто ли Вы опаздываете на работу (учёбу)?'
    question.append(img, p)

    question_block.append(question)
}


const section2 = document.createElement('section')
const muken_18 = document.createElement('div')
muken_18.classList.add('muken_18')
const h2 = document.createElement('h2')
h2.textContent = 'О приложении'
const muken = document.createElement('div')
muken.classList.add('muken')
const video = document.createElement('img')
video.classList.add('video')
video.src = './img/rawpixel-559744-unsplash.jpg'
const play = document.createElement('img')
play.classList.add('play')
play.src = './img/play-button.png'

const section3 = document.createElement('section')
section3.classList.add('section3')

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')

const wrap = document.createElement('div')
wrap.classList.add('wrap')
for (let i = 0; i < 5; i++) {
    const img = document.createElement('img')
    img.src = './img/question.png'
    wrap.append(img)
}


const section4 = document.createElement('section')
const proect = document.createElement('div')
proect.classList.add('proect')

const text = document.createElement('h1')
text.textContent = 'О проекте'

const diiiv = document.createElement('div')
diiiv.classList.add('diiiv')

const p = document.createElement('p')
p.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные
бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их
бизнеса: от разработки идеи до ее реализации.`


const section5 = document.createElement('section')
const div_h2 = document.createElement('div')
div_h2.classList.add('h2')
const download = document.createElement('h2')
download.textContent = 'Скачать'

const pop = document.createElement('div')
pop.classList.add('pop')
const pop_img = document.createElement('img')
pop_img.src = './img/android.png'
const pop_img2 = document.createElement('img')
pop_img2.src = './img/icon.png'
const android = document.createElement('div')
android.classList.add('android')
const android_p = document.createElement('p')
android_p.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель.
Опытные
бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития
их
бизнеса: от разработки идеи до ее реализации.`


const footer = document.createElement('footer')
footer.classList.add('footer')

const some_footer = document.createElement('div')
some_footer.classList.add('footer1')
const some = document.createElement('div')
some.classList.add('some')
const some_h2 = document.createElement('h2')
some_h2.textContent = 'SOME'

const some_footer2 = document.createElement('ddiv')
some_footer2.classList.add('footer2')

const some_img1 = document.createElement('img')
some_img1.src = './img/vk.png'
const some_img2 = document.createElement('img')
some_img2.src = './img/facebook.png'
const some_img3 = document.createElement('img')
some_img3.src = './img/instagram (1).png'

const text_tet = document.createElement('div')
text_tet.classList.add('text')

const text_p1 = document.createElement('p')
text_p1.textContent = 'Контакты'
const text_p2 = document.createElement('p')
text_p2.textContent = 'Адреса'
const text_p3 = document.createElement('p')
text_p3.textContent = 'Помощь'





text_tet.append(text_p1, text_p2, text_p3)
some_footer2.append(some_img1, some_img2, some_img3)
some.append(some_h2)
some_footer.append(some, some_footer2, text_tet)
footer.append(some_footer)
android.append(android_p)
pop.append(pop_img, pop_img2)
div_h2.append(download)
section5.append(div_h2, pop, android)
diiiv.append(p)
proect.append(text)
section4.append(proect, diiiv,)
wrapper.append(wrap)
section3.append(wrapper)
muken.append(video, play)
muken_18.append(h2, muken)
section2.append(muken_18)
section.append(question_block)
main.append(section, section2, section3, section4, section5)
header_top.append(logo_img, h1)
nav.append(ul)
header.append(header_top, nav)
body.append(header, main, footer)






const section2 = document.createElement('section')
const appendix_block = document.createElement('div')
appendix_block.classList.add('appendix_block')
const appendix_p = document.createElement('p')
appendix_p.textContent = 'О приложении'
const appendix = document.createElement('div')
appendix.classList.add('appendix')
const append_img_box = document.createElement('div')
append - img - box.classList.add('append_img_box')
const video_img = document.createElement('img')
video_img.src = './img/video.png'
const play = document.createElement('div')
play.classList.add('play')
const play_img = document.createElement('img')
play_img.src = './img/play.png" alt'


nav.append(ul)
body.append(header, main)
header.append(header_top, nav)
header_top.append(img, h1)








