// These JavaScript functions manipulates the html pages
// Some of these functions are directly called because their functionality is being specified in MaterializeCSS
// This file is connected to every html page except index.html
window.onscroll = function() {
  navbarViewEngineForLargeScreens(); // Function for showing thw navbar after some scrolling
}

function navbarViewEngineForLargeScreens() {
  if (window.innerWidth > 760) {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById('large-screen-nav').style.display = "block";
    } else {
      document.getElementById('large-screen-nav').style.display = "none";
    }
  }
}

// For sharing button
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {});
});

// For large nav dropdowns
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelectorAll('.dropdown-trigger');
  const dropdownElem = M.Dropdown.init(dropdown, {
    coverTrigger: false,
    constrainWidth: false,
    inDuration: 200,
    hover: true,
    alignment:'right',
    closeOnClick: false
  });

  const sub_dropdown = document.querySelector('.sub-dropdown');
  const sub_dropdownElem = M.Dropdown.init(sub_dropdown, {
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
    hover: true,
    coverTrigger: false,
    alignment: 'left'
  });
});

// For Sidenav
document.addEventListener('DOMContentLoaded', function() {
  const sidenav = document.querySelector('.sidenav');
  const sidenavInstance = M.Sidenav.init(sidenav, {
    edge: "right",
    inDuration: 400,
    preventScrolling: false
  });
});

// For sidenav About Us dropdown
function toggleAboutusDropdown(dropdown) {
  const dropdownContentStyle = document.getElementById(dropdown);
  if (dropdownContentStyle.style.display == "none") {
    document.getElementById(dropdown).style.display = "block";
  } else {
    document.getElementById(dropdown).style.display = "none";
  }
}
