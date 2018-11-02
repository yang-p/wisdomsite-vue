<template>
        <div class="content">
            <div class="content__wrapper">
                <div class="content__wrapper__left">
                    <div class="card enginee-overview">
                        <div class="card__top-title">工程概况</div>                     
                        <div class="card__content">
                            <div class="box-card">
                                <div class="box-card__header">
                                    <span class="box-card__header__title">工程概况</span>
                                </div>
                                <div class="box-card__content">
                                    <ul>
                                        <li>工程名称<span>深圳恒大中心</span></li>
                                        <li>建设单位<span>恒大集团有限公司</span></li>
                                        <li>监理单位<span>上海市建设工程咨询监理有限公司</span></li>
                                        <li>施工单位<span>中国建筑第四工程局有限公司</span></li>
                                        <li>设计单位<span>深圳市岩土工程有限公司</span></li>
                                        <li>项目功能<span>写字楼</span></li>
                                        <li>建筑面积<span>288000㎡</span></li>
                                    </ul>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card env-monitor">
                        <div class="card__top-title">环境监测</div>
                        <div class="card__content">
                            <div class="box-card">
                                <div class="box-card__header">
                                    <span class="box-card__header">AQI</span>
                                    <div><span>78</span><span>良</span></div>
                                </div>
                                <div class="box-card__content"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content__wrapper__center">
                    <div class="swiper-card enginee-display">
                        <div class="swiper-card__content">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide"><img src="../../assets/images/swiper1.png" alt=""></div>
                                    <div class="swiper-slide"><img src="../../assets/images/swiper2.png" alt=""></div>
                                    <div class="swiper-slide"><img src="../../assets/images/project _drawing.png" alt=""></div>
                                </div>
                                <!-- 如果需要导航按钮 -->
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card enginee-progress">
                        <div class="card__top-title">工程进度</div>
                        <div class="box-card">
                        <div class="box-card__header">
                            <span class="box-card__header-title">工程进度</span>
                        </div>
                        <div class="box-card__content">
                            <ul>
                                <li>工程名称<span>深圳恒大中心</span></li>
                                <li>建设单位<span>恒大集团有限公司</span></li>
                                <li>监理单位<span>上海市建设工程咨询监理有限公司</span></li>
                                <li>施工单位<span>中国建筑第四工程局有限公司</span></li>
                                <li>设计单位<span>深圳市岩土工程有限公司</span></li>
                                <li>项目功能<span>写字楼</span></li>
                                <li>建筑面积<span>288000㎡</span></li>
                            </ul>                                   
                        </div>
                        </div>
                    </div>
                </div>
                <div class="content__wrapper__right">
                    <div class="card">
                        <div class="card__top-title">质量安全与劳务</div>
                        <div class="card__content" style="border:1px solid pink; display:flex;flex-direction: column;">
                            <div class="box-card" style="border: 1px solid red;margin-top:30px;flex:3;">
                                <div class="box-card__header">
                                    <span class="box-card__header__title">质量</span>
                                </div>
                                <div class="box-card__content">
                                    <!-- <div style="width:100%;height:160px;" class="pie-chart1"></div> -->
                                </div>
                            </div>
                             <div class="box-card" style="border: 1px solid yellow;margin-top:20px;flex:3;">
                                <div class="box-card__header">
                                    <span class="box-card__header__title">安全</span>
                                </div>
                                <div class="box-card__content">

                                </div>
                            </div>
                            <div class="box-card" style="border: 1px solid green;margin-top:20px;flex:2;">
                                <div class="box-card__header">
                                    <span class="box-card__header__title">劳务</span>
                                </div>
                                <div class="box-card__content">

                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
// import $ from 'jquery'
// import {setSwiper} from '../../assets/js/setSwiper.js'
// import PageHeader from '../../components/pageHeader/pageHeader'
// import '../../assets/js/setEcharts.js'
export default {
    name: 'ProjectOverview',
 
}
</script>
// <style lang="less" scoped>
@import '../../assets/css/variables.less';
@import '../../assets/css/components.less';
@import '../../assets/css/public.less';

.content {  
    &__wrapper {
        height: 100%;
        &__left {
            display: flex;
            flex-direction: column;
        }
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
    }
    .env-monitor {//环境监测
        flex: 2;
        margin-top: 30px;
    }
    .enginee-display {//工程展示
        flex: 4;
        height: 60%;
        width:100%;
        .swiper-container {
            height: 100%;
            .swiper-slide {
                width: 100%;
                height:100%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .enginee-progress {//工程进度
        flex: 1;
        margin-top: 30px;
    }
    .swiper-enginee-display {//swiper
        height: 100%;
    }
}
</style>


