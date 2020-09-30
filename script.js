
var keyAudio = new Audio('typewriter-key.wav')
var dingAudio = new Audio('ding.mp3')

//Det som händer när användaren interagerar med skrivfältet
$(".box").on("change keydown keyup paste", function() {
    $(".box").css('opacity', '0')
    let currentText = $('.text').text()
    $('.text').text(currentText + this.value)
    this.value = ''

    //returnera radbryt
    var width = $('.text').width()
    if (width > ($(document).width()/3)) {
        $('.text').removeClass("text")
        $('.content').append("<p></p>")
        $("p:last").addClass("text")
        dingAudio.pause()
        dingAudio.currentTime = 0
        dingAudio.play()
        lettersPerRow = 0
    }
  })

$(".box").on("focus", function() {
    this.value = ''
  })

$(".box").focusout( function() {
    $(".box").focus()
    $(".box").css('opacity', '100')    
})
 

//returnera radbryt om användaren trycker enter
$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which)
    if(keycode == '13'){
        dingAudio.play()
        $('.text').removeClass("text")
        $('.content').append("<p></p>")
        $("p:last").addClass("text")   
    }
})