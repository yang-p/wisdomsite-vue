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
                                    <li><img src="../../assets/images/project _drawing.png"></li>
                                    <li><img src="../../assets/images/swiper1.png" alt=""></li>
                                    <li><img src="../../assets/images/swiper2.png" alt=""></li>
                                    <li><img src="../../assets/images/project _drawing.png"></li>
                                    <li><img src="../../assets/images/swiper1.png" alt=""></li>
                                    <li><img src="../../assets/images/swiper2.png" alt=""></li>
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
                                    <li class="icon-circle">
                                        <div class="icon-circle__graph icon-circle-icon1"></div>
                                        <p class="icon-circle__title">深基坑-14</p>
                                    </li>
                                    <li class="icon-circle">
                                        <div class="icon-circle__graph icon-circle-icon2"></div>
                                        <p class="icon-circle__title">高支模-2</p>
                                    </li>
                                    <li class="icon-circle">
                                        <div class="icon-circle__graph icon-circle-icon3"></div>
                                        <p class="icon-circle__title">塔吊-6</p>
                                    </li>
                                    <li class="icon-circle">
                                        <div class="icon-circle__graph icon-circle-icon4"></div>
                                        <p class="icon-circle__title">卸料平台-5</p>
                                    </li>
                                    <li class="icon-circle">
                                        <div class="icon-circle__graph icon-circle-icon5"></div>
                                        <p class="icon-circle__title">养护室-8</p>
                                    </li>
                                    <li class="icon-circle">
                                        <div class="icon-circle__graph icon-circle-icon6"></div>
                                        <p class="icon-circle__title">工作电梯-9</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="box-card device-data">
                            <div class="box-card__header">
                                <span class="box-card__header__title">今日报警</span>
                            </div>
                            <div class="box-card__content">
                                <ul class="device-data__content__list">                                             
                                    <li class="flex-between"><span class="icon-text icon-text-usernum">人数</span><span>42人</span></li>
                                    <li class="flex-between"><span class="icon-text icon-text-floor">楼层</span><span>2层</span></li>
                                    <li class="flex-between"><span class="icon-text icon-text-carspeed">速度</span><span>0.6m/s</span></li>
                                    <li class="flex-between"><span class="icon-text icon-text-windspeed">风速</span><span>0.6m/s</span></li>
                                    <li class="flex-between"><span class="icon-text icon-text-height">高度</span><span>50m</span></li>
                                    <li class="flex-between"><span class="icon-text icon-text-username">驾驶员姓名</span><span>小明</span></li>
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
                    height: 80%;
                    &__list {
                        position: relative;
                        li {
                            position: absolute;
                            overflow: hidden;
                            img {
                                width: 100%;
                                max-height: 100%;
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
        .related-equ {//设备监控---相关设备
            // padding: 0;
            &__content {
                ul {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    li {
                        .icon-circle__graph {
                            background-size: 60%;
                        }
                          transition: all .2s linear;  
                        &:hover .icon-circle__title{
                            color: #fff;
                            text-shadow: 0px 0px 8px #fff, 0px 0px 16px #fff;
                        }
                        &:hover .icon-circle__graph {
                            box-shadow: 0 0 2px linear-gradient(135deg,#0F223F,#0F223F),linear-gradient(135deg,#3660AC,#513D95);
                            transition: all .2s linear;
                            box-sizing: border-box;
                        }
                        &:nth-child(1):hover .icon-circle__graph{                            
                                .icon-circle-icon1-act;                                                     
                        }
                        &:nth-child(2):hover .icon-circle__graph{
                                .icon-circle-icon2-act;
                        }
                        &:nth-child(3):hover .icon-circle__graph{
                                .icon-circle-icon3-act;                            
                        }
                        &:nth-child(4):hover .icon-circle__graph{
                                .icon-circle-icon4-act;                        
                        }
                        &:nth-child(5):hover .icon-circle__graph{
                                .icon-circle-icon5-act;                     
                        }
                        &:nth-child(6):hover .icon-circle__graph{
                                .icon-circle-icon6-act;                      
                        }
                    }
                }
            }
        }
        }
    }
}
</style>
