window.requestAnimFrame = function () {return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {window.setTimeout(a, 1E3 / 60);};}();

var cw,
ch,
mx,
my,
orbs,
count,
radiusMin,
radiusMax,
manual,
tick;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function norm(val, min, max) {
  return (val - min) / (max - min);
}

function lerp(norm, min, max) {
  return (max - min) * norm + min;
}

function map(val, smin, smax, dmin, dmax) {
  return lerp(norm(val, smin, smax), dmin, dmax);
}

function init() {
  orbs = [];
  count = 100;
  pi2 = Math.PI * 2;
  radiusMin = 1;
  radiusMax = 15;
  reset();
  loop();
}

function reset() {
  cw = window.innerWidth;
  ch = window.innerHeight;
  manual = false;
  tick = 0;
  orbs.length = 0;
  setAuto();
  orbsCreate();
}

function orbsCreate() {
  var i = 0;
  for (; i < count; i++) {
    var elem = document.createElement('div'),
    orb = {
      elem: elem,
      x: mx,
      y: my,
      ox: mx,
      oy: my,
      vx: 0,
      vy: 0,
      radius: map(i, 0, count - 1, radiusMin, radiusMax) };

    elem.className = 'orb';
    elem.style.width = orb.radius * 2 + 'px';
    elem.style.height = orb.radius * 2 + 'px';
    elem.style.backgroundColor = 'hsla(220, 45%, 60%, 0.5)';
    orbs.push(orb);
    document.body.appendChild(elem);
  }
}

function orbsLoop() {
  var i = 0;
  for (; i < count; i++) {
    var orb = orbs[i],
    sens = map(count - i + 1, 1, count, 5, 10),
    alpha = map(i, 0, count, 0.05, 0.5),
    dx = mx - orb.x,
    dy = my - orb.y,
    ax = dx * 0.15 / sens,
    ay = dy * 0.15 / sens;

    orb.vx += ax + rand(-i / 80, i / 80);
    orb.vy += ay + rand(-i / 80, i / 80);
    orb.vx *= 0.95;
    orb.vy *= 0.95;
    orb.x += orb.vx;
    orb.y += orb.vy;

    if (Modernizr.csstransforms3d) {
      orb.elem.style['-webkit-transform'] = 'translate3d(' + (orb.x - orb.radius) + 'px, ' + (orb.y - orb.radius) + 'px, 0)';
      orb.elem.style['transform'] = 'translate3d(' + (orb.x - orb.radius) + 'px, ' + (orb.y - orb.radius) + 'px, 0)';
    } else if (Modernizr.csstransforms) {
      orb.elem.style['-webkit-transform'] = 'translate(' + (orb.x - orb.radius) + 'px, ' + (orb.y - orb.radius) + 'px)';
      orb.elem.style['transform'] = 'translate(' + (orb.x - orb.radius) + 'px, ' + (orb.y - orb.radius) + 'px)';
    } else {
      orb.elem.style.left = orb.x - orb.radius + 'px';
      orb.elem.style.top = orb.y - orb.radius + 'px';
    }
  }
}

function setAuto() {
  if (!manual) {
    mx = cw / 2 + Math.cos(tick / 15) * (cw / 6);
    my = ch / 2 + Math.sin(tick / 15) * (ch / 8);
  }
}

function mousemove(e) {
  manual = true;
  mx = e.clientX;
  my = e.clientY;
}

function mousedown(e) {
  e.preventDefault();
  var i = 0;
  for (; i < count; i++) {
    var orb = orbs[i];
    orb.vx += rand(-50, 50);
    orb.vy += rand(-50, 50);
  }
}

function touchmove(e) {
  e.preventDefault();
}

function loop() {
  window.requestAnimationFrame(loop);
  setAuto();
  orbsLoop();
  tick++;
}

document.addEventListener('touchstart', mousedown, false);
document.addEventListener('mousedown', mousedown, false);
document.addEventListener('mousemove', mousemove, false);

init();