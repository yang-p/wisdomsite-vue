<template>
    <div class="content">
        <div class="content__wrapper">
            <div class="content__wrapper__left">
                <div class="card em-date">
                    <div class="card__content" style="height: 80%;">
                    	<div id="datepicker" class="calendar" style="height: 300px;"></div>
                        <div style="height:30px;" class="em-date__content__">
                            <!-- <div>40</div> -->
                            <div class="text-strip1">
                                <span data-text1="0" data-text="50"></span>
                                <span data-text="100"></span>
                                <span data-text="150"></span>
                                <span data-text="200"></span>
                                <span data-text="250"></span>
                                <span data-text="300"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card em-pollutant">
                    <div class="box-card__content total-electric__week__content" style="height: 110px;">
                        <div style="height: 100%;" ref="electric_week2"></div>
                    </div>  
                </div>
                <div class="card em-noise">
                    <div class="box-card__content total-electric__month__content" style="height: 110px;">
                        <div style="height: 100%;" ref="electric_month2"></div>
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
                                        <div class="realtime-aqi__radar">
                                            <div class="radar">
                                                <div class="radar-text">48<span>良</span></div>
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
                                        <div class="box-card__content total-electric__week__content" style="height: 100px;">
                                            <div style="height: 100%;" ref="electric_week"></div>
                                        </div>
                                    </div>
                                    <div class="box-card total-electric__month">
                                        <div class="box-card__content total-electric__month__content" style="height: 100px;">
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
                                        <div class="box-card__content total-electric__week__content" style="height: 100px;">
                                            <div style="height: 100%;" ref="electric_week1"></div>
                                        </div>                               
                                    </div>
                                    <div class="box-card total-watar__month">
                                        <div class="box-card__content total-electric__month__content" style="height: 100px;">
                                            <div style="height: 100%;" ref="electric_month1"></div>
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

import '../../assets/js/jquery-ui.js'
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
                color:['#513D95'],
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
                            // color: {
                            //     type: 'radial',
                            //     x: 0.5,
                            //     y: 0.5,
                            //     r: 0.5,
                            //     colorStops: [{
                            //         offset: 0, color: 'red' // 0% 处的颜色
                            //     }, {
                            //         offset: 1, color: 'blue' // 100% 处的颜色
                            //     }],
                            //     globalCoord: false // 缺省为 false
                            // }
                        },
                        smooth: true,
                        lineStyle: {
                            color: '#857AF9',
                        }
                    },
                ],
                grid: {
                    left: 20,
                    bottom: 20,
                    width: '80%',
                    height: '46%',
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    name: '日',
                    boundaryGap: false,
                    data: ['00:00','02:00','04:00','06:00','08:00','10:00'],
                    nameTextStyle: {
                        color: '#82a9ba',
                        fontSize: 12
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#82a9ba'
                        }
                    },
                },
                yAxis: {
                    name: '电量',
                    nameGap: '2',
                    nameTextStyle: {
                        color: '#82a9ba',
                        fontSize: 10
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#82a9ba'
                        }
                    },
                    splitLine: false,
                    axisLabel: {
                        color: '#82a9ba',
                        fontSize: 10,
                        lineHeight: '14'
                    }
                }
            },           
            electricMonthOpts: {
                color: ['#4891BE'],
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
                grid: {
                    left: 20,
                    bottom: 20,
                    width: '80%',
                    height: '46%',
                },
                xAxis: {
                    type: 'category',
                    name: '周',
                    boundaryGap: false,
                    data: ['00:00','02:00','04:00','06:00','08:00','10:00'],
                    nameTextStyle: {
                        color: '#82a9ba',
                        
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#82a9ba'
                        }
                    },
                },
                yAxis: {
                    type: 'value',
                    name: '电量',
                    nameGap: '2',
                    nameTextStyle: {
                        color: '#82a9ba',
                        fontSize: 10
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#82a9ba'
                        }
                    },
                    splitLine: false,
                    axisLabel: {
                        color: '#82a9ba',
                        fontSize: 10,
                        lineHeight: '14'
                    }
                }
            },
            electricWeek1Opts: {
                color:['#513D95'],
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
                            // color: {
                            //     type: 'radial',
                            //     x: 0.5,
                            //     y: 0.5,
                            //     r: 0.5,
                            //     colorStops: [{
                            //         offset: 0, color: 'red' // 0% 处的颜色
                            //     }, {
                            //         offset: 1, color: 'blue' // 100% 处的颜色
                            //     }],
                            //     globalCoord: false // 缺省为 false
                            // }
                        },
                        smooth: true,
                        lineStyle: {
                            color: '#857AF9',
                        }
                    },
                ],
                grid: {
                    left: 20,
                    bottom: 20,
                    width: '80%',
                    height: '46%',
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    name: '日',
                    boundaryGap: false,
                    data: ['00:00','02:00','04:00','06:00','08:00','10:00'],
                    nameTextStyle: {
                        color: '#82a9ba',
                        fontSize: 12
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#82a9ba'
                        }
                    },
                },
                yAxis: {
                    name: '电量',
                    nameGap: '2',
                    nameTextStyle: {
                        color: '#82a9ba',
                        fontSize: 10
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#82a9ba'
                        }
                    },
                    splitLine: false,
                    axisLabel: {
                        color: '#82a9ba',
                        fontSize: 10,
                        lineHeight: '14'
                    }
                }
            },           
            electricMonth1Opts: {
                color: ['#4891BE'],
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
                grid: {
                    left: 20,
                    bottom: 20,
                    width: '80%',
                    height: '46%',
                },
                xAxis: {
                    type: 'category',
                    name: '周',
                    boundaryGap: false,
                    data: ['00:00','02:00','04:00','06:00','08:00','10:00'],
                    nameTextStyle: {
                        color: '#82a9ba',
                        
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#82a9ba'
                        }
                    },
                },
                yAxis: {
                    type: 'value',
                    name: '电量',
                    nameGap: '2',
                    nameTextStyle: {
                        color: '#82a9ba',
                        fontSize: 10
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#82a9ba'
                        }
                    },
                    splitLine: false,
                    axisLabel: {
                        color: '#82a9ba',
                        fontSize: 10,
                        lineHeight: '14'
                    }
                }
            },
            electricWeek2Opts: {
                color:['#513D95'],
                title: {
                    text: '近7天单日用电量（单日）',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: '14'
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
                            // color: {
                            //     type: 'radial',
                            //     x: 0.5,
                            //     y: 0.5,
                            //     r: 0.5,
                            //     colorStops: [{
                            //         offset: 0, color: 'red' // 0% 处的颜色
                            //     }, {
                            //         offset: 1, color: 'blue' // 100% 处的颜色
                            //     }],
                            //     globalCoord: false // 缺省为 false
                            // }
                        },
                        smooth: true,
                        lineStyle: {
                            color: '#857AF9',
                        }
                    },
                ],
                grid: {
                    left: 20,
                    bottom: 20,
                    width: '80%',
                    height: '46%',
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    name: '日',
                    boundaryGap: false,
                    data: ['00:00','02:00','04:00','06:00','08:00','10:00'],
                    nameTextStyle: {
                        color: '#82a9ba',
                        fontSize: 12
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#82a9ba'
                        }
                    },
                },
                yAxis: {
                    name: '电量',
                    nameGap: '2',
                    nameTextStyle: {
                        color: '#82a9ba',
                        fontSize: 10
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#82a9ba'
                        }
                    },
                    splitLine: false,
                    axisLabel: {
                        color: '#82a9ba',
                        fontSize: 10,
                        lineHeight: '14'
                    }
                }
            },           
            electricMonth2Opts: {
                color: ['#4891BE'],
                title: {
                    text: '近30天单周用电量（单日）',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: '14'
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
                grid: {
                    left: 20,
                    bottom: 20,
                    width: '80%',
                    height: '46%',
                },
                xAxis: {
                    type: 'category',
                    name: '周',
                    boundaryGap: false,
                    data: ['00:00','02:00','04:00','06:00','08:00','10:00'],
                    nameTextStyle: {
                        color: '#82a9ba',
                        
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#82a9ba'
                        }
                    },
                },
                yAxis: {
                    type: 'value',
                    name: '电量',
                    nameGap: '2',
                    nameTextStyle: {
                        color: '#82a9ba',
                        fontSize: 10
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#82a9ba'
                        }
                    },
                    splitLine: false,
                    axisLabel: {
                        color: '#82a9ba',
                        fontSize: 10,
                        lineHeight: '14'
                    }
                }
            }                       
        }
    },
    mounted() {
        $(function() {//初始化日历
        $( "#datepicker" ).datepicker({ firstDay: 1});
        });

        //获取图表容器       
        SetEcharts.init(this.$refs.aqi_index30,'pie',this.aqi_index30Opts)//初始化近30天AQI指标饼图
        SetEcharts.init(this.$refs.noise_30,'pie',this.noise_30Opts)//初始化近30天噪音分析饼图
        SetEcharts.init(this.$refs.aqi_index_year,'pie',this.aqi_index_yearOpts)//初始化近一年AQI指标饼图
        SetEcharts.init(this.$refs.noise_year,'pie',this.noise_yearOpts)//初始化近一年噪音分析

        // =======================
        let electricWeek = this.$refs.electric_week//获取近7天单日用电量线图容器
        let electricMonth = this.$refs.electric_month//获取近30天单周用电量线图容器
        let electricWeek1 = this.$refs.electric_week1//获取近7天单日用电量线图容器
        let electricMonth1 = this.$refs.electric_month1//获取近30天单周用电量线图容器
        let electricWeek2 = this.$refs.electric_week2//获取近7天单日用电量线图容器
        let electricMonth2 = this.$refs.electric_month2//获取近30天单周用电量线图容器
        
        let electricWeekEchart =  Echarts.init(electricWeek)//初始化近7天单日用电量线图
            electricWeekEchart.setOption(this.electricWeekOpts)

        let electricMonthEchart =  Echarts.init(electricMonth)//初始化近30天单周用电量线图
            electricMonthEchart.setOption(this.electricMonthOpts)

        let electricWeekEchart1 =  Echarts.init(electricWeek1)//初始化近7天单日用电量线图
            electricWeekEchart1.setOption(this.electricWeek1Opts)

        let electricMonthEchart1 =  Echarts.init(electricMonth1)//初始化近30天单周用电量线图
            electricMonthEchart1.setOption(this.electricMonth1Opts)

        let electricWeekEchart2 =  Echarts.init(electricWeek2)//初始化近7天单日用电量线图
            electricWeekEchart2.setOption(this.electricWeek2Opts)

        let electricMonthEchart2 =  Echarts.init(electricMonth2)//初始化近30天单周用电量线图
            electricMonthEchart2.setOption(this.electricMonth2Opts)
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
        overflow: auto;
        background: rgba(0, 11, 50, 0.6);
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
                &__radar {
                    position: relative;
                    width: 180px;
                    height: 180px;
                    box-sizing: border-box;
                }
            }
            .realtime-env {
                flex: 1;
                margin-top: 20px;
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

 		#schedule-box{
			width: 100%;
            .schedule-hd{
                display: flex;
                justify-content: space-between;
            }
            .schedule-bd {
                border-bottom: 1px solid #4891BE;
                border-right: 1px solid #4891BE;
            }
            .schedule-bd li::after {
                position: absolute;
                bottom: 0;
                left: 0;
                content: "";
                width: 100%;
                height: 10px;
                background: red;
            }
		.today{
			flex: 1;
			text-align: center;
		}
		.ul-box{
			overflow: hidden;
		}
		.ul-box > li{
			position: relative;
			float: left;
			width: 14.28%;
			text-align: center;
			padding: 5px 0;
			box-sizing: border-box;
		}
		.other-month{
			color: #999999;
			border: 1px solid #4891BE;
			border-right: 0;
			border-bottom: 0;
		}
		.current-month{
			color: #333333;
			border: 1px solid #4891BE;
			border-right: 0;
			border-bottom: 0;
		}
		.today-style{
			/* border-radius: 50%; */
			background: #58d321;
		}
		.arrow{
			cursor: pointer;
		}
		.dayStyle{
			display: inline-block;
			width: 35px;
			height: 35px;
			/* border-radius: 50%; */
			text-align: center;
			line-height: 35px;
			cursor: pointer;
		}
		.current-month > .dayStyle:hover{
			background: #00BDFF;
			color: #ffffff;
		}
		.today-flag{
			background: #00C2B1;
			color: #fff;
		}
		.boxshaw{
			box-shadow: 2px 2px 15px 2px #e3e3e3;
		}
		.selected-style {
			background: #00BDFF;
			color: #ffffff;
		}
		#h3Ele{
			text-align: center;
			padding: 10px;
		}   
		}
	

}
</style>
