var glide05 = new Glide('.glide-05', {
    type: 'slider',
    focusAt: 'center',
    perView: 1,
    autoplay: 3000,
    animationDuration: 700,
    gap: 0,
    classes: {
        activeNav: '[&>*]:bg-slate-700',
    },

});

glide05.mount();