var settings = {
	image01: {
		path: '/assets/images/voice_pictures/idle.jpg'
	},
	image02: {
		path: '/assets/images/voice_pictures/normal.jpg',
		loudness: 60
	},
	image03: {
		path: '/assets/images/voice_pictures/yelling.jpg',
		loudness: 80
	}
}

window.onload = function () {

    "use strict";
    var h = document.getElementsByTagName('h1')[0];
    var report = 0;
    
    var soundAllowed = function (stream) {
        //Audio stops listening in FF without // window.persistAudioStream = stream;
        //https://bugzilla.mozilla.org/show_bug.cgi?id=965483
        //https://support.mozilla.org/en-US/questions/984179
        window.persistAuidoStream = stream;
        h.innerHTML = "Thanks";
        h.setAttribute('style', 'opacity: 0;');
        var audioContent = new AudioContext();
        var audioStream = audioContent.createMediaStreamSource( stream );
        var analyser = audioContent.createAnalyser();
        audioStream.connect(analyser);
        analyser.fftSize = 1024;

        var frequencyArray = new Uint8Array(analyser.frequencyBinCount);
        frequencyArray = frequencyArray.slice(0, 256)
        console.log(frequencyArray);

        var loudness = 0;
        var max = 0;
        var avatar = document.getElementById('avatar');
        var doDraw = function () {
            requestAnimationFrame(doDraw);
            analyser.getByteFrequencyData(frequencyArray);
            var maxVal = Math.max.apply(Math, frequencyArray.slice(16, 256));
            max = (max > maxVal) ? max : maxVal;
            loudness = frequencyArray.reduce(function(a, b) {
                if (b < 40) {
                    return a;
                } else {
                    return a + b;
                }
            }, 0) / frequencyArray.length;

            if (loudness > settings.image03.loudness) {
                avatar.src = settings.image03.path;
            } else if (loudness > settings.image02.loudness) {
                avatar.src = settings.image02.path;
            } else {
                avatar.src = settings.image01.path;
            }
            console.log(loudness)
        }
        // setInterval(doDraw, 10);
        doDraw();
    }

    var soundNotAllowed = function (error) {
        h.innerHTML = "You must allow your microphone.";
        console.log(error);
    }

    // window.navigator = window.navigator || {};
    // navigator.getUserMedia =  navigator.getUserMedia       ||
    //                           navigator.webkitGetUserMedia ||
    //                           navigator.mozGetUserMedia    ||
    //                           null;
    // navigator.getUserMedia({audio:true}, soundAllowed, soundNotAllowed);
    navigator.mediaDevices.getUserMedia({
              audio: {
                echoCancellation: false,
                noiseSuppression: false,
                autoGainControl: false,
              }
          })
        .then(soundAllowed)
        .catch(soundNotAllowed);

};