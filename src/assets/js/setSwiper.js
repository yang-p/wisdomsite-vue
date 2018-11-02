import Swiper from 'swiper'

let setSwiper = function(ele,options) {
    let _default = {
        loop: true, // 循环模式选项
        
        // 如果需要分页器

        
        // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    }
    let option = options || {}
    let opts = Object.assign(_default,option)
    let mySwiper = new Swiper (ele, opts)
    return mySwiper
}
export {
    setSwiper
}