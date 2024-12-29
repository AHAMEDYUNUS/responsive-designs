

const scrollRevealOption = {
	origin: 'bottom',
	distance:'50px',
	duration: 2500,
};

ScrollReveal().reveal('.header_image img', {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal('.header_content p', {
	...scrollRevealOption,
	delay: 500,
});

ScrollReveal().reveal('.header_content h1', {
	...scrollRevealOption,
	delay: 1000,
});

ScrollReveal().reveal('.header_btns', {
	...scrollRevealOption,
	delay: 1500,
});

ScrollReveal().reveal('.dest_card', {
	...scrollRevealOption,
	interval: 500,
});



ScrollReveal().reveal('.showcase_image img', {
	...scrollRevealOption,
	origin: 'left',
	delay: 500,
});

ScrollReveal().reveal('.showcase_content h4', {
	...scrollRevealOption,
	delay: 1000,
});

ScrollReveal().reveal('.showcase_content p', {
	...scrollRevealOption,
	delay: 1500,
});

ScrollReveal().reveal('.showcase_btn', {
	...scrollRevealOption,
	delay: 1700,
});

ScrollReveal().reveal('.banner_card', {
	...scrollRevealOption,
	interval: 500,
});


ScrollReveal().reveal('.discover_card', {
	...scrollRevealOption,
	interval: 500,
});

