
const floatMenuBtn = document.querySelectorAll('.float_menu_item'),     
    floatNav = document.querySelector('.float_nav'),
    hideMenu = document.querySelector('.hide_menu'),
    menuBtn = document.querySelectorAll('.menu_item'),
    hideMask = document.querySelector('.hide_mask'),
    topMenu = document.querySelector('.top_menu'),
    portfolioDom = document.querySelectorAll('.section_portfolio_dom'),
    navHeight = document.querySelector('.nav').getBoundingClientRect().height;
const toScroll = (key) => {
    menuBtn.forEach((items) => {
        items.classList.remove('active')
    })
    floatMenuBtn.forEach((items) => {
        items.classList.remove('active')
    })
    menuBtn[key].classList.add('active');
    floatMenuBtn[key].classList.add('active');
    let tempDom = portfolioDom[key];
    let tempTop = tempDom.offsetTop - navHeight - 10;
    console.log(key,tempTop,tempDom.offsetTop)
    window.scrollTo({ top: tempTop, behavior: 'smooth' });
}

menuBtn.forEach((item,key) => {
    item.addEventListener('click',() =>{
        toScroll(key)
    })
})
floatMenuBtn.forEach((item,key) => {
    item.addEventListener('click',() =>{
        
        toScroll(key)
        floatNav.classList.remove('active')
        hideMask.classList.remove('active')
    })
})

hideMenu.addEventListener('click',() => {
if(floatNav.classList.contains('active')){
  floatNav.classList.remove('active')
  hideMask.classList.remove('active')
}else{
  floatNav.classList.add('active')
  hideMask.classList.add('active')
}
})
hideMask.addEventListener('click',() => {
    floatNav.classList.remove('active')
    hideMask.classList.remove('active')
})
const leftMenuTop =topMenu.offsetTop - 20  ;
window.addEventListener('scroll', function() {
    if (window.scrollY > leftMenuTop) {
        topMenu.classList.add('hide')
      hideMenu.classList.remove('hide')
      
    } else {
        topMenu.classList.remove('hide')
        hideMenu.classList.add('hide')
        floatNav.classList.remove('active')
        hideMask.classList.remove('active')
    }
    // scrollLoad.forEach(dom => {
    //   isScrollAtTo(dom)
    // });
    // if(isScrollAtBottom(footer.offsetHeight/2)){
    //   footer.classList.add('scroll_show')
    // }
});