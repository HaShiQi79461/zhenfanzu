var audio = document.createElement('audio');
audio.setAttribute('src', './dianji.ogg');//这里是路径
window.onclick=function () {
        if(audio.paused) {  //如果音频是暂停状态
            audio.load;     //那就播放
            audio.play();  
        }else {             //否则，也就是说音频是播放状态
            audio.pause();   //就暂停
        }
}