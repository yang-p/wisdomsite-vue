<template>
    <div class="content">
        <div class="content__wrapper">
            <div class="content__wrapper__left">
                <!-- <div class="card">
                    <div class="card__content"></div>
                </div> -->
                <!-- <div class="card">
                    <div class="card_content">
                        <div class="box-card">
                            <div class="box-card__header">
                                <span class="box-card__header__title"></span>
                            </div>
                            <div class="box-card__content"></div>
                        </div>
                    </div>
                </div> -->
                <card>
                    <div class="card__top-title" slot="card-top-title">测试一下</div>
                    <box-card slot="card-content">
                        
                        <span class="box-card__header__title" slot="box-card-header-title">近24小时污染物浓度</span>
                        <div slot="box-card-content">123445</div>
                    </box-card>
                </card>
                <!-- <card></card> -->
                <!-- <div class="card">
                    <div class="card_content">
                        <div class="box-card">
                            <div class="box-card__header">
                                <span class="box-card__header__title">测试</span>
                            </div>
                            <div class="box-card__content"></div>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="content__wrapper__right">
                <div class="content-right__top">
                    <div class="content-right__top__left">
                        <div class="card">
                            <div class="card__content">
                                <div class="box-card">
                                    <div class="box-card__content"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-right__top__right">
                        <div class="card">
                            <div class="card__header">
                                <span class="card__header__title">总电量：</span>
                            </div>
                            <div class="card__content">
                                <div class="box-card">
                                    <div class="box-card__header">
                                        <span class="box-card__header__title"></span>
                                    </div>
                                    <div class="box-card__content">

                                    </div>
                                </div>
                                <div class="box-card">
                                    <div class="box-card__header">
                                        <span class="box-card__header__title"></span>
                                    </div>
                                    <div class="box-card__content">

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
        }
        &__right {
            flex: 4;
            width: 100%;
            .flex-column;
            .content-right__top {
                display: flex;
                flex: 4;
                // border: 1px solid red;
                &__left {
                    flex: 3;
                }
                &__right {
                    flex: 1;
                }
            }
            .content-right__bottom {
                flex: 1;
                // border: 1px solid green;
            }
        }
    }
}
</style>
