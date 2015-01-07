$(document).ready(function() {
    var elapsetime = 0;
    var timerrunning = false;
    var interval = null;
    var progressatt = "";
    
    function timeinttostring(){
        elapsetime++;
        var hours   = Math.floor(elapsetime / 3600);
        var minutes = Math.floor((elapsetime - (hours * 3600)) / 60);
        var seconds = elapsetime - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var time    = hours+':'+minutes+':'+seconds;
        progressatt = elapsetime + '%';
        console.log(progressatt);
        $('#progressbar-1').animate({"background-size":progressatt}, "slow");
        $('#elapsed-time-1').text(time); 
    }
    
    $('#perspro').hide();
    $('#myrepor').hide();
    $('#myinv').hide();
    
    $('#menu li').click( function(){
        if(this.id == "menuser"){
            $('#menuser').css("background-color", "#848482");
            $('#perspro').toggle("slide");
            $('#myrepor').hide();
            $('#menumyreports').css("background-color", "#34282C");
            $('#myinv').hide();
            $('#menumyinvoices').css("background-color", "#34282C");
        }
        if(this.id == "menumyreports"){
            $('#menumyreports').css("background-color", "#848482");
            $('#myrepor').toggle("slide");
            $('#perspro').hide();
            $('#menuser').css("background-color", "#34282C");
            $('#myinv').hide();
            $('#menumyinvoices').css("background-color", "#34282C");
        }
        if(this.id == "menumyinvoices"){
            $('#menumyinvoices').css("background-color", "#848482");
            $('#myinv').toggle("slide");
            $('#myrepor').hide();
            $('#menumyreports').css("background-color", "#34282C");
            $('#perspro').hide();
            $('#menuser').css("background-color", "#34282C");
        }
        
    });
    
    $('#contact-info-1').hide();
    $('#project-description-1').hide();
    $('#project-timer-1').hide();
    
    $('#company-name-1').click( function(){
        if ($('#project-timer-1').css('display') == 'none') {
            $('#project-timer-1').slideDown("slow");
            $('#project-arrow-1').attr("src", "images/arrow-big-up.png");
        }
        if ($('#contact-info-1').css('display') == 'none') {
            $('.collap-item').slideUp("slow");
            $('#contact-info-1').slideDown("slow");
        } else {
            $('#contact-info-1').slideUp("slow");
        }
           
        
    });
    
    $('#project-name-1').click( function(){
        if ($('#project-timer-1').css('display') == 'none') {
            $('#project-timer-1').slideDown("slow");
            $('#project-arrow-1').attr("src", "images/arrow-big-up.png");
        }
        if ($('#project-description-1').css('display') == 'none') {
            $('.collap-item').slideUp("slow");
            $('#project-description-1').slideDown("slow");
        } else {
            $('#project-description-1').slideUp("slow");
        }
//        $('.project-item').hide();
//        $('#project-description').slideDown("slow");
    });
    
    $('#play-pause-1').click( function () {
        if(timerrunning == false){
            $(this).attr("src", "images/pause.jpg");
            interval = setInterval(timeinttostring, 1000);
            timerrunning = true;
        }else{
            $(this).attr("src", "images/play.jpg");
            clearInterval(interval);
            timerrunning = false;
        }
    });
    
    $('#project-arrow-1').click( function () {
        if ($('#project-timer-1').css('display') == 'none') {
            $('#project-timer-1').slideDown("slow");
            $(this).attr("src", "images/arrow-big-up.png");
        }else{
            $('.collap-item').slideUp("slow");
            if(timerrunning == false){
                $('#project-timer-1').slideUp("slow");
                $(this).attr("src", "images/arrow-big-down.png");
            }
        }
    });

});
    
