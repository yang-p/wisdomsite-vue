import Echarts from 'echarts'
console.log('Echarts:',Echarts)

let setEcharts = (function() {
    let myChart = {
        formatter1(params) {
            for (let i = 0; i < option.series[0].data.length; i++) {
                if (option.series[0].data[i].name == params) {
                    return params +" "+ option.series[0].data[i].value + '项';
                }
            }
        },
        chartPie(ele,options) {
            let _default = {
                series: [
                    {
                        type: 'pie',
                        lable: {
                            color: '#fff'
                        },
                        labelLine: {
                            lineStyle: {
                                color: '#fff'
                            },
                        length: 5,
                        length2: 6
                        }
                    }
                ],
                legend: {
                    textStyle: {
                        color: '#82A9BA',
                    },
                    formatter(params) {
                        formatter1(params)
                    }
                }

            }
            let option = Object.assign(_default,options)
            let echarts =  Echarts.init(ele)
            let chartpie =  echarts.setOption(option)
            return this.chartpie
        },
        chartLine(ele,options) {
            let _default = {
                series: [
                    {
                        type: 'line',

                    }
                ],

            }
            let option = Object.assign(_default,options)
            let echarts =  Echarts.init(ele)
            let chartline =  echarts.setOption(option)
            return chartline
        }
    }

   return myChart
}())



export default {

}