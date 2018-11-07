import Swiper from 'swiper'//引入swiper插件
import Echarts from 'echarts'//引入echarts插件
import _ from 'lodash' //引入lodash

/**
 * 实现全屏和退出全屏
 *  */
let ScreenZoom = (function () {
    let docElm = document.documentElement;
    return {
         fullScreen: function() {   
                //W3C 
                if (docElm.requestFullscreen) { docElm.requestFullscreen(); } 
                //FireFox 
                else if (docElm.mozRequestFullScreen) { docElm.mozRequestFullScreen(); } 
                //Chrome
                else if (docElm.webkitRequestFullScreen) {docElm.webkitRequestFullScreen(); } 
                //IE11 
                else if (elem.msRequestFullscreen) { elem.msRequestFullscreen(); }
            },
        exitFullScreen: function() {
            //W3C 
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            //FireFox 
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            //Chrome等 
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            //IE11 
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }
}())

/** 
 * 配置swiper插件
 * */
let SetSwiper = (function () {
      return {
          mySwiper: {},//声明一个对象，用于接受Swiper的实例化对象
          //默认参数配置 
          _default: {
            loop: true, // 循环模式选项    
            // 前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
        },  
        option: {},//接受配置参数
        init(ele,options) {           
            this.megeSwiper(ele,options)
        },
        megeSwiper(ele,opt) {
            //合并参数
            let opts = Object.assign(this._default,opt)
            this.mySwiper = new Swiper (ele,opts)  
        },
        isAutoPlay(isautoplay) {//接受一个布尔值isautoplay
            if(isautoplay) {
                this.mySwiper.autoplay.run()
            }else {
                this.mySwiper.autoplay.pause()
            }           
        }
      }
})()

/** 
 * 配置echarts插件
 * */
let SetEcharts = (function(){
    function PieCharts() {   
        let vm = this
        vm._default= {
            title: {
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                },
                subtextStyle: {
                    color: '#fff',
                    fontSize: 16
                },
                left: '18%',
                top: '34%'
            },
            series: [{
                type: 'pie',
                startAngle: 120,
                radius: ['40%','60%'],
                center: ['26%','50%'],
                label: {
                    show: false,
                    color: '#fff',
                },
                labelLine: {
                    lineStyle: {
                        color: '#fff'
                    },
                    length: 5,
                    length2: 6                  
                }
            }],
            tooltip: {
                trigger: 'item',
                formatter: '{b}：{d}%'
            },
            legend: {
                textStyle: {
                    color: '#82A9BA',
                }, 
                orient: 'vertical',
            } 
        }
        vm.init = function(ele,options) {         
             _.merge(vm._default,options)
            vm.megeEcharts(ele,vm._default)            
        }
        vm.megeEcharts = function(ele,option) {
            vm.myChart = Echarts.init(ele)
            vm.myChart.setOption(option)
        }
    }

   return {
        init(ele,seriesType,options) {
        //ele,echarts的容器  seriesType,是饼图还是线图  options, 图形的配置参数
        if(seriesType === 'pie') {
            let pieCharts = new PieCharts()           
            pieCharts.init(ele,options)
            console.log('pieCharts:',pieCharts)
            return pieCharts
        }
    }
   }
}())


//导出相应的对象
export {
    ScreenZoom,
    SetSwiper,
    SetEcharts
}