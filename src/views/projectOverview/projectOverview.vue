<template>
    <div class="content">
        <div class="content__wrapper">
            <div class="content__wrapper__left">
                <div class="card enginee-overview">
                    <div class="card__top-title">工程概况</div>
                    <div class="card__header enginee-overview__header">
                        <span class="card__header__title">工程概况</span>
                    </div>                    
                    <div class="card__content dowebok1" style="height: 80%;">
                        <ul class="enginee-overview__list ">
                            <li>工程名称<span>深圳恒大中心</span></li>
                            <li>建设单位<span>恒大集团有限公司</span></li>
                            <li>监理单位<span>上海市建设工程咨询监理有限公司</span></li>
                            <li>施工单位<span>中国建筑第四工程局有限公司</span></li>
                            <li>设计单位<span>深圳市岩土工程有限公司</span></li>
                            <li>项目功能<span>写字楼</span></li>
                            <li>建筑面积<span>288000㎡</span></li>
                            <li>工程造价<span>暂无数据</span></li>
                        </ul> 
                    </div>
                </div>
                <div class="card env-monitor">
                    <div class="card__top-title">环境监测</div>
                    <div class="card__header env-monitor__header">
                        <div class="card__header__title-center ">
                            <span>AQI</span>
                            <div style="display:inline-block;color:#85F58F;"><span>78</span><span style="font-size:14px;">良</span></div>
                        </div>
                    </div>
                    <div class="card__content flex-column-jccenter flex-column-jcsaround" style="height: 70%;">
                        <div class="flex-alignitem_center">
                            <div class="icon-text icon-text-pm25 flex-1">PM2.5<span>57</span></div>
                            <div class="icon-text icon-text-thermometer flex-1" style="text-align: left;">温度<span>28</span></div>
                        </div>
                        <div class="flex-alignitem_center">
                            <div class="icon-text icon-text-pm10 flex-1">PM10<span>70</span></div>
                            <div class="icon-text icon-text-humidity flex-1">湿度<span>67%</span></div>
                        </div>
                        <div class="flex-alignitem_center">
                            <div class="icon-text icon-text-noise flex-1">噪音<span>57dB</span></div>
                            <div class="icon-text icon-text-windspeed flex-1">风速<span>0.6m/s</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content__wrapper__center">
                <div class="swiper-card enginee-display">
                    <div class="swiper-card__topbar">
                        <div class="swiper-card__topbar__left">
                            <span>轮播</span>
                            <div class="switch-btn">
                                <input type="checkbox" class="switch-btn__checkbox" :checked="ischecked" >
                                <label for="autoplay-btn" class="switch-btn__label" @click="autoPlayBtn"></label>                                                            
                            </div>
                        </div>
                        <span>全景图片</span>
                        <div class="swiper-card__topbar__right"> 
                            <span class="swiper-card__topbar__time"  @click="showList">2018-05-24</span>
                            
                                <transition-group                                  
                                    enter-active-class = "animated fadeIn"
                                    leave-active-class = "animated fadeOut">
                                    <ul class="swiper-card__topbar__list" v-show="isShowList" :key="999">
                                        <li :key="0">2018-05-20</li>
                                        <li :key="1">2018-05-21</li>
                                        <li :key="2">2018-05-22</li>
                                        <li :key="3">2018-05-23</li>
                                    </ul>
                                </transition-group>
                            
                        </div>                        
                    </div> 
                    <div class="swiper-card__content">                        
                        <div class="swiper-container" ref="swiper_enginee">                                            
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper1.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper2.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/project_drawing.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper1.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/swiper2.png')+')'}"></div>
                                <div class="swiper-slide" :style="{'background-image':'url('+require('../../assets/images/project_drawing.png')+')'}"></div>
                            </div>
                            <div class="swiper-button swiper-button-prev"></div>
                            <div class="swiper-button swiper-button-next"></div>
                        </div>
                    </div>
                </div>
                <div class="card enginee-progress">
                    <div class="card__top-title" ref="swiper-enginee1234">工程进度</div>
                        <div class="card__header enginee-progress__header">
                            <span class="card__header-title">工程进度</span>
                        </div>
                        <div class="card__content enginee-progress__content">
                            <div class="progress-bar">
                                <div class="progress-bar__text progress-bar__text__start">已施工（天）</div>
                                <div class="progress-bar__text progress-bar__text__end">总工期（天）</div>
                                <div class="progress-bar__wrapper">
                                    <ul class="progress-bar__list">
                                        <li data-date="2018/2/1" class="active"></li>
                                        <li data-date="2019/2/1" class="active"></li>
                                        <li data-date="2020/9/28"></li>
                                        <li data-date="2021/1/16"></li>
                                        <li data-date="2021/4/4"></li>
                                        <li data-date="2022/3/2"></li>
                                    </ul>
                                    <div class="progress-bar__line">
                                        <span class="progress-bar__line__top"></span>
                                    </div>
                                    <div class="progress-bar__btn progress-bar__btn__prev"></div>
                                    <div class="progress-bar__btn progress-bar__btn__next"></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div class="content__wrapper__right">
                <div class="card q-s-labor">
                    <div class="card__top-title">质量安全与劳务</div> 
                    <div class="card__content q-s-labor__content">
                        <div class="box-card quality">
                            <div class="box-card__header">
                                <span class="box-card__header__title">质量</span>
                            </div>
                            <div class="box-card__content quality__content">                               
                                <div class="pie-wrapper">
                                    <div style="width: 100%;height:80%;" ref="pie1"></div>
                                    <div class="flex-sparound pie-wrapper__bottom">
                                        <div><span>检查总数</span><span>261项</span></div>
                                        <div><span>合格</span><span>26项</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-card safety">
                            <div class="box-card__header">
                                <span class="box-card__header__title">安全</span>
                            </div>
                            <div class="box-card__content safety__content">
                                <div class="pie-wrapper">
                                    <div style="width: 100%;height:80%;" ref="pie2"></div>
                                    <div class="flex-sparound pie-wrapper__bottom">
                                        <div><span>检查总数</span><span>261项</span></div>
                                        <div><span>合格</span><span>26项</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-card labor">
                            <div class="box-card__header">
                                <span class="box-card__header__title">劳务</span>
                            </div>
                            <div class="box-card__content labor__content">
                                <div class="flex-1 labor__content__item">
                                    <div class="labor-icon_peoplenumber"></div>
                                    <span class="margin-top-20">实时人数</span>
                                    <span class="margin-top-20">98人</span>
                                </div>
                                <div class="flex-1 labor__content__item">
                                    <div class="labor-icon_labor"></div>
                                    <span class="margin-top-20">劳务人员</span>
                                    <span class="margin-top-20">68人</span>
                                </div>
                                <div class="flex-1 labor__content__item">
                                    <div class="labor-icon_manager"></div>
                                    <span class="margin-top-20">管理人员</span>
                                    <span class="margin-top-20">28人</span>
                                </div>                              
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
import '../../assets/js/jquery.liMarquee.js'
import {SetSwiper,SetEcharts} from '../../assets/js/tools.js'

export default {
    name: 'ProjectOverview',
    data() {
        return {
            ischecked: true,
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
                    data: [
                        {name:'已整改',icon:'circle'},
                        {name:'整改中',icon:'circle'}
                    ]                    
                } 
            },            
            pie2Opts: {//安全饼图的配置参数
                title: {
                    text: '整改率',
                    subtext: '15%',
                },
                color: [
                    '#4891BE',
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
                        name: '安全',
                        data: [
                            {value:217,name:'已整改'},
                            {value:25,name:'整改中'}
                        ],
                    }
                ],
                legend: {
                    right: '2%',
                    top: '25%',
                    data: [
                        {name:'已整改',icon:'circle'},
                        {name:'整改中',icon:'circle'}
                    ]                   
                } 
            },
            pieLegendParam: {
                unity: '项'
            },
            isShowList: false
        }
    },
    mounted() {
        $(function(){//
            $('.dowebok1').liMarquee({//初始化liMarquee
                direction: 'up',
                scrollamount: 10,
                runshort: false,
                loop: -1
            });
        });
        SetSwiper.init(this.$refs.swiper_enginee,{//初始化swiper
            autoplay: this.ischecked,
            mousewheel: true,
            grabCursor: true,
            roundLengths: true
        })
        SetEcharts.init(this.$refs.pie2,'pie',this.pie2Opts,this.pieLegendParam)//初始化pie2
        SetEcharts.init(this.$refs.pie1,'pie',this.pie1Opts,this.pieLegendParam)//初始化pie1
        
    },
    methods: {
        autoPlayBtn() {
            if(this.ischecked) {
                this.ischecked = false
            }else {
               this.ischecked = true            
            }
            SetSwiper.isAutoPlay(this.ischecked)
        },
        showList() {
            if(this.isShowList) {
                this.isShowList = false
            }else {
                this.isShowList = true
            }
        }
    },
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
        &__center {
            display: flex;
            flex-direction: column;
        }
        &__right {
            display: flex;
        }
    }
    .enginee-overview {//工程概况
        flex: 3;
        &__header {
            margin: 20px 0 10px;
        }
        &__list {
            li {
                line-height: 32px;
                .text-point;
                span {
                    margin-left: 10px;
                }
            }
        }
    }
    .env-monitor {//环境监测
        flex: 2;
        margin-top: 30px;
        &__header {
            margin: 20px 0 10px; 
            font-size: 16px;
        }
    }
    .enginee-display {//工程展示
        flex: 4;
        background: rgba(0,11,50,.6);
        .swiper-card__topbar {
            height: 40px;
            color: #fff;
            padding: 0 40px;
            line-height: 40px;
            box-sizing: border-box;
            text-align: center;
            &__left {
                float: left;
            }
            &__right {
                float: right;
                
            }
            &__time {
                position: relative;
               cursor: pointer;
                &::after {
                    content: "";
                    position: absolute;
                    right: -25%;
                    top: 20%;                  
                    transform: translate(0,-50%);
                    color: #fff;
                    width: 10px;
                    height: 10px;
                    background-image: url(../../assets/images/icon/icon_btnnext.png);
                    background-size: 50%;
                    background-repeat: no-repeat;
                    background-position: center center;
                    transform: rotate(90deg);
                }
            }
            &__list {
                position: absolute;
                width: 80px;
                color: #fff;
                background: rgba(0,0,0,.4);
                li {
                    animation: all .2s linear;
                    &:hover {
                        cursor: pointer;
                        background: rgba(0,0,0,8);
                        animation: all .2s linear;
                    }
                }
            }
        }
        .swiper-container {
            position: relative;
            width: 100%;
            height: 100%;

            .swiper-slide {
                width: 100%;
                height:100%;
                background-position: center center;
                background-size: contain;
                background-repeat: no-repeat;
            }
        .swiper-button {           
            background: rgba(0,0,0,.4);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 50%;
            }
        .swiper-button-next { 
            right: 0;
            background-image: url(../../assets/images/icon/swiper_btn_next.png);
            }
        .swiper-button-prev { 
            left: 0;
            background-image: url(../../assets/images/icon/swiper_btn_prev.png);
            }            
        }
    }
    .enginee-progress {//工程进度
        flex: 1;
        margin-top: 30px;
        background: url(../../assets/images/bg_map.png) no-repeat;
        background-size: 100%;
        background-position: center center;
        &__header {
            margin: 10px 0 0;
        }
        &__content {
            height: 64%;
            color: #fff;
        }
    }
    .q-s-labor {//质量安全与劳务    
        &__content {
            display:flex;
            flex-direction: column;
            height: 100%;
            .quality {
                margin-top:20px;
                flex:3;
                box-sizing: border-box;
                border-bottom: 1px solid #316180;
                &__content {
                    height:85%;
                    box-sizing: border-box;
                }
            }
            .safety {
                margin-top:20px;
                flex:3;
                &__content {
                    height:85%;
                    box-sizing: border-box;
                }
                border-bottom: 1px solid #316180;
            }
            .labor {
                margin-top:20px;
                flex:2;
                &__content {
                    display: flex;
                    height: 70%;
                    &__item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-around;
                    }
                }
            }
            .pie-wrapper {
                height: 100%;
                &__bottom {
                    font-size: 12px;
                    line-height: 14px;
                    color: #82A9BA;
                }
            }
        }
    }

}
</style>


