// A $( document ).ready() block.
// $(document).ready(function () {
//     $(".dropdown-trigger").dropdown();
//     console.log("ready!");
// });

document.addEventListener('DOMContentLoaded', function () {
	const parallaxEffect = document.querySelectorAll('.parallax');
	M.Parallax.init(parallaxEffect, {});
});

document.addEventListener('DOMContentLoaded', function () {
	const elems = document.querySelectorAll('.sidenav');
	M.Sidenav.init(elems, { edge: 'right' });
});

document.addEventListener('DOMContentLoaded', function () {
	const dropdowns = document.querySelectorAll('.dropdown-trigger');
	M.Dropdown.init(dropdowns, {
		hover: true,
		coverTrigger: false,
		constrainWidth: false,
	});
});

// document.addEventListener('DOMContentLoaded', function () {
//     const carousels = document.querySelectorAll('.carousel');
//     M.Carousel.init(carousels, {
//         fullWidth: true

//     });
// });

document.addEventListener('DOMContentLoaded', function () {
	const elems = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(elems, {});
});

// $(() => {
//     $("#includeFooter").load("footer.html");
// });

// $(() => {
//     $("#includeNavigation").load("navigation.html");
// });
