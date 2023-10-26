const file = document.getElementById('file')
const img = document.querySelector('#image')
const personName = document.getElementById('name')
const personTitle = document.getElementById('title')
const personStartDate = document.getElementById('jobStartDate')
const personEndDate = document.getElementById('jobEndDate')
const colStartDate = document.getElementById('startDate')
const colEndDate = document.getElementById('endDate')
const jobMessage = document.getElementById('jobMessage')
const ColMessage = document.getElementById('ColMessage')
const desc = document.getElementById('desc')
const skill = document.getElementById('skill')
const topSection = document.getElementById('cvTop')
const experienceSection = document.querySelector('.cvExperienceDiv')
const cvProfileSection = document.querySelector('.cvProfileSection')
const cvContainer = document.querySelector('.cvContainer')
const mainButton = document.getElementById('previewBtn')
const newExperienceDiv = document.getElementById('newExp') 
const experienceBtn = document.getElementById('addCompBtn')

let cvCont = document.getElementById('cvContainer')
let downloadBtn = document.getElementById('downloadBtn')
downloadBtn.onclick = (e) => html2pdf(cvCont)



desc.addEventListener('click', ()=>{
let start = personStartDate.value
let end = personEndDate.value
let s = new Date(start)
let e = new Date(end)
let currentDate = new Date()

if(e <= s || s >= currentDate || e > currentDate){
  jobMessage.style.display = 'block' 
  desc.style.backgroundColor = '#ff000059'
  personEndDate.style.border = '2px solid red'
  desc.style.border = '2px solid red' 
}else{
  jobMessage.style.display = 'none' 
  desc.style.backgroundColor = '#d6e6e7a4'
  personEndDate.style.border = '2px solid transparent'
  desc.style.border = '2px solid transparent'
}
})

skill.addEventListener('click', ()=>{
let cStart = colStartDate.value
let cEnd = colEndDate.value
let cS = new Date(cStart)
let cE = new Date(cEnd)
let currentDate = new Date()

if(cE <= cS || cS >= currentDate || cE > currentDate){
  ColMessage.style.display = 'block' 
  skill.style.backgroundColor = '#ff000059'
  colEndDate.style.border = '2px solid red'
  skill.style.border = '2px solid red' 
}else{
  ColMessage.style.display = 'none' 
  skill.style.backgroundColor = '#d6e6e7a4'
  colEndDate.style.border = '2px solid transparent'
  skill.style.border = '2px solid transparent'
}
})



file.addEventListener('change', function(){
  const choosedFile = this.files[0]
  if(choosedFile){
      const reader = new FileReader();
      
      reader.addEventListener('load', function(){
         img.setAttribute('src', reader.result)  
      })
      reader.readAsDataURL(choosedFile)
  }
})



mainButton.addEventListener('click', canWeSubmitForm);

const allInputs = document.querySelectorAll('.input');


let needInputArray = [];

let index;


function canWeSubmitForm(e) {
  e.preventDefault();
  
  const btn = e.target;

  allInputs.forEach(input => {
    input.style.border = 'none';
    
    
    if (input.value === '') {
      
      needInputArray.push(input);
    }

    input.addEventListener('input', () => {
      
      input.style.border = 'none';
    
      index = needInputArray.indexOf(input);
      if (index > -1) {
        
        needInputArray.splice(index, 1);
        
        console.log(needInputArray);
      }
    })
  });

  
  
  

  
  if (needInputArray.length !== 0) {
    
    needInputArray.forEach(input => {
      
      input.style.border = '2px solid red'
    });

    
  } 

  else {
    
    submitForm(btn);
    
  }
};

function submitForm(btn){
  
  cvContainer.style.display = 'block'
  downloadBtn.style.display = 'block'
  mainButton.style.display = 'none'
   
    let pImage = btn.parentElement.parentElement.children[0].children[0].children[0].src

    let pName = btn.parentElement.parentElement.children[0].children[1].children[1].children[1].value
    

    let pTitle = btn.parentElement.parentElement.children[0].children[1].children[2].children[1].value
   
    let pTelNumber = btn.parentElement.parentElement.children[0].children[2].children[1].children[1].value

    let pEmail = btn.parentElement.parentElement.children[0].children[2].children[2].children[1].value

    let pWebsite = btn.parentElement.parentElement.children[0].children[2].children[3].children[1].value
    

    
    let expSection = btn.parentElement.parentElement.children[1]
    let companyName = expSection.children[1].children[0].children[0].children[1].value
   
    let jobTitle = expSection.children[1].children[0].children[1].children[1].value

    let startDate = expSection.children[1].children[1].children[0].children[1].value

    let endDate = expSection.children[1].children[1].children[1].children[2].value

    let jobDescription = expSection.children[1].children[2].children[1].value
  
     
    
    let profileSummary = btn.parentElement.parentElement.children[2].children[1].children[1].value
 
    let certificate = btn.parentElement.parentElement.children[2].children[2].children[0].children[0].children[1].value
   
    let collegeName = btn.parentElement.parentElement.children[2].children[2].children[0].children[1].children[1].value
    
    let colStartDate = btn.parentElement.parentElement.children[2].children[2].children[1].children[0].children[1].value
  
    let colEndDate = btn.parentElement.parentElement.children[2].children[2].children[1].children[1].children[2].value
   
    let pSkill = btn.parentElement.parentElement.children[2].children[3].children[0].children[0].children[1].children[0].value
  
    let pHobby = btn.parentElement.parentElement.children[2].children[3].children[0].children[1].children[1].children[0].value
   
  
 
let imageDiv = document.createElement('div')
imageDiv.classList.add('cvTopDiv')
imageDiv.innerHTML = `<img src="${pImage}">`

let pNameTitle = document.createElement('div')
pNameTitle.classList.add('cvNameDiv')

let pNameEntered = document.createElement('div')
pNameEntered.classList.add('cvName')
pNameEntered.innerHTML = `<h2>${pName}</h2>`
pNameTitle.appendChild(pNameEntered)


let pTitleEntered = document.createElement('div')
pTitleEntered.classList.add('cvProff')
pTitleEntered.innerHTML = `<p>${pTitle}</p>`
pNameTitle.appendChild(pTitleEntered)


let contactDiv = document.createElement('div')
contactDiv.classList.add('cvContactDiv') 


let telNumber = document.createElement('div')
telNumber.innerHTML =  `<i class='bx bx-phone icon' ></i>
                        <h4>${pTelNumber}</h4>`
contactDiv.appendChild(telNumber)   


let emialEntered = document.createElement('div')
emialEntered.innerHTML = `  <i class='bx bx-mail-send icon'></i>
                            <h4>${pEmail}</h4>`
contactDiv.appendChild(emialEntered) 


let websiteEntered = document.createElement('div')
websiteEntered.innerHTML = `  <i class='bx bx-globe icon'></i>
                              <h4>${pWebsite}</h4>`
contactDiv.appendChild(websiteEntered) 


topSection.appendChild(imageDiv)
topSection.appendChild(pNameTitle)
topSection.appendChild(contactDiv)

let companyDetail = document.createElement('div')
companyDetail.classList.add('companyDetails')
experienceSection.style.marginTop = '2rem'



let compName = document.createElement('div')
compName.innerHTML = `<h3 class="titles">PREVIOUS JOB</h3><p class="companyName">${companyName}</p>`
companyDetail.appendChild(compName)


let jobT = document.createElement('div')
jobT.innerHTML = `<p class="jobTitle">${jobTitle}</p>`
companyDetail.appendChild(jobT)


let dates = document.createElement('div')
dates.classList.add('dates')


let strtDate = document.createElement('div')
strtDate.classList.add('startDate')
strtDate.innerHTML = `${startDate}`
dates.appendChild(strtDate) 


let end_Date = document.createElement('div')
end_Date.classList.add('endDate')
end_Date.innerHTML = `${endDate}`
dates.appendChild(end_Date) 


let jobDesc = document.createElement('div')
jobDesc.classList.add('jobDesc')
jobDesc.innerHTML = `${jobDescription}`


experienceSection.appendChild(companyDetail)
experienceSection.appendChild(dates)
experienceSection.appendChild(jobDesc)


let pSummary = document.createElement('div')
pSummary.classList.add('pSummary')
pSummary.innerHTML = ` <h3 class="titles">Profile</h3>
<p>
${profileSummary}
</p>` 


let collegeCert = document.createElement('div')
collegeCert.classList.add('colCert')
collegeCert.innerHTML = `<h3 class="titles">EDUCATION</h3><h4 class="cerficate">${certificate}</h4>
<p class="college">${collegeName}</p>`

let collegeDates = document.createElement('div')
collegeDates.classList.add('collegeDatesDiv')
collegeDates.innerHTML = 
` <div class="collegeStartDate">${colStartDate}</div>
<div class="collegeEndDate">${colEndDate}</div>`


let skillHobby = document.createElement('div')
skillHobby.classList.add('skillHobbyDiv')
skillHobby.innerHTML = 
`<div class="personSkills">
<h3 class="titles">EXPERTISE</h3>
${pSkill}</div>
<div class="personHobby">
<h3 class="titles">HOBBIES</h3>
${pHobby}
</div>`

cvProfileSection.appendChild(pSummary)
cvProfileSection.appendChild(collegeCert)
cvProfileSection.appendChild(collegeDates)
cvProfileSection.appendChild(skillHobby)
};