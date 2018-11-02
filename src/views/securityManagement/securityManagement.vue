<template>
        <div class="content">
            <div class="content__wrapper">
                <div class="content__wrapper__left">
                    <div class="card">
                        <div class="card__content">
                            <div class="box-card">
                                <div class="box-card__header">
                                    <span class="box-card__header__title">今日检查</span>
                                </div>
                                <div class="box-card__content"></div>
                            </div>
                            <div class="box-card">
                                <div class="box-card__header">
                                    <span class="box-card__header__title">今日整改</span>
                                </div>
                                <div class="box-card__content"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                         <div class="card__content">
                            <div class="box-card">
                                <div class="box-card__header">
                                    <span class="box-card__header__title">检查累计</span>
                                </div>
                                <div class="box-card__content"></div>
                            </div>
                        </div>                       
                    </div>
                </div>
                <div class="content__wrapper__center">
                    <div class="swiper-card">

                    </div>
                </div>
                <div class="content__wrapper__right">
                    <div class="card">
                         <div class="card__content">
                            <div class="box-card">
                                <div class="box-card__header">
                                    <span class="box-card__header__title">未佩戴安全帽抓拍</span>
                                </div>
                                <div class="box-card__content"></div>
                            </div>
                        </div>                       
                    </div>
                    <div class="card">
                         <div class="card__content">
                            <div class="box-card">
                                <div class="box-card__header">
                                    <span class="box-card__header__title">问题分布</span>
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
    name: 'SecurityManagement',

}
</script>

<style lang="less" scoped>
@import '../../assets/css/variables.less';
@import '../../assets/css/components.less';
@import '../../assets/css/public.less';
</style>
