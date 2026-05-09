document.addEventListener('DOMContentLoaded', function () {
  var section = document.getElementById('accomplishments');
  if (!section) return;

  // Wowchemy v5 renders accomplishments as <li> items
  var items = Array.from(section.querySelectorAll('li'));
  var threshold = 3;
  if (items.length <= threshold) return;

  var hiddenItems = items.slice(threshold);
  hiddenItems.forEach(function (item) {
    item.style.display = 'none';
  });

  var remaining = items.length - threshold;
  var btn = document.createElement('button');
  btn.textContent = 'Show ' + remaining + ' more ▾';
  btn.className = 'btn btn-outline-primary btn-sm mt-3';

  var expanded = false;
  btn.addEventListener('click', function () {
    expanded = !expanded;
    hiddenItems.forEach(function (item) {
      item.style.display = expanded ? '' : 'none';
    });
    btn.textContent = expanded
      ? 'Show less ▴'
      : 'Show ' + remaining + ' more ▾';
  });

  var ul = items[0].closest('ul') || items[0].parentNode;
  ul.insertAdjacentElement('afterend', btn);
});
