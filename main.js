function timer() {
    var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    setInterval( function(){
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
        document.getElementById("hours").innerHTML=parseInt(sec / 3600 % 60, 10);
    }, 1000);
}

$(function() {
	var playing = false;
	var audio = new Audio()
	audio.autoplay = true;
	audio.loop = true;

	audio.src = audio.canPlayType('audio/wav') ? 'leekspin.wav' : 'leekspin.ogg';
	// audio.addEventListener('timeupdate', function(){
	// 	var buffer = .5
	// 	if(this.currentTime > this.duration - buffer){
	// 		this.currentTime = 0
	// 		this.play()
	// 	}
	// });

	//     //this is the webaudio loooooppppppp
    // //enter url in the next line
    // var url  = 'leekspin.mp3';

    // /* --- set up web audio --- */
	// //create the context
	// var AudioContext = window.AudioContext          // Default
    //           || window.webkitAudioContext;  // Safari and old versions of Chrome
    // var context = new AudioContext();
    // //...and the source
    // var source = context.createMediaElementSource(audio);
    // //connect it to the destination so you can hear it.
    // source.connect(context.destination);

	// source.loop = true;
	
	$(audio).on('playing', function() {
		if (!playing) {
			playing = true;
			$('div').html('You\'ve been spinning for <span id="hours">0</span>:<span id="minutes">00</span>:<span id="seconds">00</span>.');
			timer();
		}
	});
});



