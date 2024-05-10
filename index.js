$(document).ready(function(){


    // $('p').click(function(){
    //     $(this).hide()
    // })

    $('.hide').click(function(){
        $(this).hide()
    })

    $('.pluto').click(function(){
        $('#uranus').hide()
    })

    $('#uranus').click(function(){
        $('.pluto').hide()
    })


    $('.hiddenText').hide()

    $('#showText').click(function(){
        $('.hiddenText').show()
    })

    $('#hideText').click(function(){
        $('.hiddenText').hide()
    })

    $('#toggle').click(function(){
        $('.hiddenText').toggle()

        if($(this).text() == 'Show'){
            $(this).text('Hide')
        }else{
            $(this).text('Show')
        }
    })

    $('.alertName').hide()
    $('#name').blur(function(){
        $('.alertName').show()
    })

    //button move diklik, kotak bergeser ke kanan
    $('.moveRightButton').click(function(){
        $('.box').animate({
            marginLeft: '300px',
            width: '400px',
            height: '400px'
        },200)
    })

    $('.moveLeftButton').click(function(){
        $('.box').animate({
            marginLeft: '0px',
            width: '200px',
            height: '200px'
        },200)
    })

    $('.inputTerm').click(function(){
        if($(this.checked)){
            $('.btnSubmit').addClass('active')
        }else{
            $('.btnSubmit').removeClass('active')
        }
    })


    //PRODUCT TAB
    $('.productItem').hide()
    $('.productItem:first').show()
    $('.colorItem a:not(:first)').addClass('inactive')
    
    $('.colorItem a').on('click', function(){
        const n = $(this).attr('id')
        if($(this).hasClass('inactive')){
            $('.colorItem a').addClass('inactive')
            $(this).removeClass('inactive')
        }

        $('.productItem').hide()
        $('#' + n + 'image').show()
    })







})