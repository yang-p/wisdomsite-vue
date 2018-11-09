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
 * ===========================================
 * 配置echarts插件
 * ===========================================
 * */
let SetEcharts = (function(){
    //饼图的配置函数
    function PieCharts() {
        let vm = this
        vm.cbFormatter = function (params,option,unity) {//legend的formatter
            let seriesData = option.series[0].data
            let legendObj = {}
            for (let i = 0; i < seriesData.length; i++) {
                if (seriesData[i].name === params) {
                     legendObj[seriesData[i].name] = seriesData[i].value + unity + ''
                }
            }
            return legendObj
        }
        vm.legendParams = { //饼图legend的默认配置参数
            unity: '', //data中的value值后面需要拼接的单位，默认不加单位
            isShowValue: true,//是否显示data中的value，默认显示
            returnSpace: "    "//data中的name和value之间的间隔距离（暂时用空格来进行分隔），默认四个空格
        }
        vm._default= { //饼图的默认配置参数
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
                formatter: function (params) {
                   let {unity,isShowValue,returnSpace} = vm.legendParams
                   let onj =  vm.cbFormatter(params,vm._default,unity)
                    for (let prop in onj) {
                        if(isShowValue) {
                            return prop + returnSpace + onj[params]
                        }else {
                            return prop 
                        }
                        
                    }              
                },

            }
        }
        vm.init = function(ele,options,legendParam) {         
             _.merge(vm._default,options)
             _.merge(vm.legendParams,legendParam)
            vm.megeEcharts(ele,vm._default)
        }
        vm.megeEcharts = function(ele,option) {
            vm.myChart = Echarts.init(ele)
            vm.myChart.setOption(option)
        }
    }

return {
    init(ele,seriesType,options,legendParam) {
    /**
        * @param {*} ele echarts的容器  
        * @param {*} seriesType 判断是饼图还是线图 
        * @param {*} options 图形的配置参数 
        * @param {*} legendParam 饼图legend的配置参数
        */
            if(seriesType === 'pie') {
                let pieCharts = new PieCharts()         
                pieCharts.init(ele,options,legendParam)
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