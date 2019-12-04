function dynamicProj() {
    var project = window.location.hash.split("/")[1];
    var title = document.querySelector('#pTitleh1');
    var subtitle = document.querySelector('#pTitleh2');
    var date = document.querySelector('#dateh2');
    var deliv = document.querySelector('#deliverablesh2');
    var desc = document.querySelector('#descp');
    var pImg = document.querySelector('.pImg');
    if (project == 'nidus'){
      title.innerText = 'Nidus';
      subtitle.innerText = 'Smarthome App Concept';
      date.innerText = 'March - June 2019';
      deliv.innerText = 'UI/UX Design, Branding';
      pImg.innerHTML = '<img class = "pImgInner" alt = "Nidus Page 1" src = "img/nidus/nidus01.jpg"><img class = "pImgInner" alt = "Nidus Page 2" src = "img/nidus/nidus02.jpg"><img class = "pImgInner" alt = "Nidus Page 3" src = "img/nidus/nidus03.jpg"><img class = "pImgInner" alt = "Nidus Page 4" src = "img/nidus/nidus04.jpg"><img class = "pImgInner" alt = "Nidus Page 5" src = "img/nidus/nidus05.jpg"><img class = "pImgInner" alt = "Nidus Page 7" src = "img/nidus/nidus06.jpg"><img class = "pImgInner" alt = "Nidus Page 7" src = "img/nidus/nidus07.jpg"><img class = "pImgInner" alt = "Nidus Page 8" src = "img/nidus/nidus08.jpg"><img class = "pImgInner" alt = "Nidus Page 9" src = "img/nidus/nidus09.jpg"><img class = "pImgInner" alt = "Nidus Page 10" src = "img/nidus/nidus10.jpg"><img class = "pImgInner" alt = "Nidus Page 11" src = "img/nidus/nidus11.jpg"><img class = "pImgInner" alt = "Nidus Page 12" src = "img/nidus/nidus12.jpg"><img class = "pImgInner" alt = "Nidus Page 13" src = "img/nidus/nidus13.jpg"><img class = "pImgInner" alt = "Nidus Page 14" src = "img/nidus/nidus14.jpg"><img class = "pImgInner" alt = "Nidus Page 15" src = "img/nidus/nidus15.jpg">';    }
    else if (project == 'energyumpire'){
      title.innerText = 'Energy Umpire';
      subtitle.innerText = 'Minor Web UI Redesign';
      date.innerText = 'Nov 2018 - Feb 2019';
      deliv.innerText = 'UI Design, UX Copy';
    }
    else if (project == 'darkspede'){
      title.innerText = 'Phantom Gateway';
      subtitle.innerText = 'Prototype Smarthome AI app';
      date.innerText = 'Nov 2017 - Jan 2018';
      deliv.innerText = 'UI/UX Design';
    }
    else if (project == 'icondesigns'){
      title.innerText = 'Icon Designs';
      subtitle.innerText = 'When I have spare time';
      date.innerText = 'Ongoing'
      deliv.innerText = 'Icons';
    }
};

/* triggered in html*/
function nidusChange(){
  document.querySelector('.portPreview').classList.remove('energyumpirebg', 'darkspedebg','icondesignsbg');
  document.querySelector('#checkOut').innerHTML = '';
  document.querySelector('.portPreview').classList.add('nidusbg')};

function energyumpireChange(){
  document.querySelector('.portPreview').classList.remove('nidusbg','darkspedebg','icondesignsbg');
  document.querySelector('#checkOut').innerHTML = '';
  document.querySelector('.portPreview').classList.add('energyumpirebg')};

function darkspedeChange(){
  document.querySelector('.portPreview').classList.remove('nidusbg','energyumpirebg','icondesignsbg');
  document.querySelector('#checkOut').innerHTML = '';
  document.querySelector('.portPreview').classList.add('darkspedebg')};

function icondesignsChange(){
  document.querySelector('.portPreview').classList.remove('nidusbg','energyumpirebg', 'darkspedebg');
  document.querySelector('#checkOut').innerHTML = '';
  document.querySelector('.portPreview').classList.add('icondesignsbg')};

function resetList(){
  document.querySelector('.portPreview').classList.remove('nidusbg','energyumpirebg', 'darkspedebg','icondesignsbg');
  document.querySelector('#checkOut').innerHTML = '<span class = "textCheck">Check</span><br><span class = "textOuta">out a</span><br> <span class = "textProject">Project</span>';
};
