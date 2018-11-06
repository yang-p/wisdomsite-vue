<template>
    <div class="header">
        <div class="header__msg">
            <div class="header__msg__left">
                <div class="header__msg__left__wraper">
                    <div class="header__msg__logo"></div>
                    <div class="header__msg__title">智慧工地</div>
                    <div class="header__msg__nowdate">
                        <span>2018-10-8</span> 
                        <span>星期一</span>
                        <span>14:25:16</span>
                    </div>
                </div>
            </div>
            <div class="header__msg__center">
                <span class="project-title">恒大中心</span>
            </div>
            <div class="header__msg__right">
                <div class="header__msg__right__wrapper">
                    <div class="header__msg__zoom-btn" @click="fullScreen"></div>
                    <span class="header__msg__temp">成都市19℃</span>
                    <span class="header__msg__humidity">湿度20%</span>
                </div>
            </div>
        </div>
        <div class="header__nav">
            <div class="header__nav__left">
                <ul class="header__nav__list header__nav__listleft">
                    <li><router-link to="/projectOverview">项目概况</router-link></li>
                    <li><router-link to="/fundsManagement">资金管理</router-link></li>
                    <li><router-link to="/realTimeMonitoring">实时监控</router-link></li>
                    <li><router-link to="/envMonitoring">环境监测</router-link></li>
                    <li><router-link to="/equMonitoring">设备监控</router-link></li>
                </ul>
            </div>
            <div class="header__nav__center">
                <span class="rotate-square rotate-square__left"></span>
                <div class="accumulative-time">透明施工
                    <span>237</span>天
                    <span>16</span>小时
                    <span>23</span>分
                    <span>15</span>秒
                </div>
                <span class="rotate-square rotate-square__right"></span>
            </div>  
            <div class="header__nav__right">
                <ul class="header__nav__list header_nav__listright">
                    <li><router-link to="/materialManagement">物料管理</router-link></li>
                    <li><router-link to="/laborManagement">劳务管理</router-link></li>
                    <li><router-link to="/progressManagement">进度管理</router-link></li>
                    <li><router-link to="/securityManagement">安全管理</router-link></li>
                    <li><router-link to="/qualityManagement">质量管理</router-link></li>
                </ul>
            </div>        
        </div>
    </div>
</template>

<script>
import {ScreenZoom} from '../../src/assets/js/tools.js'
export default {
    name: 'PageHeader',
    data() {
        return {
           isFullScreen: false 
        }
    },
    mounted() {
        
    },
    methods: {
        fullScreen() {
            if(this.isFullScreen == false) {
                ScreenZoom.fullScreen()
                this.isFullScreen = true
            } else {
                ScreenZoom.exitFullScreen()
                this.isFullScreen = false
            } 
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/css/public.less';
    .header {
        &__msg {
            display: flex;
            justify-content: space-between;
            padding: 0 40px;
            width: 100%;
            height: 40px;
            color: @font-white;
            line-height: 40px;
            box-sizing: border-box;
            background-color: #0f223f;
            border-bottom: 1px solid @border-color1;
            &__logo {
                display: inline-block;
                margin-top: -6px;                
                width: 24px;
                height: 24px;
                vertical-align: middle;
                background-color: #fff;
                .bg-rps;      
            }
            &__title {
                display: inline-block;
                margin-left: 4px;
                font-size: 16px;
                line-height: 40px;
            }
            &__nowdate {
                display: inline-block;
                font-size: 10px;
                margin-left: 6px;
            }
            &__zoom-btn {
                display: inline-block;
                vertical-align: middle;
                width: 24px;
                height: 26px;
                background:  url(../assets/images/icon/icon_zoom.png) no-repeat;
                background-size: contain;
            }
            &__temp,
            &__humidity {
                font-size: 10px;
                margin: 0 4px;  
            } 
            &__left,
            &__right {
                flex: 1;
                position: relative;
                float: left;
                height: 100%;
                line-height: 40px;              
            }
            &__left {               
                &__wrapper {
                    position: absolute;
                    left: 0;
                }
            }
            &__right {
                &__wrapper {
                    position: absolute;
                    right: 0;
                }
            }
            &__center{
                width: 320px;
                text-align: center;
                .project-title {
                    position: relative;
                    font-size: 24px;
                    color: #B3D9ED;
                    &::before,
                    &::after {
                        content: "";
                        display: inline-block;                        
                        position: absolute;
                        top: 50%;
                        width: 70px;
                        height: 1px;
                    }
                    &::before {
                       left:-100px;
                       background: linear-gradient(90deg,#2C6790 0%,#4EC1E2 25%,#4EC1E2 100%);
                    }
                    &::after {
                        right:-100px;
                        background: linear-gradient(-90deg,#2C6790 0%,#4EC1E2 25%,#4EC1E2 100%);
                    }
                }
            }

        }
        &__nav {           
            display: flex;
            padding: 0 40px;
            height: 32px;                      
            background-color: #020A28;
            &__list {
                display: flex;
                li {
                    flex: 1;
                    height: 100%;
                    a {
                        font-size: 14px;
                        color: #fff;
                        line-height: 32px;
                        transition: all .2s linear;
                    }
                    a:hover {
                        color: #4891be;
                        transition: all .2s linear;
                    }
                }
                .router-link-active {
                    color: #4891be;
                }
            }
            &__left,
            &__right {
                flex: 1;
            }
            &__right {
                li {
                    text-align: right;
                }
            }
            &__center {
                position: relative;
                margin-top: -4px;
                width: 380px;              
                background-color: #070F30;                
                overflow: hidden;
                box-sizing: border-box;
                border-top-right-radius: 4px;
                border-top-left-radius: 4px;
                .accumulative-time {
                    display: inline-block;
                    height: 100%;
                    width: 100%;
                    color: #fff;
                    font-size: 12px;
                    line-height: 24px; 
                    text-align: center;
                    border-right: 0;
                    border-left: 0;
                    border-top: 2px solid #0f223f;                    
                    background-color: #0f223f;
                    box-sizing: border-box;
                    border-bottom: 1px solid @border-color1;              
                    span {
                        color: #4891be;
                    }
                }
                .rotate-square {
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    width: 22px;
                    height: 44px;
                    background-color: #020A28;
                    border-radius: 4px;
                }
                .rotate-square__left {
                    left: 0;
                    transform:rotate(-26deg) translate3d(-13px,-5px,0);
                    border-right: 1px solid @border-color1;
                }
                .rotate-square__right {
                    right: 0;
                    transform:rotate(26deg) translate3d(13px,-5px,0);
                    border-left: 1px solid @border-color1;
                }
            }
        }       
     }
</style>


