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
                                <ul class="pro-draw__content__list">
                                    <li :style="{'background-image':'url('+require('../../assets/images/project_drawing.png')+')'}"></li>
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
                                    <li><a href="javaScript:;" class="icon-text icon-text-classify">所有</a></li>
                                    <li><a href="javaScript:;" class="icon-text icon-text-monitor">视频</a></li>
                                    <li><a href="javaScript:;" class="icon-text icon-text-smoke">智能烟感</a></li>
                                    <li><a href="javaScript:;" class="icon-text icon-text-env">环境监测</a></li>
                                    <li><a href="javaScript:;" class="icon-text icon-text-electric">智能电表</a></li>
                                    <li><a href="javaScript:;" class="icon-text icon-text-watermeter">智能水表</a></li>                                   
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
    mounted () {
        $(function(){//
            $('.dowebok1').liMarquee({//初始化liMarquee
                direction: 'up',
                scrollamount: 10,
                runshort: false,
                loop: -1
            });
        });
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
                        transition: all .2s linear;
                        &:nth-child(1):hover .icon-text::before{
                            .icon-text-classify_active;
                        }
                        &:nth-child(2):hover .icon-text::before{
                           .icon-text-monitor_active;
                        }
                        &:nth-child(3):hover .icon-text::before{
                            .icon-text-smoke_active;
                        }
                        &:nth-child(4):hover .icon-text::before{
                            .icon-text-env_active;
                        }
                        &:nth-child(5):hover .icon-text::before{
                            .icon-text-electric_active;
                        }
                        &:nth-child(6):hover .icon-text::before{
                            .icon-text-watermeter_active;
                        }
                    }

                    li:hover {
                        background-clip:padding-box,border-box;
                        background-origin:padding-box,border-box;
                        background-image:linear-gradient(135deg,#0F223F,#0F223F),linear-gradient(135deg,#3660AC,#513D95);
                        border:2px transparent solid;
                        transition: all .2s linear;
                        background-repeat: no-repeat;
                    }
                    li:hover a {
                        color: #fff;
                        text-shadow: 0px 0px 2px #fff, 0px 0px 4px #fff;
                        transition: all .2s linear;
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
