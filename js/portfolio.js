
document.querySelector('.portfolio').addEventListener('click', projInterval)
function projInterval() {
  var interval = setInterval(function() {
      if (document.querySelector('.portPage').length > 0) {
        dynamicProj();
        clearInterval(interval);
      }
    }, 100);
};

function dynamicProj() {
    var project = window.location.hash.split("/")[1];
    console.log("proj =", project);
    if (project == 'nidus'){
      console.log('nidus page');
      document.querySelector('.pTitle').innerHTML = '<h1>Nidus</h1>';
    }
    else if (project == 'energyumpire'){
      console.log('eu page');
      document.querySelector('.pTitle').innerHTML = '<h1>Energy Umpire</h1>';
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
  document.querySelector('#checkOut').innerHTML = 'Check out a <span style = "font-size: 5vw">Project</span>';
};
