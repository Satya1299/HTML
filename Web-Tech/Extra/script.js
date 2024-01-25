var current = null;
document.querySelector("#email").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = animme({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duartion: 700,
      easing: 'easeOutQuart',
    },
    strokeDasharray: {
      value: '240 1386',
      duartion: 700,
      easing: 'easeOutQuart',
    },
  });
});

document.querySelector("#password").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = animme({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duartion: 700,
      easing: 'easeOutQuart',
    },
    strokeDasharray: {
      value: '240 1386',
      duartion: 700,
      easing: 'easeOutQuart',
    },
  });
});
document.querySelector("#submit").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = animme({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duartion: 700,
      easing: 'easeOutQuart',
    },
    strokeDasharray: {
      value: '530 1386',
      duartion: 700,
      easing: 'easeOutQuart',
    },
  });
});

