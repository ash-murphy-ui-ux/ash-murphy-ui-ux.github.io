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
      desc.innerHTML = 'The Nidus project was created for a university assignment based on a smarthome app concept named "Nidus". The requirements included analysis of user personas and market competition to develop a content strategy, as well as designing of screens for a prototype app. You can view the <a href = "/img/nidus/nidus_content_strategy.pdf"> content strategy document here</a>. The prototype document can be viewed below or  <a href = "/img/nidus/nidus_prototype.pdf">as a PDF here.</a>';
      pImg.innerHTML = '<img class = "pImgInner" alt = "Nidus Page 1" src = "img/nidus/nidus01.jpg"><img class = "pImgInner" alt = "Nidus Page 2" src = "img/nidus/nidus02.jpg"><img class = "pImgInner" alt = "Nidus Page 3" src = "img/nidus/nidus03.jpg"><img class = "pImgInner" alt = "Nidus Page 4" src = "img/nidus/nidus04.jpg"><img class = "pImgInner" alt = "Nidus Page 5" src = "img/nidus/nidus05.jpg"><img class = "pImgInner" alt = "Nidus Page 7" src = "img/nidus/nidus06.jpg"><img class = "pImgInner" alt = "Nidus Page 7" src = "img/nidus/nidus07.jpg"><img class = "pImgInner" alt = "Nidus Page 8" src = "img/nidus/nidus08.jpg"><img class = "pImgInner" alt = "Nidus Page 9" src = "img/nidus/nidus09.jpg"><img class = "pImgInner" alt = "Nidus Page 10" src = "img/nidus/nidus10.jpg"><img class = "pImgInner" alt = "Nidus Page 11" src = "img/nidus/nidus11.jpg"><img class = "pImgInner" alt = "Nidus Page 12" src = "img/nidus/nidus12.jpg"><img class = "pImgInner" alt = "Nidus Page 13" src = "img/nidus/nidus13.jpg"><img class = "pImgInner" alt = "Nidus Page 14" src = "img/nidus/nidus14.jpg"><img class = "pImgInner" alt = "Nidus Page 15" src = "img/nidus/nidus15.jpg">';
    }
    else if (project == 'energyumpire'){
      title.innerText = 'Energy Umpire';
      subtitle.innerText = 'Minor Web UI Redesign';
      date.innerText = 'Nov 2018 - Feb 2019';
      deliv.innerText = 'UI Design, UX Copy';
      desc.innerHTML = '<p>I undertook my work placement unit with Energy Umpire, an energy plan comparison service that is based in Melbourne Docklands. Energy Umpire is a startup and was undergoing a transition from phone based service to web based. They wanted me to help with this transition by designing some emails, flyers, web pages and give feedback on their new onboarding form. I got into a process of designing with Adobe XD, uploading to InVision, then getting feedback from other staff and the CEO. I would then iterate on this feedback until everyone was happy, and the designs were marked on InVision as complete.</p><br><p>While I was there, I was only able to see one of my web page designs be implemented onto the live site, which I needed to help with some aspects as the website was built on wordpress and their wordpress developer was struggling with the design. So unfortunately it was not 100% exactly how I envisioned the page turning out (thanks, Wordpress), but everyone there was impressed with my designs and work ethic. The feedback and encouragement I was given has been invaluable to me and I am so thankful for my time at Energy umpire.</p>';
    }
    else if (project == 'darkspede'){
      title.innerText = 'Phantom Gateway';
      subtitle.innerText = 'Prototype Smarthome AI app';
      date.innerText = 'Nov 2017 - Jan 2018';
      deliv.innerText = 'Branding, UI/UX Design';
      desc.innerHTML = '<p>This project was done as part of a Deakin "Capstone" project in cooperation with Darkspede, a VR software developer based in North Melbourne. Darkspede wanted our student team to build a functional prototype app based on their vision for what a smarthome could be. In essence, Phantom Gateway was your average smarthome app, but would be heavily AI assisted.</p><br><p>Due to the project being under a NDA, not every aspect of the project can be discussed or shown. I can, however, show off some of my contributions to the public presentation we gave. Darkspede was my first project working with a team for a real client, so it was a huge learning opportunity for me. While I have expanded my skills and knowledge since completing this project, I will always remember the experience.</p>'
      pImg.innerHTML = '<img class = "pImgInner" alt = "" src = "img/phantom/phantom01.png"><img class = "pImgInner" alt = "" src = "img/phantom/phantom02.png"><img class = "pImgInner" alt = "" src = "img/phantom/phantom03.jpg"><img class = "pImgInner" alt = "" src = "img/phantom/phantom04.png"><img class = "pImgInner" alt = "" src = "img/phantom/phantom05.png"><img class = "pImgInner" alt = "" src = "img/phantom/phantom06.png">';
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
