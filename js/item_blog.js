$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 28,
    
    responsive:{
        0:{
            items:1,
            dots:false,
        },
        600:{
            items:2,
            dots:false,
        },
        1200:{
            items:3,
            dots:true,
        }
    }
}
)