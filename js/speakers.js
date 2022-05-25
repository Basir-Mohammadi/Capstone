

const speakersDetails = [
    {
        image:'imgs/Acuff.jpg',
        name:'Yochai Benkler',
        positioin:'Leadership Expert; Inc. Top 100 Leadership Speaker; New York Times Best-Selling Author',
        background:'Founding Pastor, Fellowship Church; Founder & CEO, the Greatest Story, Inc.; President, Harambee Ministries;Board Member, Global Leadership Network; Author',
    },    {
        image:'imgs/Stephanie-Chung.jpg',
        name:'Stephanie Chung',
        positioin:'Chief Growth Officer, Wheels Up; Former President, JetSuite; Advisory Council, National Business Aviation Association',
        background:'Chief Growth Officer, Wheels Up; Former President, JetSuite; Advisory Council, National Business Aviation Association',
    },    {
        image:'imgs/Sahar-Hashemi.jpg',
        name:'Sahar Hasheni',
        positioin:'Founder, Coffee Republic; Founder, Skinny Candy; Non-Executive Director, Scale Up Institute; Best-Selling Author',
        background:'Founder, Coffee Republic; Founder, Skinny Candy; Non-Executive Director, Scale Up Institute; Best-Selling Author',
    },    {
        image:'imgs/Lynsi-Snyder.jpg',
        name:'Lynsi Snyder',
        positioin:'Owner & President, In-N-Out Burger; Founder, Army of Love',
        background:'Owner & President, In-N-Out Burger; Founder, Army of Love',
    },    {
        image:'imgs/Johnny-C-Taylor-Jr.jpg',
        name:'Johnny Taylor',
        positioin:'President & CEO, SHRM, the Society for Human Resource Management; Former President & CEO, Thurgood Marshall College Fund; Best-Selling Author',
        background:'President & CEO, SHRM, the Society for Human Resource Management; Former President & CEO, Thurgood Marshall College Fund; Best-Selling Author',
    },    {
        image:'imgs/Andy-Stanley-2022.jpg',
        name:'Andy Stanly',
        positioin:'Founder & Pastor, North Point Ministries; Host, Your Move with Andy Stanley ; Best-Selling Author',
        background:'Founder & Pastor, North Point Ministries; Host, Your Move with Andy Stanley ; Best-Selling Author',
    },
]

function generateSpeaker({
    image,name,positioin,background
}){
    return `
    <div class="speakers-details">
    <div class="speaker-image">
      <img src=${image} alt="speaker-image">
    </div>
     <div class="speakers-personal-details">
    <div class="speaker-name">
      ${name}
    </div>
    <div class="speaker-position">${positioin}</div>
    <div class="speaker-background">${background}
    </div>
    </div>
    </div>
    `
}



const speakersleft = document.querySelector ('.left');
const speakersright =  document.querySelector ('.right');

const speakerArr= speakersDetails.map((speaker) => generateSpeaker(speaker));
speakersleft.innerHTML=speakerArr.slice(0,3).join('');
speakersright.innerHTML=speakerArr.slice(3, ).join('');


// See More
const speakerslist = document.querySelector ('.speakers');

const seeMorebutton = document.createElement('div');
seeMorebutton.classList.add('more');
seeMorebutton.innerHTML = 'MORE <img src="imgs/dropdown.png" alt="">';
speakerslist.append(seeMorebutton);

const seeLessbutton = document.createElement('div');
seeLessbutton.classList.add('less more');
seeLessbutton.innerHTML = 'LESS <img src="imgs/dropdown.png" alt="">';
speakerslist.append(seeLessbutton);
seeLessbutton.style.display = 'none';

const more = document.querySelector('.more');
more.addEventListener('click', () => {
  speakerslist.innerHTML = speakerArr.join('');
  speakerslist.append(seeLessbutton);

  seeLessbutton.style.display = 'flex';
  seeMorebutton.style.display = 'none';
});

const less = document.querySelector('.less');
less.addEventListener('click', () => {
  speakerslist.innerHTML = speakerArr.slice(0, 2).join('');
  speakerslist.append(seeMorebutton);
  seeLessbutton.style.display = 'none';
  seeMorebutton.style.display = 'flex';
});