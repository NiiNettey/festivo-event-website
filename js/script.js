!function (a) {
  "use strict";

  a(window).on("load", function () {
    a(".loader-inner").fadeOut(),
      a(".loader").delay(200).fadeOut("slow");
  });

  var s = a(".header"),
    i = s.offset(),
    e = a(".block-top");

  a(window).scroll(function () {
    a(this).scrollTop() > i.top + 100 && s.hasClass("stopping")
      ? (s.addClass("scrolling").removeClass("stopping"), e.addClass("active"))
      : a(this).scrollTop() <= i.top + 100 && s.hasClass("scrolling")
      && (s.removeClass("scrolling").addClass("stopping"), e.removeClass("active"));
  });

  a("a.scroll").smoothScroll({ speed: 800, offset: -55 });

  a(".main-slider").flexslider({
    animation: "fade",
    slideshow: !0,
    directionNav: !1,
    controlNav: !0,
    pauseOnAction: !1,
    animationSpeed: 1000
  });

  var l = a(".mobile-but"),
    t = a(".main-nav ul");

  t.height();

  a(l).on("click", function () {
    a(".toggle-mobile-but").toggleClass("active"),
      t.slideToggle(),
      a(".main-nav li a").addClass("mobile");
    return !1;
  });

  a(window).resize(function () {
    a(window).width() > 320 && t.is(":hidden") && (t.removeAttr("style"), a(".main-nav li a").removeClass("mobile"));
  });

  a(".main-nav li a").on("click", function () {
    a(this).hasClass("mobile") && (t.slideToggle(), a(".toggle-mobile-but").toggleClass("active"));
  });

  a(".background-img").each(function () {
    var s = a(this).children("img").attr("src");
    a(this).css("background-image", 'url("' + s + '")').css("background-position", "initial");
  });

  a(".countdown").countdown("2018/10/20", function (s) {
    a(this).html(s.strftime("%D days %H:%M:%S"));
  });

  a(".block-tabs li").on("click", function () {
    if (!a(this).hasClass("active")) {
      var s = a(this).index() + 1;
      a(".block-tabs li.active").removeClass("active"),
        a(this).addClass("active"),
        a(".block-tab li.active").removeClass("active"),
        a(".block-tab li:nth-child(" + s + ")").addClass("active");
    }
  });


  a(".popup-image").magnificPopup({
    type: "image",
    fixedContentPos: !1,
    fixedBgPos: !1,
    mainClass: "mfp-no-margins mfp-with-zoom",
    image: { verticalFit: !0 },
    zoom: { enabled: !0, duration: 300 }
  });


  a(".block-filter li a").on("click", function (s) {
    s.preventDefault();
    a(this).addClass("active");
    a(this).parent().siblings().find("a").removeClass("active");
    var i = a(this).attr("data-filter");
    a(this).closest(".gallery").find(".block-card").removeClass("disable");
    if ("all" !== i) {
      var e = a(this).closest(".gallery").find(".block-card");
      for (var l = 0; l < e.length; l++) {
        e.eq(l).hasClass(i) || e.eq(l).addClass("disable");
      }
    }
  });

  new Instafeed({
    get: "user",
    userId: "8525288462",
    accessToken: "8525288462.c89df6a.5ee63eddf7f148bb9cc56a56edbdc00e",
    limit: 8,
    resolution: "standard_resolution",
    template: '<li class="list-inline-item"><a class="hover-effect" target="_blank" href="{{link}}"><img src="{{image}}" /></a></li>'
  }).run();

  var c = {
    profile: { screenName: "mutationthemes" },
    domId: "block-tweets",
    maxTweets: 2,
    showRetweet: !1,
    showImages: !1,
    showUser: !0,
    showTime: !0,
    customCallback: function (s) {
      var i = s.length,
        e = 0,
        l = a(".block-tweets"),
        t = a("<ul>").addClass("slides");

      for (; e < i;) {
        var o = a("<li>");
        o.html(s[e]),
          t.append(o),
          e++;
      }

      return l.html(t),
        a(".block-tweets").flexslider({
          animation: "slide",
          controlNav: !0,
          directionNav: !1
        }),
        t;
    }
  };

  twitterFetcher.fetch(c);

}(jQuery);
(function() {
  emailjs.init('JyI72cHyHvRQozjeL'); // Replace with your actual public key
})();

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  emailjs.sendForm('service_aouqtjo', 'template_6a010ui', this)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById('formMessage').innerText = "Message Sent Successfully! 🎉";
      form.reset(); // Reset the form after sending the message
    }, function(error) {
      console.log('FAILED...', error);
      document.getElementById('formMessage').innerText = "Message Failed ❌. Please try again later.";
    });
});