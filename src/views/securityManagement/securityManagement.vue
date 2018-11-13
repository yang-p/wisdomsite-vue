<template>
        <div class="content">
            <div class="content__wrapper">
                <div class="content__wrapper__left">
                    <div class="card flex-2" >
                        <div class="card__content flex-column" style="height: 100%;">
                            <div class="box-card flex-1">
                                <div class="box-card__header">
                                    <span class="box-card__header__title">今日检查</span>
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
                        <div class="pie-wrapper" style="height: 100%;">
                            <div style="height:80%;" ref="pie_inspect"></div>
                            <div class="flex-sparound pie-wrapper__bottom">
                                <div><span>检查总数</span><span>261项</span></div>
                                <div><span>合格</span><span>26项</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content__wrapper__center">
                <div class="swiper-card quality-display">
                    <div class="swiper-card__top-title">安全展示</div>
                    <div class="swiper-card__content" style="height: 100%;">                        
                        <div class="swiper-container" ref="swiper_quality1">                                                      
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src="../../assets/images/swiper1.png"></div>
                                <div class="swiper-slide"><img src="../../assets/images/swiper2.png"></div>
                                <div class="swiper-slide"><img src="../../assets/images/project _drawing.png"></div>
                                <div class="swiper-slide"><img src="../../assets/images/swiper1.png"></div>
                                <div class="swiper-slide"><img src="../../assets/images/swiper2.png"></div>
                                <div class="swiper-slide"><img src="../../assets/images/project _drawing.png"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-card quality-thumb">
                    <!-- <div class="swiper-card__content">                        
                        <div class="swiper-container" ref="swiper_quality2">                                                    
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src="../../assets/images/swiper1.png" alt=""></div>
                                <div class="swiper-slide"><img src="../../assets/images/swiper2.png" alt=""></div>
                                <div class="swiper-slide"><img src="../../assets/images/project _drawing.png" alt=""></div>
                                <div class="swiper-slide"><img src="../../assets/images/swiper1.png"></div>
                                <div class="swiper-slide"><img src="../../assets/images/swiper2.png"></div>
                                <div class="swiper-slide"><img src="../../assets/images/project _drawing.png"></div>
                            </div>
                            <div class="swiper-button swiper-button-prev"></div>
                            <div class="swiper-button swiper-button-next"></div>
                        </div>
                    </div> -->
                </div>
            </div>
                <div class="content__wrapper__right">
                    <div class="card flex-1">
                        <div class="card__header">
                            <span class="card__header__title">未佩戴安全帽抓拍</span>
                        </div>
                        <div class="card__content" style="height:85%;"></div>                                    
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
import {SetSwiper,SetEcharts} from '../../assets/js/tools.js'
export default {
    name: 'SecurityManagement',
    data() {
        return {
            pieInspectOpts: {//检查累计配置参数
                title: {
                    text: '整改率',
                    subtext: '96%',
                },
                series: [
                    {
                        name: '检查累计',
                        center: ['50%','40%'],
                        data: [
                            {value:217,name:'已整改'},
                            {value:25,name:'整改中'}
                        ],
                    }
                ],
                legend: {
                    right: '0',
                    top: '20%',                                   
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
                            {value:217,name:'施工用电'},
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
        // let pieInspect = this.$refs.pie_inspect //获取检查累计饼图的容器
        let pieProblem = this.$refs.pie_problem //获取问题分布饼图的容器
        // SetEcharts.init(pieInspect,'pie',this.pieInspectOpts,this.pieInspectLegendParam)//初始化检查累计饼图
        SetEcharts.init(pieProblem,'pie',this.pieProblemOpts)//初始化问题分布饼图
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
            display: flex;
            flex-direction: column;
        }
    }
}
</style>

