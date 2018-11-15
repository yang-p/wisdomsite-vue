<template>
    <div class="content">
        <div class="content__wrapper">
            <div class="content__wrapper__left">
                <div class="card em-date">
                    <div class="card__content"></div>
                </div>
                <div class="card em-pollutant">
                    <div class="card__header">
                        <span class="card__header__title">近24小时污染物浓度</span>
                    </div>
                    <div class="card__content">

                    </div>
                </div>
                <div class="card em-noise">
                    <div class="card__header">
                        <span class="card__header__title">近24小时噪音</span>
                    </div>
                    <div class="card__content">
                        
                    </div>                    
                </div>
            </div>
            <div class="content__wrapper__right">
                <div class="content-right__top">
                    <div class="content-right__top__left">
                        <div class="card em-realtime">
                            <div class="card__top-title">实时监控</div>
                            <div class="card__content em-realtime__content">
                                <div class="box-card realtime-aqi">
                                    <div class="box-card__header" style="text-align:center;padding: 40px 0;">
                                        <span class="box-card__header__title-center">AQI</span>
                                    </div>
                                    <div class="box-card__content realtime-aqi__content">
                                        <ul class="realtime-aqi__list">
                                            <li><span class="icon-text icon-text-pm25">PM2.5</span><span>57</span></li>
                                            <li><span class="icon-text icon-text-pm10">PM10</span><span>70</span></li>
                                            <li><span class="icon-text icon-text-noise">噪音</span><span>57dB</span></li>                                                                                                             
                                        </ul>
                                        <div class="realtime-monitor__content__radar">
                                            <div class="radar">
                                                
                                            </div>
                                        </div>
                                        <ul class="realtime-aqi__list">
                                            <li><span class="icon-text icon-text-thermometer">温度</span><span>28℃</span></li>
                                            <li><span class="icon-text icon-text-humidity">湿度</span><span>67%</span></li>
                                            <li><span class="icon-text icon-text-windspeed">风速</span><span>0.6m/s</span></li>                                                                                                             
                                        </ul>
                                    </div>
                                </div>
                                <div class="box-card realtime-env">
                                    <div class="box-card__header realtime-env__header">
                                        <div class="realtime-env__header__title">成都市<span class="pollution-index">48</span>优于本地<span>2%</span></div>
                                    </div>
                                    <div class="box-card__content realtime-env__content">
                                        <div class="text-strip">
                                            <span data-text1="0" data-text="50">优</span>
                                            <span data-text="100">良</span>
                                            <span data-text="150">轻度污染</span>
                                            <span data-text="200">中度污染</span>
                                            <span data-text="250">重度污染</span>
                                            <span data-text="300">严重污染</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-right__top__right">
                        <div class="card em-total">
                            <div class="box-card total-electric">
                                <div class="box-card__header total-electric__header">
                                    <span class="box-card__header__title icon-text icon-text-allelectric total-electric__header__title">总电量：4,502,145</span>
                                    <span>kw·h</span>
                                </div>
                                <div class="box-card__content total-electric__content">
                                    <div class="box-card total-electric__week">
                                        <div class="box-card__content total-electric__week__content" style="height: 100%;">
                                            <div style="height: 100%;border: 1px solid green;" ref="electric_week"></div>
                                        </div>
                                    </div>
                                    <div class="box-card total-electric__month">
                                        <div class="box-card__content total-electric__month__content" style="height: 100%">
                                            <div style="height: 100%;" ref="electric_month"></div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                           
                            <div class="box-card total-watar">
                                <div class="box-card__header total-watar__header">
                                    <span class="box-card__header__title icon-text icon-text-allwater total-watar__header__title">总水量： 45,012</span>
                                    <span>m³</span>
                                </div>
                                <div class="box-card__content total-watar__content">
                                    <div class="box-card total-watar__week">
                                        <div class="box-card__header">
                                            <span class="box-card__header__title em-total-title">近7天单日用水量（单日）</span>
                                        </div>
                                        <div class="box-card__content">

                                        </div>
                                    </div>
                                    <div class="box-card total-watar__month">
                                        <div class="box-card__header">
                                            <span class="box-card__header__title em-total-title">近30天单周用水量（单周）</span>
                                        </div>
                                        <div class="box-card__content">

                                        </div>
                                    </div>                                        
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
                <div class="content-right__bottom">
                    <div class="card content-right__bottom__left">
                        <div class="box-card aqi-index__month" >
                            <div class="box-card__header">
                                <span class="box-card__header__title">近30天AQI指标</span>
                            </div>
                            <div class="box-card__content">
                                <div class="pie aqi-index30" style="" ref="aqi_index30"></div>
                            </div>
                        </div>
                        <div class="box-card noise__month">
                            <div class="box-card__header">
                                <span class="box-card__header__title">近30天噪音分析</span>
                            </div>
                            <div class="box-card__content">
                                <div class="pie aqi-index30" style="" ref="noise_30"></div>
                            </div>
                        </div>                            
                    </div>
                    <div class="card content-right__bottom__right" >
                        <div class="box-card aqi-index__year">
                            <div class="box-card__header">
                                <span class="box-card__header__title">本年度AQI指标</span>
                            </div>
                            <div class="box-card__content">
                                <div class="pie aqi-index30" style="" ref="aqi_index_year"></div>
                            </div>
                        </div>
                        <div class="box-card noise__year">
                            <div class="box-card__header">
                                <span class="box-card__header__title">本年度噪音分析</span>
                            </div>
                            <div class="box-card__content">
                                <div class="pie aqi-index30" style="" ref="noise_year"></div>
                            </div>
                        </div>                            
                    </div>                        
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import Echarts from 'echarts'
import {SetEcharts} from '../../assets/js/tools.js'
export default {
    name: 'EnvMonitoring',
    data() {
        return {
            aqi_index30Opts: {
                color: ['#0CBD5C', '#E5C63D','#EB8504','#EA3636','#960453','#61001D'],
                series: [
                    {
                        type: 'pie',
                        name: '检查累计',
                        startAngle: 120,
                        radius: ['45%','70%'],
                        center: ['20%','50%'],
                        data: [
                            {value:19,name:'优'},
                            {value:8,name:'良'},
                            {value:3,name:'轻度污染'},
                            // {value:0,name:'中度污染'},
                            // {value:0,name:'重度污染'},
                            // {value:0,name:'严重污染'}
                        ],
                        label: {
                            show: false
                        }
                    }      
                ],
                legend: {
                    right: '10%',
                    top: '0',
                    textStyle: {
                        color: '#82A9BA',
                    },
                    orient: 'vertical', 
                    // formatter: function (params) {
                    //     for (var i = 0; i < pieChart11Opts.series[0].data.length; i++) {
                    //         if (pieChart11Opts.series[0].data[i].name == params) {
                    //             return  pieChart11Opts.series[0].data[i].value + '天';
                    //         }
                    //     }
                    // }
                }         
            },
            noise_30Opts: {
                color: ['#0CBD5C', '#E5C63D','#EB8504','#EA3636','#960453','#61001D'],
                series: [
                    {
                        type: 'pie',
                        name: '检查累计',
                        startAngle: 120,
                        radius: ['45%','70%'],
                        center: ['20%','50%'],
                        data: [
                            {value:19,name:'优'},
                            {value:8,name:'良'},
                            {value:3,name:'轻度污染'},
                            // {value:0,name:'中度污染'},
                            // {value:0,name:'重度污染'},
                            // {value:0,name:'严重污染'}
                        ],
                        label: {
                            show: false
                        }
                    }      
                ],
                legend: {
                    right: '10%',
                    top: '0',
                    textStyle: {
                        color: '#82A9BA',
                    },
                    orient: 'vertical', 
                } 
            },
            aqi_index_yearOpts: {
                color: ['#0CBD5C', '#E5C63D','#EB8504','#EA3636','#960453','#61001D'],
                series: [
                    {
                        type: 'pie',
                        name: '检查累计',
                        startAngle: 120,
                        radius: ['45%','70%'],
                        center: ['20%','50%'],
                        data: [
                            {value:19,name:'优'},
                            {value:8,name:'良'},
                            {value:3,name:'轻度污染'},
                            // {value:0,name:'中度污染'},
                            // {value:0,name:'重度污染'},
                            // {value:0,name:'严重污染'}
                        ],
                        label: {
                            show: false
                        }
                    }      
                ],
                legend: {
                    right: '10%',
                    top: '0',
                    textStyle: {
                        color: '#82A9BA',
                    },
                    orient: 'vertical', 
                } 
            },
            noise_yearOpts: {
                color: ['#0CBD5C', '#E5C63D','#EB8504','#EA3636','#960453','#61001D'],
                series: [
                    {
                        type: 'pie',
                        name: '检查累计',
                        startAngle: 120,
                        radius: ['45%','70%'],
                        center: ['20%','50%'],
                        data: [
                            {value:19,name:'优'},
                            {value:8,name:'良'},
                            {value:3,name:'轻度污染'},
                            // {value:0,name:'中度污染'},
                            // {value:0,name:'重度污染'},
                            // {value:0,name:'严重污染'}
                        ],
                        label: {
                            show: false
                        }
                    }      
                ],
                legend: {
                    right: '10%',
                    top: '0',
                    textStyle: {
                        color: '#82A9BA',
                    },
                    orient: 'vertical', 
                } 
            },
            electricWeekOpts: {
                title: {
                    text: '近7天单日用电量（单日）',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: '12'
                    }
                },
                series: [
                    {
                        type: 'line',
                        name: '管理人员',
                        smooth: true,
                        data: [3, 4, 5, 6, 8, 10],
                        clipOverflow: false,
                        areaStyle: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0, color: 'red' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'blue' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        },
                        smooth: true,
                        lineStyle: {
                            color: '#857AF9',
                        }
                    },
                ],
                grid: {
                    // show: true
                    bottom: 20
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['00:00','02:00','04:00','06:00','08:00','10:00'],
                    nameTextStyle: {
                        color: '#fff'
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: 'yellow'
                        }
                    },
                },
                yAxis: {
                    // type: 'category',
                    name: '电量',
                }
            },           
            electricMonthOpts: {
                title: {
                    text: '近30天单周用电量（单日）',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: '12'
                    }
                },
                series: [

                    {
                        type: 'line',
                        name: '劳务人员',
                        smooth: true,
                        data: [10, 2, 3, 7, 9, 1]
                    }
                ],
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['00:00','02:00','04:00','06:00','08:00','10:00'],
                    nameTextStyle: {
                        color: '#fff'
                    }
                },
                yAxis: {
                    type: 'value'
                }
            }
        }
    },
    mounted() {
        //获取图表容器       
        SetEcharts.init(this.$refs.aqi_index30,'pie',this.aqi_index30Opts)//初始化近30天AQI指标饼图
        SetEcharts.init(this.$refs.noise_30,'pie',this.noise_30Opts)//初始化近30天噪音分析饼图
        SetEcharts.init(this.$refs.aqi_index_year,'pie',this.aqi_index_yearOpts)//初始化近一年AQI指标饼图
        SetEcharts.init(this.$refs.noise_year,'pie',this.noise_yearOpts)//初始化近一年噪音分析

        
        let electricWeek = this.$refs.electric_week//获取近7天单日用电量线图容器
        let electricMonth = this.$refs.electric_month//获取近30天单周用电量线图容器
        
        let electricWeekEchart =  Echarts.init(electricWeek)//初始化近7天单日用电量线图
            electricWeekEchart.setOption(this.electricWeekOpts)

        let electricMonthEchart =  Echarts.init(electricMonth)//初始化近30天单周用电量线图
            electricMonthEchart.setOption(this.electricMonthOpts)
    }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/variables.less';
@import '../../assets/css/components.less';
@import '../../assets/css/public.less';
.content {
    &__wrapper {
        width: 100%;
        &__left {
            flex: 1;
            .flex-column;
            height: 100%;
        }
        &__right {
            flex: 4;
            height: 100%;
            .flex-column;
            .content-right__top {
                display: flex;
                flex: 4;               
                &__left {
                    flex: 3;
                }
                &__right {
                    flex: 1;
                    margin-left: 20px;
                }
            }
            .content-right__bottom {
                display: flex;
                flex: 1;
                margin-top: 20px;
                &__left,
                &__right {
                    flex: 1;
                    display: flex;
                    height: 100%;
                }
                &__right {
                    margin-left: 20px;
                }
            }
        }
    }
    .em-date {//日期
        flex: 3;

    }
    .em-pollutant {//近24小时污染物浓度
        flex: 1;
        margin-top: 20px;
    }
    .em-noise {//近24小时噪音
        flex: 1;
        margin-top: 20px;       
    }
    .em-realtime {//实时监控
        height: 100%;
        background: rgba(0, 11, 50, 0.6);
        &__content {
            height: 100%;
            .flex-column;
            .realtime-aqi {
                flex: 2;
                &__content {
                    display: flex;
                    justify-content: space-between;
                    padding: 0 40px;
                    height: 80%;
                }
                &__list {
                    .flex-column;
                    justify-content: space-around;
                    height: 60%;
                    li {
                        .icon-text {
                            color: #fff;
                        } 
                        span {
                            margin-left: 1rem;
                        }  
                    }              
                }
            }
            .realtime-env {
                flex: 1;
                display: flex;
                flex-direction: column;
                &__header {
                    flex: 1;
                    &__title {
                        color: #fff;
                        text-align: center;
                        font-size: 1.8rem; 
                        .pollution-index {
                            margin: 0 1rem;
                            color: #80EB8B;
                        }                   
                    }
                }
                &__content {
                    flex: 2;
                    .text-strip {
                        margin: 0 auto;
                    }
                }
            }
        }
    }
    .em-total {
        .flex-column;
        height: 100%;
        &-title {
            font-size: 1.2rem;
        }
        .total-electric {//总电量
            flex: 1;
            &__header {
                text-shadow: 0px 0px 2px #fff, 0px 0px 3px #fff;
                font-size: 1rem;
                color: #fff;
                &__title {
                    font-size: 1.6rem;
                    color: #fff;
                }
            }
            &__content {
                height: 80%;
                .flex-column;
            }
            &__week {
                // border: 1px solid red;

            }
            &__month {
                // border: 1px solid red;
            }
        }
        .total-watar {//总水量
            flex: 1;
            // margin-top: 10px;
            &__header {
                text-shadow: 0px 0px 2px #fff, 0px 0px 3px #fff;
                font-size: 1rem;
                color: #fff;
                &__title {
                    font-size: 1.6rem;
                    color: #fff;
                }
            }
             &__content {
                height: 80%;
                .flex-column;
            }
            &__week {

            }
            &__month {
                
            }           
        }
    }
    .aqi-index__month,
    .noise__month,
    .aqi-index__year,
    .noise__year {
        flex: 1;
        .box-card__content {
            height: 76%;
            .pie {
                height: 100%;
            }
        }
    }

}
</style>
