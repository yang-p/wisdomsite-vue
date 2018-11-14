<template>
    <div class="content">
        <div class="content__wrapper">
            <div class="content__wrapper__left">
                <div class="card em-date">
                    <div class="card__content"></div>
                </div>
                <div class="card em-pollutant">
                    <div class="card__header">
                        <span class="card__header__title">近24小时污染物浓度</span>
                    </div>
                    <div class="card__content">

                    </div>
                </div>
                <div class="card em-noise">
                    <div class="card__header">
                        <span class="card__header__title">近24小时噪音</span>
                    </div>
                    <div class="card__content">
                        
                    </div>                    
                </div>
            </div>
            <div class="content__wrapper__right">
                <div class="content-right__top">
                    <div class="content-right__top__left">
                        <div class="card em-realtime">
                            <div class="card__top-title">实时监控</div>
                            <div class="card__content">
                                <div class="box-card">
                                    <div class="box-card__content"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-right__top__right">
                        <div class="card em-total">
                            <div class="box-card total-electric">
                                <div class="box-card__header">
                                    <span class="box-card__header__title icon-text icon-text-allelectric">总电量：</span>
                                </div>
                                <div class="box-card__content total-electric__content">
                                    <div class="box-card total-electric__week">
                                        <div class="box-card__header">
                                            <span class="box-card__header__title em-total-title">近7天单日用电量（单日）</span>
                                        </div>
                                        <div class="box-card__content">

                                        </div>
                                    </div>
                                    <div class="box-card total-electric__month">
                                        <div class="box-card__header">
                                            <span class="box-card__header__title em-total-title">近30天单周用电量（单周）</span>
                                        </div>
                                        <div class="box-card__content">
                                        
                                        </div>
                                    </div> 
                                </div>
                            </div>
                           
                            <div class="box-card total-watar">
                                <div class="box-card__header">
                                    <span class="box-card__header__title icon-text icon-text-allwater">总水量：</span>
                                </div>
                                <div class="box-card__content">
                                    <div class="box-card total-watar__week">
                                        <div class="box-card__header">
                                            <span class="box-card__header__title em-total-title">近7天单日用水量（单日）</span>
                                        </div>
                                        <div class="box-card__content">

                                        </div>
                                    </div>
                                    <div class="box-card total-watar__month">
                                        <div class="box-card__header">
                                            <span class="box-card__header__title em-total-title">近30天单周用水量（单周）</span>
                                        </div>
                                        <div class="box-card__content">

                                        </div>
                                    </div>                                        
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
                <div class="content-right__bottom">
                    <div class="card">
                        <div class="box-card">
                            <div class="box-card__header">
                                <span class="box-card__header__title"></span>
                            </div>
                            <div class="box-card__content"></div>
                        </div>
                        <div class="box-card">
                            <div class="box-card__header">
                                <span class="box-card__header__title"></span>
                            </div>
                            <div class="box-card__content"></div>
                        </div>                            
                    </div>
                    <div class="card" style="margin-left: 20px;">
                        <div class="box-card">
                            <div class="box-card__header">
                                <span class="box-card__header__title"></span>
                            </div>
                            <div class="box-card__content"></div>
                        </div>
                        <div class="box-card">
                            <div class="box-card__header">
                                <span class="box-card__header__title"></span>
                            </div>
                            <div class="box-card__content"></div>
                        </div>                            
                    </div>                        
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'EnvMonitoring',
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
        }
        &__right {
            flex: 4;
            width: 100%;
          
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
                flex: 1;
                display: flex;
                margin-top: 20px;
            }
        }
    }
    .em-date {//日期
        flex: 3;

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
    }
    .em-total {
        .flex-column;
        height: 100%;
        &-title {
            font-size: 1.2rem;
        }
        .total-electric {
            flex: 1;
            &__content {

            }
            &__week {

            }
            &__month {

            }
        }
        .total-watar {
            flex: 1;
            margin-top: 10px;
             &__content {

            }
            &__week {

            }
            &__month {
                
            }           
        }
    }
}
</style>
