const speakersDetails = [
    {
        image:'imgs/Acuff.jpg',
        name:'Yochai Benkler',
        positioin:'Leadership Expert; Inc. Top 100 Leadership Speaker; New York Times Best-Selling Author',
        background:'Founding Pastor, Fellowship Church; Founder & CEO, the Greatest Story, Inc.; President, Harambee Ministries;Board Member, Global Leadership Network; Author',
    },    {
        image:'',
        name:'',
        positioin:'',
        background:'',
    },    {
        image:'',
        name:'',
        positioin:'',
        background:'',
    },    {
        image:'',
        name:'',
        positioin:'',
        background:'',
    },    {
        image:'',
        name:'',
        positioin:'',
        background:'',
    },    {
        image:'',
        name:'',
        positioin:'',
        background:'',
    },
]

function gnerateSpeaker({
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




const speakersleft =document.querySelector ('.left');
const speakersright =  document.querySelector ('.right');

const speakerArr= speakersDetails.map((speaker) => gnerateSpeaker(speaker));
speakersleft.innerHTML=speakerArr.slice(0,3).join('');
speakersright.innerHTML=speakerArr.slice(3, ).join('');

