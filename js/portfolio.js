function dynamicProj() {
    var project = window.location.hash.split("/")[1];
    var title = document.querySelector('#pTitleh1');
    var subtitle = document.querySelector('#pTitleh2');
    var date = document.querySelector('#dateh2');
    var deliv = document.querySelector('#deliverablesh2');
    var desc = document.querySelector('#descp')
    if (project == 'nidus'){
      title.innerText = 'Nidus';
      subtitle.innerText = 'Smarthome App Concept';
    }
    else if (project == 'energyumpire'){
      title.innerText = 'Energy Umpire';
      subtitle.innerText = 'Partial Web UI Redesign';
    }
    else if (project == 'darkspede'){
      title.innerText = 'Darkspede';
      subtitle.innerText = 'Prototype Smarthome AI app';
    }
    else if (project == 'icondesigns'){
      title.innerText = 'Icon Designs';
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
