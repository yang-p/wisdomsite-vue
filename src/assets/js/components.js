import Vue from 'vue'



//card组件
Vue.component('card',{
    template: `
        <div class="card">
            <slot name="card-bg-line"></slot>
            <slot name="card-top-title"></slot>
            <div class="card__header">
                <slot name="card-header-title"></slot>
            </div>
            <div class="card__content">
                <slot name="card-content"></slot>
            </div>
        </div>    
    `
})

//box-card组件
Vue.component('box-card',{
    template: `
        <div class="box-card">
            <div class="box-card__header">
                <slot name="box-card-header-title"></slot>
            </div>
            <div class="box-card__content">
                <slot name="box-card-content"></slot>
            </div>
        </div>    
    `
})

//swiper-card组件
Vue.component('swiper-card',{
    template: `
        <div class="swiper-card">
            <slot name="swiper-card-top-title"></slot>
            <div class=""></div>
        </div>   
    `
})
