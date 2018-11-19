<template>
    <div class="content">
        <div class="content__wrapper">
            <div class="content__wrapper__left">
                <div class="card qm-today" >
                    <div class="card__content qm-today__content">
                        <div class="box-card qm-todaycheck">
                            <div class="box-card__header">
                                <span class="box-card__header__title">今日检查</span>
                                <span class="box-card__header__text-right">2018-10-12</span>
                            </div>
                            <div class="box-card__content qm-todaycheck__content">                             
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
                        <div class="box-card qm-todayreform">
                            <div class="box-card__header">
                                <span class="box-card__header__title">今日整改</span>
                                
                            </div>
                            <div class="box-card__content qm-todayreform__content">
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

                                    </table>   
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card qm-nosales">
                    <div class="card__content qm-nosales__content">
                        <div class="box-card">
                            <div class="box-card__header">
                                <span class="box-card__header__title">未销项对比（按分包商）</span>
                            </div>
                            <div class="box-card__content" style="height: 80%;overflow:hidden;">
                                <table class="table-list">
                                    <tr class="tr__th">
                                        <th>分类</th>
                                        <th>内容</th>
                                        <th>时间</th>
                                    </tr>
                                </table>
                                <div class="dowebok1" style="height: 100%;overflow:hidden;">
                                    <table class="table-list" style="background:rgba(14,38,71,.6);">
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
            </div>
            <div class="content__wrapper__center">
                <div class="swiper-card qm-display">
                    <div class="swiper-card__top-title">质量亮点展示</div>
                    <div class="swiper-card__content qm-display__content">                        
                        <div class="swiper-container swiper1" ref="swiper_quality1" id="gallery">                                                   
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
                        <div class="swiper-container" ref="swiper_quality2" id="thumbs">                                   
                            <div class="swiper-wrapper swiper1-thumb">
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper1.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper2.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/project_drawing.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper1.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper2.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/project_drawing.png')+')'}"></div>
                            </div>
                        </div>
                            <div class="swiper-button swiper-button-prev swiper-btn-prev"></div>
                            <div class="swiper-button swiper-button-next swiper-btn-next"></div>
                    </div>
                </div>
            </div>
            <div class="content__wrapper__right">
                <div class="card flex-1">                                       
                    <div class="card__header">
                        <span class="card__header__title">检查累计</span>
                    </div>
                    <div class="card__content" style="height: 85%;">
                        <div class="pie-wrapper" style="height: 100%;">
                            <div style="width: 100%;height:90%;" ref="pie_inspect"></div>
                            <div class="flex-sparound pie-wrapper__bottom" style="color: #82A9BA;">
                                <div><span>检查总数</span><span>261项</span></div>
                                <div><span>合格</span><span>26项</span></div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="card flex-1 margin-top-30">                    
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
import '../../assets/js/jquery.liMarquee.js'
import {SetEcharts} from '../../assets/js/tools.js'
import Swiper from 'swiper'
export default {
    name: 'QualityManagement',
    data() {
        return {          
            backgroundSrc:require('../../assets/images/project_drawing.png') ,
            pieInspectOpts: {//检查累计配置参数
               title: {
                    text: '整改率',
                    subtext: '96%',
                    left: '40%',
                    top: '30%',
                    textStyle: {

                        fontSize: 12
                    },
                    subtextStyle: {
                        fontSize: 18
                    },
                },
                color: ['#0CBD5C','#E5C63D'],
                series: [
                    {
                        name: '质量',
                        center: ['50%','40%'],
                        data: [
                            {value:217,name:'已整改'},
                            {value:25,name:'整改中'}
                        ],
                    }
                ],
                legend: {
                    left: '0',
                    top: '74%',   
                                    
                } 
            },
            pieProblemOpts: {//问题分布配置参数
                color: ['#0CBD5C','#EA3636','#E5C63D'],
                series: [
                    {
                        name: '质量',
                        radius: ['30%','50%'],
                        center: ['50%','40%'],
                        data: [
                            {value:217,name:'施工用电'},
                            {value:25,name:'基坑工程'},
                             {value: 19,name: '安全管理'}
                        ],
                        label: {
                            show: true
                        }
                    }
                ],
                legend: {
                    left: '0',
                    top: '70%',
                    orient: 'horizontal',
                    // data: [
                    //     {name:'施工用电'},
                    //     {name:'基坑工程'},
                    //      {name: '安全管理'}
                    // ]                    
                } 
            },
            pieInspectLegendParam: {//检查累计legend配置参数
                unity: '项',
            },
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
        let pieInspect = this.$refs.pie_inspect //获取累计检查饼图的容器
        let pieProblem = this.$refs.pie_problem //获取问题分布饼图的容器
        SetEcharts.init(pieInspect,'pie',this.pieInspectOpts,this.pieInspectLegendParam)//初始化累计检查饼图
        SetEcharts.init(pieProblem,'pie',this.pieProblemOpts)//初始化问题分布饼图

        let gallerySwiper = new Swiper('#gallery',{
            thumbs: {
                swiper: {
                    el: '#thumbs',
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    spaceBetween: 10,
                    slidesPerView: 4,
                    watchSlidesVisibility: true,
                },
                slideThumbActiveClass: 'my-slide-thumb-active',
            }
        })


    }
}
</script>

<style lang="less" scoped>
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
        &__right {
            height: 100%;
            overflow:hidden;
        }
    }

    .qm-today {
        flex: 2;
        &__content {
            .flex-column;
            height: 100%;
            .qm-todaycheck {//质量管理---今日检查
                flex: 1;
                &__content {
                    height: 80%;
                    overflow:hidden;
                }
            }
            .qm-todayreform {//质量管理---今日整改
                flex: 1;
                &__content {
                    height: 80%;
                    overflow:hidden;
                }
            }
        }
    }
    .qm-nosales {//质量管理---未销项对比
        flex: 1;
        margin-top: 30px;
        &__content {
            height: 100%;
        }
    }
    .qm-display {//质量管理--质量亮点展示
        flex: 3;
        background: rgba(0,11,50,1);
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
    .qm-thumb {//质量管理--质量亮点展示缩略图
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
            .swiper-btn-prev {
                background-image: url(../../assets/images/icon/swiper_prev1.png);
            }
            .swiper-btn-next {
                background-image: url(../../assets/images/icon/swiper_next1.png);
            }
        }
    }
}
</style>
