<template>
        <div class="content">
            <div class="content__wrapper">
                <div class="content__wrapper__left">
                    <div class="card flex-2" >
                        <div class="card__content flex-column" style="height: 100%;">
                            <div class="box-card flex-1">
                                <div class="box-card__header">
                                    <span class="box-card__header__title">今日检查</span>
                                    <span class="box-card__header__text-right">2018-10-12</span>
                                </div>
                                <div class="box-card__content" style="height: 80%;overflow:hidden;">                            
                                    <table class="table-list">
                                        <tr class="tr__th">
                                            <th>分类</th>
                                            <th>内容</th>
                                            <th>时间</th>
                                        </tr>
                                    </table>
                                    <div class="dowebok1" style="height: 100%;">
                                        <table class="table-list table-list__td">
                                            <tr>
                                                <td>测试项目责任有限公司</td>
                                                <td>20%</td>
                                                <td>80%</td>
                                            </tr>
                                            <tr>
                                                <td>测试项目责任有限公司</td>
                                                <td>20%</td>
                                                <td>80%</td>
                                            </tr>
                                            <tr>
                                                <td>测试项目责任有限公司</td>
                                                <td>20%</td>
                                                <td>80%</td>
                                            </tr>                                        
                                            <tr>
                                                <td>测试项目责任有限公司</td>
                                                <td>20%</td>
                                                <td>80%</td>
                                            </tr>
                                        </table>   
                                    </div>
                                </div>
                            </div>
                            <div class="box-card flex-1">
                                <div class="box-card__header">
                                    <span class="box-card__header__title">今日整改</span>
                                </div>
                                <div class="box-card__content" style="height: 80%;overflow:hidden; ">
                                    <table class="table-list">
                                        <tr class="tr__th">
                                            <th>分类</th>
                                            <th>内容</th>
                                            <th>时间</th>
                                        </tr>
                                    </table>
                                    <div class="dowebok1" style="height: 100%;overflow:hidden;">
                                        <table class="table-list table-list__td">
                                            <tr>
                                                <td>测试项目责任有限公司</td>
                                                <td>20%</td>
                                                <td>80%</td>
                                            </tr>
                                            <tr>
                                                <td>测试项目责任有限公司</td>
                                                <td>20%</td>
                                                <td>80%</td>
                                            </tr>
                                            <tr>
                                                <td>测试项目责任有限公司</td>
                                                <td>20%</td>
                                                <td>80%</td>
                                            </tr>
                                            <tr>
                                                <td>测试项目责任有限公司</td>
                                                <td>20%</td>
                                                <td>80%</td>
                                            </tr>
                                        </table>   
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="card flex-1 margin-top-30">                                       
                    <div class="card__header">
                        <span class="card__header__title">检查累计</span>
                    </div>
                   <div class="card__content" style="height:80%;">
                        <div class="pie-wrapper" style="height: 180px;">
                            <div style="height:80%;" ref="pie1"></div>
                            <div class="flex-sparound pie-wrapper__bottom" style="color: #82A9BA;">
                                <div><span>检查总数</span><span>261项</span></div>
                                <div><span>合格</span><span>26项</span></div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <div class="content__wrapper__center">
                <div class="swiper-card qm-display">
                    <div class="swiper-card__top-title">安全展示</div>
                    <div class="swiper-card__content qm-display__content">                        
                        <div class="swiper-container swiper1" id="gallery">                                                   
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper1.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper2.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/project_drawing.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper1.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper2.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/project_drawing.png')+')'}"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-card qm-thumb">
                    <div class="swiper-card__content qm-thumb__content">                        
                        <div class="swiper-container" id="thumbs">                                   
                            <div class="swiper-wrapper swiper1-thumb">
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper1.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper2.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/project_drawing.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper1.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper2.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/project_drawing.png')+')'}"></div>
                            </div>
                        </div>
                            <div class="swiper-button swiper-button-prev btn-prev"></div>
                            <div class="swiper-button swiper-button-next btn-next"></div>
                    </div>
                </div>
            </div>
                <div class="content__wrapper__right">
                    <div class="card swiper-snap">
                        <div class="card__header">
                            <span class="card__header__title">未佩戴安全帽抓拍</span>
                        </div>
                        <div class="card__content swiper-snap__content">
                            <div class="swiper-card">
                                <div class="swiper-card__content">                        
                                    <div class="swiper-container" id="swiper1">                                            
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide"><img src="../../assets/images/swiper1.png"></div>
                                            <div class="swiper-slide"><img src="../../assets/images/swiper2.png"></div>
                                            <div class="swiper-slide"><img src="../../assets/images/swiper1.png"></div>
                                            <div class="swiper-slide"><img src="../../assets/images/swiper2.png"></div> 
                                            <div class="swiper-slide"><img src="../../assets/images/swiper1.png"></div>
                                            <div class="swiper-slide"><img src="../../assets/images/swiper2.png"></div>                           
                                        </div>
                                        <div class="swiper-button swiper-button-prev swiper-btn-prev" @click = getRealIndex1></div>
                                        <div class="swiper-button swiper-button-next swiper-btn-next" @click = getRealIndex2></div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-snap__content__bottom">
                                <div class="smallview-swiper-index">{{realIndex}}/6</div>
                                <div class="smallview-swiper-time">时间：<span>2018-10-20 7:22:56</span></div>
                                <div class="smallview-swiper-position">位置：<span>2号闸机通道</span></div>                           
                            </div>
                        </div>                                    
                    </div>

                    <div class="card problem-distr">
                        <div class="card__header">
                            <span class="card__header__title">问题分布</span>
                        </div>
                        <div class="card__content" style="height:85%;">
                            <div style="height: 100%;" ref="pie_problem"></div>
                        </div>                       
                    </div>

                </div>
            </div>
        </div>
</template>
<script>
import $ from 'jquery'
import Swiper from 'swiper'
import '../../assets/js/jquery.liMarquee.js'
import {SetEcharts} from '../../assets/js/tools.js'
export default {
    name: 'SecurityManagement',
    data() {
        return {
            pie1Opts: {//质量饼图的配置参数            
                title: {
                    text: '整改率',
                    subtext: '99%',
                },
                color: [
                    {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#3D58A6' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#523C95' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#F4C424' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#EE8E1C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    } 
                ],
                series: [
                    {
                        name: '质量',
                        data: [
                            {value:217,name:'已整改'},
                            {value:25,name:'整改中'}
                        ],
                    }
                ],
                legend: {
                    right: '0',
                    top: '25%',
                    orient: 'vertical'                   
                } 
            },   
            pieProblemOpts: {//问题分布配置参数
                color: ['#0CBD5C','#EA3636','#E5C63D','#EB8504'],
                series: [
                    {
                        name: '问题分布',
                        radius: ['30%','50%'],
                        center: ['50%','30%'],
                        data: [
                            {value:37,name:'施工用电'},
                            {value:25,name:'基坑工程'},
                            {value: 19,name: '安全管理'},
                            {value: 42,name: '文明施工'}
                        ],
                        label: {
                            show: true
                        }
                    }
                ],
                legend: {
                    left: '0',
                    top: '70%',
                    align: 'left',
                    orient: 'horizontal',                 
                } 
            },
            pieInspectLegendParam: {//检查累计legend配置参数
                unity: '项',
            },
            swiper1: '',
            realIndex: 1,
            totalIndex: 0
        }
    },
    mounted() {
        $(function(){//初始化liMarquee
            $('.dowebok1').liMarquee({
                direction: 'up',
                scrollamount: 10,
                runshort: false,
                loop: -1

            });
        });
        let pieInspect = this.$refs.pie1 //获取检查累计饼图的容器
        let pieProblem = this.$refs.pie_problem //获取问题分布饼图的容器
        SetEcharts.init(pieInspect,'pie',this.pie1Opts,this.pieInspectLegendParam)//初始化检查累计饼图
        SetEcharts.init(pieProblem,'pie',this.pieProblemOpts)//初始化问题分布饼图

        let gallerySwiper = new Swiper('#gallery',{ //初始化swiper
        spaceBetween: 10,
            thumbs: {
                swiper: {
                    el: '#thumbs',
                    navigation: {
                        nextEl: '.btn-next',
                        prevEl: '.btn-prev',
                    },
                    spaceBetween: 10,
                    slidesPerView: 4,
                    watchSlidesVisibility: true,
                },
                slideThumbActiveClass: 'my-slide-thumb-active',
            }
        })
        let Swiper1 = new Swiper('#swiper1',{ //初始化swiper
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
        })
        this.swiper1 = Swiper1
    },
    methods: {
        getRealIndex1() {
            this.realIndex = this.swiper1.realIndex 
        },
        getRealIndex2() {
            this.realIndex = this.swiper1.realIndex + 2
        }
    },
    computed: {
        realIndex1() {
            return this.realIndex + 1;
        }
    }
}
</script>

</<style lang="less" scoped>
@import '../../assets/css/variables.less';
@import '../../assets/css/components.less';
@import '../../assets/css/public.less';
.content {
    &__wrapper {
        height: 100%;
        &__left,
        &__center,
        &__right {
            .flex-column;
        }
    }
    .qm-display {//安全管理--安全展示
        flex: 3;
        background: rgba(0,11,50,.6);
        &__content {
            height: 100%;
            .swiper-container {
                .swiper-wrapper {                  
                    .swiper-slide {
                        width: 100%;
                        height: 100%;
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center center;
                    }
                }
            }
        }
    }
    .qm-thumb {//安全管理--安全展示缩略图
        flex: 1;
        margin-top: 30px;      
        &__content {        
            padding: 10px 40px;
            box-sizing: border-box;
            .swiper-container {
                position: relative;
                box-sizing: border-box;
                .swiper-wrapper {
                    .swiper-slide {
                        width: 100%;
                        height: 100%;
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center center;
                    }
                }
            }
            .swiper-button {  
                position: absolute;             
                background-size: 40%;
                background-repeat: no-repeat;
                background-position: center center;
                outline: none;
            }
            .swiper-button-prev {
                background-image: url(../../assets/images/icon/swiper_prev1.png);
            }
            .swiper-button-next {
                background-image: url(../../assets/images/icon/swiper_next1.png);
            }
        }
    }
    .swiper-snap {//安全管理---未佩戴安全帽抓拍
       flex: 1;
       &__content {
           height: 85%;
           overflow: hidden;
           .swiper-card {
               height: 60%;
               &__content {
                   height: 100%;
                   .swiper-container {
                       height: 100%;
                       .swiper-button {
                            background: rgba(0,0,0,.4);
                            background-repeat: no-repeat;
                            background-position: center center;                          
                       }
                        .swiper-btn-prev {   
                            left: 0;                            
                            background-image: url(../../assets/images/icon/icon_smallprev.png);
                           }
                        .swiper-btn-next {
                            right: 0;
                            background-image: url(../../assets/images/icon/icon_smallnext.png);
                        }
                   }
               }
           }
           &__bottom {
               padding-top: 4%;
               height: 36%;
              .flex-column;
               justify-content: space-around;
               .smallview-swiper-index {
                   color: #82A9BA;
                   text-align: center;
               }
           }
       }
    }
    .problem-distr {//安全管理---问题分布
        flex:1;
        margin-top: 30px;
    }
}
</style>

