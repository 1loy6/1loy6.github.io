// Get the button/link element
const Homelink = document.getElementById('homeb');
const Aboutlink = document.getElementById('aboutb');
const Knowlink = document.getElementById('knowb');
const Explink = document.getElementById('expb');
const Projlink = document.getElementById('projb')

// Get the landing page container
const HomePage = document.getElementById('profile');
const AboutPage = document.getElementById('about');
const KnowPage = document.getElementById('knowledge');
const ExpPage = document.getElementById('exp');
const ProjPage = document.getElementById('proj');

// Add event listener to the button/link

Homelink.addEventListener('click', function() {
    HomePage.style.display = 'block';
    HomePage.style.borderBottomStyle = 'solid';
    AboutPage.style.display = 'none';
    KnowPage.style.display = 'none';
    ExpPage.style.display = 'none';
    ProjPage.style.display = 'none';
});
Aboutlink.addEventListener('click', function() {
  // Show the landing page
    HomePage.style.display = 'none';
    AboutPage.style.display = 'block';
    KnowPage.style.display = 'none';
    ExpPage.style.display = 'none';
    ProjPage.style.display = 'none';
});
Knowlink.addEventListener('click', function() {
    HomePage.style.display = 'none';
    AboutPage.style.display = 'none';
    KnowPage.style.display = 'block';
    ExpPage.style.display = 'none';
    ProjPage.style.display = 'none';
});
Explink.addEventListener('click', function() {
    HomePage.style.display = 'none';
    AboutPage.style.display = 'none';
    KnowPage.style.display = 'none';
    ExpPage.style.display = 'block';
    ProjPage.style.display = 'none';
});

