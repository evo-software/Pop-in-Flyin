

const inktnerParent = document.querySelector('.myElement'),

	inkform = document.querySelector('.myElement > .col-md-12');

// Add the Title , Close icon, warning messages	  
inktnerParent.insertAdjacentHTML('afterbegin', `<h1>${myEvoXPopinTitle}</h1>`);
inktnerParent.insertAdjacentHTML('afterbegin', `<i class="material-icons close">close</i>`);


// Add if it's an image slider - this is really only for the discount example
if (document.querySelector('.myElement').parentElement.classList.contains('singlebanner_wrapper')) {

	// Add the discount button
	inktnerParent.insertAdjacentHTML('beforeend', `<a onclick="applyMyDiscount('${promotionPopinDiscX}')"><button id="applyDiscountButton" type="button" class="btn btn-primary btn-sm" ><i class='fa fa-circle-o-notch fa-spin'></i>Apply Discount</button></a>`);

	//Add item to the cart warning message
	let findDiscountButton = document.querySelector('#applyDiscountButton');
	findDiscountButton.insertAdjacentHTML('beforebegin', `<div class="alert alert-success" style="display: block;"><span class="message">Add a qualifying item to the cart and then apply your discount</span> <i class="fa fa-check-circle"></i></div>`);

}






// Add the closed version of the widget
function closedinktnerButton() {
	var d = document.createElement("div");
	d.textContent = myEvoXPopinTitle;
	d.classList = 'inktnerButton1298';
	document.body.appendChild(d);
}
closedinktnerButton();

// EventListeners
// onload set the widget based on storage values
document.addEventListener('DOMContentLoaded', checkTriggerWords);
// close the widget
inktnerParent.addEventListener('click', function (e) {
	if (e.target === document.querySelector('.myElement i.material-icons.close')) {
		checkState('close');
	}
});
// Open the widget when the inktnerButton1298 is clicked
document.addEventListener('click', function (e) {
	if (e.target === document.querySelector('.inktnerButton1298')) {
		let currentDelay = evoXAnimateParams.openDelay;
		// overwrite current delay 
		evoXAnimateParams.openDelay = 'no-delay'
		animateOpenCss(evoXAnimateParams);
		//return it to the original
		evoXAnimateParams.openDelay = currentDelay;
		localStorage.setItem("inkTonerPopinClose", "n");
	}
});


// function to Open animate and handle animationEnd
function animateOpenCss(
	{	// default values
		element = '.myElement',
		openAnimation = 'fadeInUp',
		openDelay = 'no-delay',
	} = evoXAnimateParams, callback) {

	const node = document.querySelector(element),
		nodeTwo = document.querySelector('.inktnerButton1298');

	// resize images on the slider before they are opened
	let slideImageBigger = document.querySelectorAll('.myElement .ms-slide-bgcont img');
	let slideImageMask = document.querySelectorAll('.myElement .ms-mask-view');
	slideImageBigger.forEach((e) => { e.setAttribute('style', 'position: relative; width: 380px; height: 213px;') });
	slideImageMask.forEach((e) => { e.setAttribute('style', 'width: 380px; height: 213.524px; left: -40px;') });

	// run the open animation	  
	node.classList.add('animated', openAnimation, openDelay);
	node.classList.remove('hide');
	nodeTwo.classList.add('hide');
	function handleAnimationEnd() {
		node.classList.remove('animated', openAnimation, openDelay);
		node.removeEventListener('animationend', handleAnimationEnd);

		if (typeof callback === 'function') callback();
	}

	node.addEventListener('animationend', handleAnimationEnd);
}

// function to Close animate and handle animationEnd
function animateCloseCss(
	{	// default values
		element = '.myElement',
		closeAnimation = 'fadeOutDown',
		closeDelay = 'no-delay',
	} = evoXAnimateCloseParams, callback) {

	const node = document.querySelector(element),
		nodeTwo = document.querySelector('.inktnerButton1298');
	node.classList.add('animated', closeAnimation, closeDelay);

	function handleAnimationEnd() {
		node.classList.remove('animated', closeAnimation, closeDelay);
		node.classList.add('hide');
		nodeTwo.classList.remove('hide');
		node.removeEventListener('animationend', handleAnimationEnd);

		if (typeof callback === 'function') callback();
	}

	node.addEventListener('animationend', handleAnimationEnd);
}


function checkState(state) {

	if (typeof (Storage) !== "undefined") {

		// check the the Storage values
		if (state === 'check') {
			let currentState = localStorage.getItem("inkTonerPopinClose");
			if (currentState !== 'n' && currentState !== 'y') {
				checkState('open');

			} else if (currentState === 'y') {
				inktnerParent.classList.add('hide');

			} else if (currentState === 'n') {
				if (inktnerParent.classList.contains('hide')) {
					inktnerParent.classList.remove('hide');
					// invoke the animation Open
					animateOpenCss(evoXAnimateParams);

				} else {
					// invoke the animation Open
					animateOpenCss(evoXAnimateParams);
				}
			}
			console.log(currentState);

		}

		// set storage to open
		if (state === 'open') {
			localStorage.setItem("inkTonerPopinClose", "n");
			// invoke the animation Open
			animateOpenCss(evoXAnimateParams);
		}
		// set storage to closed
		if (state === 'close') {
			// invoke the animation close
			animateCloseCss(evoXAnimateCloseParams);
			localStorage.setItem("inkTonerPopinClose", "y");

		}

	}


}


// Decides when the pop-in should appear

const evoXSearchParam = location.search,
	evoXSearchLowercase = evoXSearchParam.toLowerCase(),
	evoXURL = window.location.pathname,
	evoXUrlLowercase = evoXURL.toLowerCase();



function checkTriggerWords() {


	evoXListOfTriggerWords.forEach(function (e) {
		let brandTrigger1 = false,
			brandTrigger2 = (document.querySelector('.product-brand a') !== null) && (document.querySelector('.product-brand a').textContent.indexOf(e) >= 1);

		// if this is a multiple prod result page than check brands
		if (document.body.classList.contains('searchresult') || document.body.classList.contains('category')) {
			brandTrigger1 = document.querySelectorAll('.brand-label a');
			listTriggerWords = e;
			brandTrigger1.forEach((e) => {
				e = e.textContent;
				brandTrigger1 = e.toLowerCase();
				brandTrigger1 = brandTrigger1.indexOf(listTriggerWords) >= 1;
				if (brandTrigger1 !== null && brandTrigger1) {

					checkState('check');

				}
			});

		}

		// See if the url path or the search query contains a trigger word

		if (evoXSearchLowercase.indexOf(e) >= 1) {
			checkState('check');
		} else if (brandTrigger2 !== null && brandTrigger2) {

			checkState('check');
		}

		else evoXListOfTriggerWords.forEach(function (e) {
			if (evoXUrlLowercase.indexOf(e) >= 1) {
				checkState('check');
			}


		});
	});

}

// Apply the discount button
function applyMyDiscount(myDiscountCode) {
	let couponEnter = document.querySelector('.minicart_container #coupon_code'),
		myButton = document.querySelector('button[data-url="https://stagingdemo.staging.evostore.io/cart/applycoupon"]');

	couponEnter.value = myDiscountCode;

	myButton.click();

	// show success message
	let mySpinner = document.querySelector('.myElement i.fa.fa-circle-o-notch.fa-spin');
	mySpinner.style.display = 'inline-block';

	setTimeout(function () {
		let applyDiscountButton = document.querySelector('#applyDiscountButton');
		mySpinner.style.display = 'none';
		applyDiscountButton.textContent = 'Discount Applied, Thanks';

	}, 2500);


}