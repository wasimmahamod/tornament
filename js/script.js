
$('.banner-slider').slick({
  slidesToShow:1,
  arrow:true,
  nextArrow:'<button class="l" type="button" ><i class="fas fa-long-arrow-alt-right"></i></button>',
  prevArrow:'<button class="r" type="button" ><i class="fas fa-long-arrow-alt-left"></i></button>',
});
// 

  // Set the date we're counting down to
var countDownDate = new Date("Jan 20, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days
  document.getElementById("hour").innerHTML = hours
  document.getElementById("min").innerHTML = minutes
  document.getElementById("sec").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


$('.about-slider').slick({
  arrow:true,
  nextArrow:'<button class="l" type="button" ><i class="fas fa-long-arrow-alt-right"></i></button>',
  prevArrow:'<button class="r" type="button" ><i class="fas fa-long-arrow-alt-left"></i></button>',
});
new VenoBox({
  selector: '.my-video-links',
});
$('.middel').slick({
  vertical:true,
  slidesToShow: 3,
  asNavFor: '.left-slider',
  centerMode:true,
  centerPadding:"0",
  nextArrow:'<button class="l" type="button" ><i class="fas fa-chevron-down"></i></button>',
  prevArrow:'<button class="r" type="button" ><i class="fas fa-chevron-up"></i></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
       
      
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1,
       
      }
    }
  ]

});
$('.left-slider').slick({
  vertical:true,
  asNavFor: '.middel',
  arrows:false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
       
        slidesToShow: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1,
        
      }
    }
  ]

});
$(document).ready(function(){
        
  $("#colorful").colorfulTab();    
  
  $("#colorful-elliptic").colorfulTab({
      theme: "elliptic"
  }); 
 
 $("#colorful-flatline").colorfulTab({
      theme: "flatline"
  });    
  
  $("#colorful-background-image").colorfulTab({
      theme: "flatline",
      backgroundImage: "true",
      overlayColor: "#002F68",
      overlayOpacity: "0.8"
  });   

});
$(".testislider-1").slick({
  arrows:false,
  slidesToShow:1,
  asNavFor :'.testislider-2',
  responsive: [
    {
      breakpoint: 768,
      settings: {
       
        slidesToShow: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1,
        
      }
    }
  ]

});
$(".testislider-2").slick({
  arrows:false,
  slidesToShow:1,
  asNavFor: '.testislider-1',
  responsive: [
    {
      breakpoint: 768,
      settings: {
       
        slidesToShow: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1,
        
      }
    }
  ]

});
$('.news-slider').slick({
  nextArrow:'<button class="l" type="button" ><i class="fas fa-long-arrow-alt-right"></i></button>',
  prevArrow:'<button class="r" type="button" ><i class="fas fa-long-arrow-alt-left"></i></button>',

});
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);