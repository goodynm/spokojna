/* Warunki początkowe */
var currentNumber = 1;
document.querySelector( '#s' + currentNumber ).classList.add( 'show' );	
document.querySelector( '#pin' + currentNumber ).classList.add( 'selected' );

var playing = false;
var slideDuration = 3500;
var slideshowInterval = null;



function startSlideshow( ) {
	document.querySelector( '#play' ).classList.add('on');	
	playing = true;
	slideshowInterval = setInterval( showNextSlide, 3000 );	
}

function stopSlideshow( ) {
	document.querySelector( '#play' ).classList.remove( 'on' );	
	playing = false;
	clearInterval( slideshowInterval );	
}

function showSlide ( newNumber ) {
    document.querySelector( '.show' ).classList.remove( 'show' );
    document.querySelector( '#s' + newNumber ).classList.add( 'show' );	
	selectPin( newNumber );
	currentNumber = newNumber;	
}

function selectPin ( newNumber ) {
    document.querySelector( '.selected' ).classList.remove( 'selected' );
    document.querySelector( '#pin' + newNumber ).classList.add( 'selected' );
}

function showSlide1 ( ) {
   showSlide( 1 );
}
document.querySelector('#pin1').addEventListener( 'click', showSlide1 );

function showSlide2 ( ) {
   showSlide( 2 );
}
document.querySelector('#pin2').addEventListener( 'click', showSlide2 );

function showSlide3 ( ) {
   showSlide( 3 );
}
document.querySelector('#pin3').addEventListener( 'click', showSlide3 );


function showNextSlide ( ) {
	var newNumber = currentNumber + 1;
	if( newNumber > 3 ) {
		newNumber = 1;
	}
    showSlide( newNumber );
}

document.querySelector('#next').addEventListener( 'click', showNextSlide );

function showPreviousSlide ( ) {
	var newNumber = currentNumber - 1;
	if( newNumber < 1 ) {
		newNumber = 3;
	}
    showSlide( newNumber );
}
document.querySelector('#prev').addEventListener( 'click', showPreviousSlide );

function maybeStopSlideshow ( ) {
	if ( playing === true ) {
		stopSlideshow();
	}
}
//document.querySelector( '#wrapper' ).addEventListener( 'click', maybeStopSlideshow );
