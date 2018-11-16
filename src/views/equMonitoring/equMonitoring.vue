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
                        <div class="box-card related-equ">
                            <div class="box-card__header">
                                <span class="box-card__header__title">相关设备</span>
                            </div>
                            <div class="box-card__content related-equ__content">
                                <ul class="flex-between">                                    
                                    <li class="icon-circle" v-for="(item, index) in tabPage" :key="index" @click = "changeTab(index)">
                                        <div class="" :class = "[tabIndex === index ? 'icon' + index : 'icon-circle-icon'+ index ,tabIndex === index ? 'active': 'icon-circle__graph']"></div>
                                        <p class="icon-circle__title">{{item.title}}</p>
                                    </li>                                    
                                </ul>
                            </div>
                        </div>
                        <div class="box-card device-data">
                            <div class="box-card__header">
                                <span class="box-card__header__title">今日报警</span>
                            </div>
                            <div class="box-card__content device-data__content">
                                <ul class="device-data__content__list">                                    
                                    <li><span class="icon-text icon-text-usernum">人数</span><span>42人</span></li>
                                    <li><span class="icon-text icon-text-floor">楼层</span><span>2层</span></li>
                                    <li><span class="icon-text icon-text-carspeed">速度</span><span>0.6m/s</span></li>
                                    <li><span class="icon-text icon-text-windspeed">风速</span><span>0.6m/s</span></li>
                                    <li><span class="icon-text icon-text-height">高度</span><span>50m</span></li>
                                    <li><span class="icon-text icon-text-username">驾驶员姓名</span><span>小明</span></li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'EquMonitoring',
    data() {
        return {
            tabPage: [//相关设备数据
                {
                    title: '深基坑-14'
                },
                {
                    title: '高支模-2'
                },
                {
                    title: '塔吊-6'
                }, 
                {
                    title: '卸料平台-5'
                },
                {
                    title: '养护室-8'
                },
                {
                    title: '工作电梯-9'
                },          
            ],
            tabContent: [//项目工程图内容
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
            tabIndex: 0,
        }
    },
    methods: {
        changeTab(tabIndex) {
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
            flex: 1;
            margin-left: 20px;
            height: 100%; 
            overflow: hidden;
        }
    }

    .related-equ {//设备监控---相关设备
        height: 40%;
        &__content {
            margin-top: 10px;
            ul {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li {
                    .icon-circle__graph {
                        background-size: 60%;
                        border: 2px solid #1C3778;
                    }
                    
                    &:hover .icon-circle__title{
                        color: #fff;
                        text-shadow: 0px 0px 8px #fff, 0px 0px 16px #fff;
                        transition: all .2s linear;
                    }
                    &:hover .icon-circle__graph {
                        border:2px solid #513D95;
                    }
                    &:hover {
                        .icon-circle-icon0{                            
                            .icon-circle-icon0-act;                                          
                        }
                        .icon-circle-icon1{
                            .icon-circle-icon1-act;
                        }
                        .icon-circle-icon2{
                            .icon-circle-icon2-act;                             
                        }
                        .icon-circle-icon3{
                            .icon-circle-icon3-act;                         
                        }
                        .icon-circle-icon4{
                            .icon-circle-icon4-act;                       
                        }
                        .icon-circle-icon5{
                            .icon-circle-icon5-act;                      
                        }
                    }
                    transition: all .3s linear;
                    .active {
                            width: 50px;
                            height: 62px;
                            background-color: #0B2A5E;
                            border-radius: 50%;
                            background-repeat: no-repeat;
                            background-position: center center;
                            background-size: 60%;
                            border:2px solid #513D95;
                        & + .icon-circle__title{
                            color: #fff;
                            text-shadow: 0px 0px 8px #fff, 0px 0px 16px #fff;
                            transition: all .2s linear;
                        } 
                        transition: all .2s linear;             
                    }
                    .icon0 {
                        .icon-circle-icon0-act;
                    }
                    .icon1 {
                        .icon-circle-icon1-act;
                    }
                    .icon2 {
                        .icon-circle-icon2-act;
                    }
                    .icon3 {
                        .icon-circle-icon3-act;
                    }
                    .icon4 {
                        .icon-circle-icon4-act;
                    }
                    .icon5 {
                        .icon-circle-icon5-act;
                    }
                }

            }
        }      
    }
    .device-data {//设备监控---今日报警
        box-sizing: border-box;
        height: 56%;
        margin-top: 20px;
        &__content {
            height: 84%;
            padding-top: 10px;
            &__list {
                .flex-column;
                height: 100%;
                li {
                    display: flex;
                    flex: 1;
                    justify-content: space-between;
                }

            }
        }
    }

}

</style>
