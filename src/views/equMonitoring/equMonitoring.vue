<template>
    <div class="content">
        <div class="content__wrapper">
            <div class="card content__card">
                <div class="card__content content__card__wrapper">
                    <div class="content__card__left">
                        <div class="box-card">
                            <div class="box-card__header">
                                <span class="box-card__header__title">项目工程图</span>
                            </div>
                            <div class="box-card__content">

                            </div>
                        </div>
                    </div>
                    <div class="content__card__right">
                        <div class="box-card">
                            <div class="box-card__header">
                                <span class="box-card__header__title">相关设备</span>
                            </div>
                            <div class="box-card__content">

                            </div>
                        </div>
                            <div class="box-card">
                            <div class="box-card__header">
                                <span class="box-card__header__title">设备数据展示</span>
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
        .content__card__left {
            flex: 4;

        }
        .content__card__right {
            flex: 1;
            margin-left: 20px;
        }
    }
}
</style>
