<template>
    <div class="content">
        <div class="content__wrapper">
            <div class="content__wrapper__left">
                <div class="card labor-worker">
                    <div class="card__header">
                        <span class="card__header__title">人员</span>
                    </div>
                    <div class="card__content">
                        <ul>
                            <li class="flex-between"><span class="icon-text icon-text-user1">进场等级人数</span><span>356</span></li>
                            <li class="flex-between"><span class="icon-text icon-text-user2">今日考勤人数</span><span>356</span></li>
                            <li class="flex-between"><span class="icon-text icon-text-user3">项目在场人数</span><span>356</span></li>
                            <li class="flex-between"><span class="icon-text icon-text-user4">到场分包单位数</span><span>356</span></li>
                            <li class="flex-between"><span class="icon-text icon-text-user5">工种数</span><span>356</span></li>
                        </ul>
                    </div>
                </div>
                <div class="card labor-worktype">
                    <div class="card__header">
                        <span class="card__header__title">工种</span>
                    </div>
                    <div class="card__content">

                    </div>
                </div>   
            </div>             
            <div class="content__wrapper__center">
                   <div class="card labor-face">
                        <div class="card__top-title">人脸识别</div>
                        <div class="card__content labor-face__content">
                            <div class="labor-face__content__avatar">
                                <div class="flex-column_aligncenter">
                                    <div class="worker-avatar realTime-avatar"><img src="../../assets/images/worker_avatar1.png" alt=""></div>
                                    <p class="text-center">实时监控头像</p>
                                </div>
                                <div class="flex-column_aligncenter">
                                    <div class="worker-avatar register-avatar"><img src="../../assets/images/worker_avatar2.png" alt=""></div>
                                    <p class="text-center">登记人头像</p>
                                </div>
                            </div>                      
                            <div class="worker-info">
                                <div class="worker-info__left">
                                    <table class="table-info table-info1"> 
                                        <tr> 
                                            <td>姓名</td> 
                                            <td>小明</td> 
                                        </tr> 
                                        <tr> 
                                            <td>年龄</td> 
                                            <td>18</td> 
                                        </tr> 
                                        <tr> 
                                            <td>识别机位</td> 
                                            <td>1号入口闸机</td> 
                                        </tr>
                                        <tr> 
                                            <td>初次进入</td> 
                                            <td>2018-10-11 12:11:11</td> 
                                        </tr>
                                        <tr> 
                                            <td>末次</td> 
                                            <td>2018-10-11 21:45:16</td> 
                                        </tr> 
                                    </table>
                                </div>
                                <div class="worker-info__right">
                                    <table class="table-info table-info1"> 
                                        <tr> 
                                            <td>职务</td> 
                                            <td>班组长</td> 
                                        </tr> 
                                        <tr> 
                                            <td>班组</td> 
                                            <td>测试班组</td> 
                                        </tr> 
                                        <tr> 
                                            <td>工种</td> 
                                            <td>电焊工</td> 
                                        </tr>
                                        <tr> 
                                            <td>级别</td> 
                                            <td>A级</td> 
                                        </tr>
                                        <tr> 
                                            <td>分包单位</td> 
                                            <td>项目测试有限公司</td> 
                                        </tr> 
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div class="card labor-curve">
                        <div class="card__header">
                            
                        </div>
                    </div>
            </div>
            <div class="content__wrapper__right">

            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'LaborManagement',

}
</script>

<style lang="less" scoped>
@import '../../assets/css/variables.less';
@import '../../assets/css/components.less';
@import '../../assets/css/public.less';

.content {

    &__wrapper {
        &__left,
        &__center {
           .flex-column;

        }
    }
    .labor-worker {//劳务---人员
        flex: 3;
        
    }
    .labor-worktype {//劳务---工种
        flex: 2;
        margin-top: 20px;
    }
    .labor-face {//劳务---人脸识别
        flex: 4;
        &__content {
            .flex-column;
            height: 100%;
            &__avatar {
                // border: 1px solid yellow;
                display: flex;
                flex: 2;
                justify-content: space-around;
                border-bottom: 1px solid #316180;
                .worker-avatar {
                    height: 200px;
                    border: 2px solid #4891BE;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .worker-avatar + p {
                    color: #DBF0F8;
                    text-shadow: 0px 0px 2px #fff, 0px 0px 4px #fff;
                }
                .realTime-avatar {
                    width: 280px;           
                }
                .register-avatar {
                    width: 140px;
                }
            }
            .worker-info {
                display: flex;
                flex: 1;
                color: #D3D4D4;
                &__left {
                    flex: 1;

                }
                &__right {
                    flex: 1;
                    margin-left: 20px;
                }
                .table-info1 {
                    height: 100%;
                    .flex-column;
                    tr {
                        // border: 1px solid yellow;
                        td {

                            &:first-child {
                                // text-align: left;
                                float: left;
                            }
                            &:last-child {
                                // text-align: right;
                                float: right;
                            }
                        }
                        flex: 1;

                    }
                    
                    // justify-content: space-around;
                }
            }           
        }
        
        background: rgba(0,11,50,.8);

    }
    .labor-curve {//劳务---今日人力曲线
        flex: 1;
        margin-top: 20px;
    }
}
</style>
