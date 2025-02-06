// loader fadeout after 500 ms
$(window).on("load", function () {
  $(".loader .inner").fadeOut(500, function () {
    $(".loader").fadeOut(750);
  });

  // filter all portfolio
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });
});

$(document).ready(function () {
  // Sliders
  $("#slides").superslides({
    animation: "fade",
    play: 4000,
    pagination: false
  });

  // Typed letter one by one
  var typed = new Typed(".typed", {
    strings: ["Software Engineer", "Web Developer", "Student"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  // Skills section
  $(".owl-carousel").owlCarousel({
    loop: false,
    autoplay: false,
    autoplayHoverPause: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  // Skill section animation will play when we go that part
  var skillsTopOfset = $(".skillsSection").offset().top;
  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;

  $(window).scroll(function () {
    if (window.pageYOffset > skillsTopOfset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el).find(".percent").text(Math.round(percent));
        }
      });
    }

    // Stats section countup animation
    if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
      $(".counter").each(function () {
        var element = $(this);
        var endVal = parseInt(element.text());

        element.countup(endVal);
      });

      countUpFinished = true;
    }
  });

  $("[data-fancybox]").fancybox();

  //filter portfolio
  $("#filters a").click(function () {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });

    return false;
  });

  // Smooth transition to nave menu

  $("#navigation li a").click(function (e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  // Make navigation Sticky
  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
