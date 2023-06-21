let button = document.getElementById("button");


button.addEventListener('click', () => {

  let section = document.getElementById("section");

  section.style.position = "unset";

  const subpageContainer = document.getElementById('subPage1');


  subpageContainer.scrollIntoView({ behavior: 'smooth' });

  section.style.position = "relative";
});
 

window.addEventListener('scroll', function() {
  var subPage3 = document.getElementById('subPage3');
  var footer = document.getElementById('footer');
  var mobileVideoPink = document.getElementById('videoMobilePink');
  var mobileVideo = document.getElementById('videoMobile');
  var tablet = document.getElementById('tablet');
  var viewportHeight = window.innerHeight;
  var viewportOffset = subPage3.getBoundingClientRect();
  var viewPortOffsetFooter = footer.getBoundingClientRect();
  var halfHeight = viewportHeight / 2;


  if (viewportOffset.top >= -halfHeight && viewportOffset.bottom <= viewportHeight + halfHeight) {
    mobileVideoPink.style.opacity = '1';
    mobileVideo.style.opacity = '0'; 
    mobileVideo.style.transition = 'opacity 3s ease'; 
    mobileVideoPink.style.transition = 'opacity 0.7s ease'; 
 
  } else {

    mobileVideoPink.style.opacity = '0';
    mobileVideo.style.opacity = '1';
    mobileVideoPink.style.transition = 'opacity 0.5s ease';
    mobileVideo.style.transition = 'opacity 0.4s ease'; 
  }
});

window.addEventListener('scroll', function() {
  var subPage3 = document.getElementById('subPage3');
  var footer = document.getElementById('footer');
  var VideoPink = document.getElementById('videoPink');
  var Video = document.getElementById('video');
  var viewportHeight = window.innerHeight;
  var viewportOffset = subPage3.getBoundingClientRect();
  var viewPortOffsetFooter = footer.getBoundingClientRect();
  var halfHeight = viewportHeight / 2;
  var windowWidth = window.innerWidth;

  if (viewportOffset.top >= -halfHeight && viewportOffset.bottom <= viewportHeight + halfHeight) {
    if (windowWidth >= 1250) {
      VideoPink.style.opacity = '1';
    } else {
      VideoPink.style.opacity = '0';
    }
    Video.style.opacity = '0';
    Video.style.transition = 'opacity 2s ease';
    VideoPink.style.transition = 'opacity 2s ease';
  } else {
    VideoPink.style.opacity = '0';
    Video.style.opacity = '1';
    VideoPink.style.transition = 'opacity 0.7s ease';
    Video.style.transition = 'opacity 0.7s ease';
  }
});


window.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');

  function adjustFooterPosition() {
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    if (bodyHeight < windowHeight) {
      footer.style.position = 'fixed';
      footer.style.bottom = 0;
    } else {
      footer.style.position = 'static';
    }
  }

  window.addEventListener('resize', adjustFooterPosition);
  adjustFooterPosition();
});

/*window.addEventListener('load', function() {
  adjustVideoHeight();
  adjustVideoHeight2();
});

function adjustVideoHeight() {
  var footer = document.getElementById('footer');
  var footerPosition = footer.getBoundingClientRect();
  var video = document.getElementById('videoMobile');
  var videoPosition = video.getBoundingClientRect();
  
  var videoHeight = footerPosition.bottom - videoPosition.top;

  video.style.height = videoHeight + 'px';
}

function adjustVideoHeight2() {
  var footer = document.getElementById('footer');
  var footerPosition = footer.getBoundingClientRect();
  var video2 = document.getElementById('videoMobilePink');
  var videoPosition = video2.getBoundingClientRect();
  
  var videoHeight = footerPosition.bottom - videoPosition.top;

  video2.style.height = videoHeight + 'px';
}*/