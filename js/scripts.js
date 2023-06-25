console.log('JS loaded');

// if the number in id of thumbnail pic clicked on equals to this number, then the underneath click function

//when user clicks target word, modal window appears and the BG blurs out
// tried to be more code efficient but couldn't get .getAttribute to work with the data-slider

//OBJECTS:

$(function(){
    console.log('DOM is loaded');

    //article
    $('#article-trigger').click(function(){
        console.log('article button clicked');
        $('#articleModal').css('display', 'flex');
        $('.underlay').css('filter','blur(3px)')
    });
    $('#article-close-button').click(function(){
        console.log('close button clicked');
        $('#articleModal').css('display', 'none');
        $('.underlay').css('filter','none')
    });

    //source
    $('#source-trigger').click(function(){
        console.log('source button clicked');
        $('#sourceModal').css('display', 'flex');
        $('.underlay').css('filter','blur(3px)')
    });
    $('#source-close-button').click(function(){
        console.log('source button clicked');
        $('#sourceModal').css('display', 'none');
        $('.underlay').css('filter','none')
    });

    //squid
    $('#squid').click(function(){
        console.log('squid button clicked');
        $('#squid-modal').css('display', 'flex');
        $('.underlay').css('filter','blur(3px)')
    });
    $('#squid-close-btn').click(function(){
        console.log('close button clicked');
        $('#squid-modal').css('display', 'none');
        $('.underlay').css('filter','none')
    });

    //all of us
    $('#allofus').click(function(){
        console.log('allofus button clicked');
        $('#allofus-modal').css('display', 'flex');
        $('.underlay').css('filter','blur(3px)')
    });
    $('#allofus-close-btn').click(function(){
        console.log('close button clicked');
        $('#allofus-modal').css('display', 'none');
        $('.underlay').css('filter','none')
    });

    //extraordinary attorney woo
    $('#extraWoo').click(function(){
        console.log('extraWoo button clicked');
        $('#extraWoo-modal').css('display', 'flex');
        $('.underlay').css('filter','blur(3px)')
    });
    $('#extraWoo-close-btn').click(function(){
        console.log('close button clicked');
        $('#extraWoo-modal').css('display', 'none');
        $('.underlay').css('filter','none')
    });

    //crash landing
    $('#crash').click(function(){
        console.log('crash button clicked');
        $('#crash-modal').css('display', 'flex');
        $('.underlay').css('filter','blur(3px)')
    });
    $('#crash-close-btn').click(function(){
        console.log('close button clicked');
        $('#crash-modal').css('display', 'none');
        $('.underlay').css('filter','none')
    });

    //hometown
    $('#hometown').click(function(){
        console.log('hometown button clicked');
        $('#hometown-modal').css('display', 'flex');
        $('.underlay').css('filter','blur(3px)')
    });
    $('#hometown-close-btn').click(function(){
        console.log('hometown button clicked');
        $('#hometown-modal').css('display', 'none');
        $('.underlay').css('filter','none')
    });

    //affection
    $('#affection').click(function(){
        console.log('affection button clicked');
        $('#affection-modal').css('display', 'flex');
        $('.underlay').css('filter','blur(3px)')
    });
    $('#affection-close-btn').click(function(){
        console.log('affection button clicked');
        $('#affection-modal').css('display', 'none');
        $('.underlay').css('filter','none')
    });

    //2521
    $('#affection').click(function(){
        console.log('2521 button clicked');
        $('#2521-modal').css('display', 'flex');
        $('.underlay').css('filter','blur(3px)')
    });
    $('#2521-close-btn').click(function(){
        console.log('2521 button clicked');
        $('#2521-modal').css('display', 'none');
        $('.underlay').css('filter','none')
    });

    //business
    $('#business').click(function(){
        console.log('business button clicked');
        $('#business-modal').css('display', 'flex');
        $('.underlay').css('filter','blur(3px)')
    });
    $('#business-close-btn').click(function(){
        console.log('business button clicked');
        $('#business-modal').css('display', 'none');
        $('.underlay').css('filter','none')
    });

    //summer
    $('#summer').click(function(){
        console.log('summer button clicked');
        $('#summer-modal').css('display', 'flex');
        $('.underlay').css('filter','blur(3px)')
    });
    $('#summer-close-btn').click(function(){
        console.log('summer button clicked');
        $('#summer-modal').css('display', 'none');
        $('.underlay').css('filter','none')
    });

    //hospital
    $('#hospital').click(function(){
        console.log('hospital button clicked');
        $('#hospital-modal').css('display', 'flex');
        $('.underlay').css('filter','blur(3px)')
    });
    $('#hospital-close-btn').click(function(){
        console.log('hospital button clicked');
        $('#hospital-modal').css('display', 'none');
        $('.underlay').css('filter','none')
    });


});
