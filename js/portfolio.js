window.addEventListener('hashchange', function(){
if(window.location.href.indexOf("portfolio/") > -1) {
       alert("Portfolio item detected");
}});

/* OVER THE TOP METHOD
window.addEventListener('hashchange', hello);
window.addEventListener('DOMContentLoaded', hello);
function hello () {
  if (window.location.hash == '#portfolio'){
    setInterval(bgchange, 100);
    //need to set interval because it can't see element on load for some reason
    function bgchange(){
      document.querySelector('#nidus').addEventListener('mouseover', function(){
        document.querySelector('.portPreview').classList.remove('energyumpirebg', 'darkspedebg','icondesignsbg');
        document.querySelector('.portPreview').classList.add('nidusbg')})
      document.querySelector('#energyumpire').addEventListener('mouseover', function(){
        document.querySelector('.portPreview').classList.remove('nidusbg','darkspedebg','icondesignsbg');
        document.querySelector('.portPreview').classList.add('energyumpirebg')})
      document.querySelector('#darkspede').addEventListener('mouseover', function(){
        document.querySelector('.portPreview').classList.remove('nidusbg','energyumpirebg','icondesignsbg');
        document.querySelector('.portPreview').classList.add('darkspedebg')})
      document.querySelector('#icondesigns').addEventListener('mouseover', function(){
        document.querySelector('.portPreview').classList.remove('nidusbg','energyumpirebg', 'darkspedebg');
        document.querySelector('.portPreview').classList.add('icondesignsbg')})
      document.querySelector('.portList').addEventListener('mouseleave', function(){
        document.querySelector('.portPreview').classList.remove('nidusbg','energyumpirebg', 'darkspedebg','icondesignsbg')})
    }
  }
};*/

/* triggered in html*/
function nidusChange(){
  document.querySelector('.portPreview').classList.remove('energyumpirebg', 'darkspedebg','icondesignsbg');
  document.querySelector('.portPreview').classList.add('nidusbg')};

function energyumpireChange(){
  document.querySelector('.portPreview').classList.remove('nidusbg','darkspedebg','icondesignsbg');
  document.querySelector('.portPreview').classList.add('energyumpirebg')};

function darkspedeChange(){
  document.querySelector('.portPreview').classList.remove('nidusbg','energyumpirebg','icondesignsbg');
  document.querySelector('.portPreview').classList.add('darkspedebg')};

function icondesignsChange(){
  document.querySelector('.portPreview').classList.remove('nidusbg','energyumpirebg', 'darkspedebg');
  document.querySelector('.portPreview').classList.add('icondesignsbg')};

function resetList(){
  document.querySelector('.portPreview').classList.remove('nidusbg','energyumpirebg', 'darkspedebg','icondesignsbg')};
