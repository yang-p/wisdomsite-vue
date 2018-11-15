<template>
    <div class="content">
        <div class="content__wrapper">
            <div class="content__wrapper__left">
                <div class="card labor-worker">
                    <div class="card__header">
                        <span class="card__header__title">人员</span>
                    </div>
                    <div class="card__content labor-worker__content">
                        <ul class="labor-worker__list">
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
                                <div class="labor-face__avatar">
                                    <div class="worker-avatar realTime-avatar" :style="{'background-image':'url('+require('../../assets/images/worker_avatar1.png')+')'}"></div>
                                    <p>实时监控头像</p>
                                </div>
                                <div class="labor-face__avatar">
                                    <div class="worker-avatar register-avatar" :style="{'background-image':'url('+require('../../assets/images/worker_avatar2.png')+')'}"></div>
                                    <p>登记人头像</p>
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
                        <div class="card__content labor-curve__content" style="height: 90%;">
                            <div style="height: 100%;" ref="line_cure"></div>
                        </div>
                    </div>
            </div>
            <div class="content__wrapper__right">
                <div class="card labor-unit">
                    <div class="card__header">
                        <span class="card__header__title">分包单位</span>
                    </div>
                    <div class="card__content labor-unit__content">
                        <div class="dowebok1" style="height: 100%;">
                            <div class="box-card unit-info">
                                <div class="box-card__header">
                                    <span class="box-card__header__title unit-info__header__title">项目测试有限公司</span>
                                </div>
                                <div class="box-card__content">
                                    <table class="table-info dowebok3">
                                        <tr class="three-column">
                                            <td>到场人数</td>
                                            <td><span class="td-bgcolor-1" style="width: 100%;"></span></td>
                                            <td>42</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>电焊工</td>
                                            <td><span class="td-bgcolor-2" style="width: 19%;"></span></td>
                                            <td>8</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>水泥工</td>
                                            <td><span class="td-bgcolor-3" style="width: 23%;"></span></td>
                                            <td>10</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>油漆工</td>
                                            <td><span class="td-bgcolor-4" style="width: 14%;"></span></td>
                                            <td>6</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>机械工</td>
                                            <td><span class="td-bgcolor-5" style="width: 35%;"></span></td>
                                            <td>15</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>架子工</td>
                                            <td><span class="td-bgcolor-6" style="width: 7%;border-radius: 2px;"></span></td>
                                            <td>3</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>  

                            <div class="box-card unit-info">
                                <div class="box-card__header">
                                    <span class="box-card__header__title unit-info__header__title">项目测试有限公司</span>
                                </div>
                                <div class="box-card__content">
                                    <table class="table-info">
                                        <tr class="three-column">
                                            <td>到场人数</td>
                                            <td><span class="td-bgcolor-1" style="width: 100%;"></span></td>
                                            <td>42</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>电焊工</td>
                                            <td><span class="td-bgcolor-2" style="width: 19%;"></span></td>
                                            <td>8</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>水泥工</td>
                                            <td><span class="td-bgcolor-3" style="width: 23%;"></span></td>
                                            <td>10</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>油漆工</td>
                                            <td><span class="td-bgcolor-4" style="width: 14%;"></span></td>
                                            <td>6</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>机械工</td>
                                            <td><span class="td-bgcolor-5" style="width: 35%;"></span></td>
                                            <td>15</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>架子工</td>
                                            <td><span class="td-bgcolor-6" style="width: 7%;border-radius: 2px;"></span></td>
                                            <td>3</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div class="box-card unit-info">
                                <div class="box-card__header">
                                    <span class="box-card__header__title unit-info__header__title">项目测试有限公司</span>
                                </div>
                                <div class="box-card__content">
                                    <table class="table-info">
                                        <tr class="three-column">
                                            <td>到场人数</td>
                                            <td><span class="td-bgcolor-1" style="width: 100%;"></span></td>
                                            <td>42</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>电焊工</td>
                                            <td><span class="td-bgcolor-2" style="width: 19%;"></span></td>
                                            <td>8</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>水泥工</td>
                                            <td><span class="td-bgcolor-3" style="width: 23%;"></span></td>
                                            <td>10</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>油漆工</td>
                                            <td><span class="td-bgcolor-4" style="width: 14%;"></span></td>
                                            <td>6</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>机械工</td>
                                            <td><span class="td-bgcolor-5" style="width: 35%;"></span></td>
                                            <td>15</td>
                                        </tr>
                                        <tr class="three-column">
                                            <td>架子工</td>
                                            <td><span class="td-bgcolor-6" style="width: 7%;border-radius: 2px;"></span></td>
                                            <td>3</td>
                                        </tr>
                                    </table>
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
import Echarts from 'echarts'
export default {
    name: 'LaborManagement',
    data() {
        return {
            lineCureOpts: {
                color: ['#F2B121','#51AEE0'],
                title: {
                    text: '今日人力曲线',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: '16'
                    }
                },
                grid: {
                    left: 30,
                    bottom: 20,
                    width: '80%',
                    height: '64%',
                },
                series: [
                    {
                        type: 'line',
                        name: '管理人员',
                        smooth: true,
                        data: [3, 4, 5, 6, 8, 10]
                    },
                    {
                        type: 'line',
                        name: '劳务人员',
                        smooth: true,
                        data: [10, 2, 3, 7, 9, 1]
                    }
                ],
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    // show: false,
                    type: 'category',
                    data: [
                            {
                            value: '00:00',
                            textStyle: {
                                color: '#82a9ba',
                                verticalAlign: 'top'
                            }
                        },
                            {
                            value: '02:00',
                            textStyle: {
                                color: '#82a9ba'
                            }
                        },
                            {
                            value: '04:00',
                            textStyle: {
                                color: '#82a9ba'
                            }
                        },
                            {
                            value: '06:00',
                            textStyle: {
                                color: '#82a9ba'
                            }
                        },
                            {
                            value: '08:00',
                            textStyle: {
                                color: '#82a9ba'
                            }
                        },
                            {
                            value: '10:00',
                            textStyle: {
                                color: '#82a9ba'
                            }
                        }
                        ],
                    boundaryGap: false,
                    
                    nameTextStyle: {
                        color: '#fff'
                    },
                    boundaryGap: ['20%','10%'],
                    axisLine: {
                        show: false,
                    },
                    onZero: false
                },
                yAxis: {
                    type: 'value',
                    name: '劳动力（人）',
                    nameLocation: 'center',
                    nameTextStyle: {
                        color: '#82a9ba',
                        fontSize: 10
                    },
                    minInterval: 1,
                    axisLine: {
                        show: false,
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#316180'
                        }
                    }

                },
                legend: {
                    right: 0,
                    top: 20,
                    orient: 'vertical',

                    textStyle: {
                        color: '#82a9ba',
                        fontSize: 12
                    },
                    data: [
                        {name: '管理人员',icon: 'roundRect'},
                        {name: '劳务人员',icon: 'roundRect'}
                    ]
                }
            }
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
        //获取今日人力曲线线图容器
        let lineCure = this.$refs.line_cure
        //初始化今日人力曲线线图
       let lineCureEchart =  Echarts.init(lineCure)
       lineCureEchart.setOption(this.lineCureOpts)
    }

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
        &__center {
            // overflow: hidden;
        }
    }
    .labor-worker {//劳务---人员
        flex: 3;
        &__content {
            height: 80%;
        }
        &__list {
            height: 100%;
            .flex-column;
            li {
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 1.2rem;
                span {
                    &:last-child {
                        font-size: 1.4rem;
                        text-shadow: 0px 0px 2px #fff, 0px 0px 4px #fff;  
                    }             
                }
            }
        }
        
    }
    .labor-worktype {//劳务---工种
        flex: 2;
        margin-top: 20px;
    }
    .labor-face {//劳务---人脸识别
        // flex: 3;
        height: 70%;
        &__content {
            .flex-column;
            height: 100%;
            margin-top: 30px;
            &__avatar {
                display: flex;
                height: 60%;
                justify-content: space-around;
                border-bottom: 1px solid #316180;
                .labor-face__avatar {
                    .flex-column;
                    align-items: center;
                }
                .worker-avatar {
                    height: 200px;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    border: 2px solid #4891BE;
                    overflow: hidden;
                }
                .worker-avatar + p {
                    color: #DBF0F8;
                    text-shadow:  0px 0px 1px #fff;
                }
                .realTime-avatar {
                    width: 320px;           
                }
                .register-avatar {
                    width: 140px;
                }
            }
            .worker-info {
                display: flex;
                // flex: 2;
                height: 40%;
                color: #D3D4D4;
                padding: 20px;
                &__left {
                    flex: 1;
                }
                &__right {
                    flex: 1;
                    margin-left: 40px;
                }
                .table-info1 {
                    height: 100%;
                    .flex-column;
                    tr {
                        td {
                            &:first-child {
                                float: left;
                            }
                            &:last-child {
                                float: right;
                            }
                        }
                        flex: 1;

                    }
                }
            }           
        }      
        background: rgba(0,11,50,.6);
    }
    .labor-curve {//劳务---今日人力曲线
        height: 30%;
        margin-top: 20px;
        &__content {
            height: 70%;
        }
    }
    .labor-unit {//劳务---分包单位
        height: 100%;
        overflow: hidden;
        padding-bottom: 10px;
        &__content {
            height: 90%;
            margin-top: 10px;
            
            .flex-column;
            .unit-info {
                flex: 1;
                border-bottom: 1px solid #316180;
                cursor: pointer;
                &__header__title {
                    font-size: 1.2rem;
                    text-shadow: 0px 0px 1px #fff, 0px 0px 3px #fff;
                }
                &:last-child {
                    border-bottom: none;
                }
                .table-info {
                    font-size:1rem;
                    color: #82a9ba;
                    height: 140px;
                    margin-top: 10px;
                }
            }
        }
    }
}
</style>
