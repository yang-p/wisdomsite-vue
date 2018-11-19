<template>
    <div class="content">
        <div class="content__wrapper">
            <div class="card content__card">
                <div class="card__content content__card__wrapper">
                    <div class="content__card__left">
                        <div class="box-card pro-draw">
                            <div class="box-card__header">
                                <span class="box-card__header__title">项目工程图</span>
                            </div>
                            <div class="box-card__content pro-draw__content">
                                <ul class="pro-draw__content__list" >
                                    <transition-group
                                    mode="out-in"
                                    enter-active-class = "animated slideInLeft"
                                    leave-active-class = "animated slideOutLeft">
                                        <li 
                                        v-for="(item, index) in tabContent" 
                                        :key = "index" 
                                        v-show="tabIndex === index" 
                                        :style="{'background-image': 'url('+ item.imgUrl +')'}">
                                            <div class="position-icon"><img :src = 'item.iconUrl' ></div>
                                        </li> 
                                    </transition-group>                                
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="content__card__right">
                        <div class="box-card monitor-equ">
                            <div class="box-card__header">
                                <span class="box-card__header__title">监控设备</span>
                            </div>
                            <div class="box-card__content monitor-equ__content">
                                <ul class="monitor-equ__list">                                                  
                                    <li v-for = "(item,index) in tabPage" :key = index :class="[tabIndex === index ? 'active':'']" @click = 'chooseTab(index)'>
                                        <a href="javaScript:;" class="icon-text" :class="item.icon">{{item.title}}</a>
                                    </li>
                                </ul>                          
                            </div>
                        </div>
                        <div class="box-card today-warn">
                            <div class="box-card__header">
                                <span class="box-card__header__title">今日报警</span>
                            </div>
                            <div class="box-card__content today-warn__content">
                                <div class="dowebok1" style="height: 100%;">
                                    <ul class="alert-today__list today-warn__list">                              
                                        <li class="alert-today__item today-warn__item">
                                            <p class="icon-text icon-text-warn alert-today__item__title">2018-9-10 14:22:00</p>
                                            <p>智能烟感：A01设备探测烟雾浓度超标</p>
                                        </li>
                                        <li class="alert-today__item today-warn__item">
                                            <p class="icon-text icon-text-warn alert-today__item__title">2018-9-10 14:22:00</p>
                                            <p>智能烟感：A01设备探测烟雾浓度超标</p>
                                        </li>
                                        <li class="alert-today__item today-warn__item">
                                            <p class="icon-text icon-text-warn alert-today__item__title">2018-9-10 14:22:00</p>
                                            <p>智能烟感：A01设备探测烟雾浓度超标</p>
                                        </li>
                                        <li class="alert-today__item today-warn__item">
                                            <p class="icon-text icon-text-warn alert-today__item__title">2018-9-10 14:22:00</p>
                                            <p>智能烟感：A01设备探测烟雾浓度超标</p>
                                        </li>
                                    </ul>
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
export default {
    name: 'RealTimeMonitoring',
    data() {
        return {           
                tabPage: [
                    {
                        title: '所有',
                        icon: 'icon-text-classify'
                    },
                    {
                        title: '视频',
                        icon: 'icon-text-monitor'
                    },
                    {
                        title: '智能烟感',
                        icon: 'icon-text-smoke'
                    },
                    {
                        title: '环境监测',
                        icon: 'icon-text-env'
                    },
                    {
                        title: '智能电表',
                        icon: 'icon-text-electric'
                    },
                    {
                        title: '智能水表',
                        icon: 'icon-text-watermeter'
                    },
                ],
                tabContent: [
                    {
                        imgUrl: require('../../assets/images/project_drawing.png'),
                        iconUrl: require('../../assets/images/icon/icon_classify.png')
                    },
                    {
                        imgUrl: require('../../assets/images/swiper1.png'),
                        iconUrl: require('../../assets/images/icon/icon_monitor.png')
                    },
                    {
                        imgUrl: require('../../assets/images/swiper2.png'),
                        iconUrl: require('../../assets/images/icon/icon_smoke.png')
                    },
                    {
                        imgUrl: require('../../assets/images/project_drawing.png'),
                        iconUrl: require('../../assets/images/icon/icon_env.png')
                    },
                    {
                        imgUrl: require('../../assets/images/swiper1.png'),
                        iconUrl: require('../../assets/images/icon/icon_electric.png')
                    },
                    {
                        imgUrl: require('../../assets/images/swiper2.png'),
                        iconUrl: require('../../assets/images/icon/icon_watermeter.png')
                    },                    
                ],
                tabIndex: 0, //当前选中状态下的tabPage的索引值，默认为0
                // tabPageAcitve: 0//是否为当前选中状态
            
        }
    },
    mounted () {
        $(function(){//
            $('.dowebok1').liMarquee({//初始化liMarquee
                direction: 'up',
                scrollamount: 10,
                runshort: false,
                loop: -1
            });
        });
    },
    methods: {
        chooseTab(tabIndex) {
            this.tabIndex = tabIndex
        }
    }

}
</script>

<style lang="less" scoped>
@import '../../assets/css/variables.less';
@import '../../assets/css/components.less';
@import '../../assets/css/public.less';
.content__card {
    height: 100%;
    &__wrapper {
        display: flex;
        height: 100%;
        padding: 5px 20px;
        .content__card__left {
            .flex-4;
            height: 100%;
            .pro-draw {
                height: 100%;
                overflow: hidden;
                &__content {
                    height: 92%;
                    margin-top: 10px;
                    &__list {
                        position: relative;
                        height: 100%;
                        li {
                            position: absolute;
                            overflow: hidden;
                            width: 100%;
                            height: 100%;
                            background-repeat: no-repeat;
                            background-size: contain; 
                            .position-icon {
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%,-50%);
                            }
                        }
                    }
                }
            }

        }
        .content__card__right {
            .flex-1;
            .flex-column;
            margin-left: 20px;
            height: 100%;
            .monitor-equ { //监控设备
                flex: 2;
                &__content {
                    margin-top: 10px;
                }
                &__list {
                    li {
                        padding: 4px 10px;
                        margin-bottom: 2px;
                        font-size: 1.2rem;
                        background-color: #0B2A5E;
                        border: 2px solid #1C3778;
                        border-radius: 4px;
                        &:hover {
                            background-clip:padding-box,border-box;
                            background-origin:padding-box,border-box;
                            background-image:linear-gradient(135deg,#0F223F,#0F223F),linear-gradient(135deg,#3660AC,#513D95);
                            border:2px transparent solid;
                            transition: all .2s linear;
                            background-repeat: no-repeat;
                            .icon-text-classify::before{
                                .icon-text-classify_active;
                            }
                            .icon-text-monitor::before{
                            .icon-text-monitor_active;
                            }
                            .icon-text-smoke::before{
                                .icon-text-smoke_active;
                            }
                            .icon-text-env::before{
                                .icon-text-env_active;
                            }
                            .icon-text-electric::before{
                                .icon-text-electric_active;
                            }
                            .icon-text-watermeter::before{
                                .icon-text-watermeter_active;
                            }
                        }
                    }
                    .active {                       
                            background-clip:padding-box,border-box;
                            background-origin:padding-box,border-box;
                            background-image:linear-gradient(135deg,#0F223F,#0F223F),linear-gradient(135deg,#3660AC,#513D95);
                            border:2px transparent solid;
                            transition: all .2s linear;
                            background-repeat: no-repeat; 
                            .icon-text-classify::before{
                                .icon-text-classify_active;
                            }
                            .icon-text-monitor::before{
                            .icon-text-monitor_active;
                            }
                            .icon-text-smoke::before{
                                .icon-text-smoke_active;
                            }
                            .icon-text-env::before{
                                .icon-text-env_active;
                            }
                            .icon-text-electric::before{
                                .icon-text-electric_active;
                            }
                            .icon-text-watermeter::before{
                                .icon-text-watermeter_active;
                            }                      
                         a {
                            color: #fff;
                            text-shadow: 0px 0px 2px #fff, 0px 0px 4px #fff;
                            transition: all .2s linear;
                        }

                    }

                }
            }
            .today-warn {//监控设备---今日报警
                flex: 3;
                height: 56%;
                margin-top: 10px;
                box-sizing: border-box;
                &__content {
                    height: 70%;
                    margin-top: 10px;

                }
                &__item {
                    p {
                        font-size: 1.2rem;
                        color: #fff;
                        &:last-child {
                            font-size: 1rem;
                            color: #82A9BA;
                        }
                    }
                }
            } 
        }
    }
}


</style>
