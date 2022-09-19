<template>
    <div class="footer" style="margin-top: 64px;">
        <Layout class="footer-layout">
            <div class="copyright">
                <span>声明</span>
                <span class="copyright-text">
                    &copy; 2022鸽子窝
                </span>
                <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
                    采用 CC BY-NC 4.0 协议授权
                    <br />
                    <img 
                        alt="知识共享许可协议" 
                        style="border-width:0" 
                        src="https://licensebuttons.net/l/by-nc/4.0/80x15.png" 
                    />
                </a>
                <!-- <span>
                    <a href="mailto: gaonenggg@outlook.com">Contact</a>
                </span> -->
            </div>
            <div class="siteAbout">
                <span>导航</span>
                <router-link to="about">关于网站</router-link>
            </div>
            <!-- <div class="link">
                <span>友情链接</span>
            </div> -->
        </Layout>
        <!-- <div class="ICP">
            <span style="text-align: center;">
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxx号
            </span>
        </div> -->
    </div>
</template>

<script lang="ts" setup>
import Layout from '@/components/common/layout/layout.vue';
</script>

<style lang="scss">
.footer{
    background: $white-100;
    min-height: 100px;
    width: 100%;
    border-top: $white-300;
    font-size: 12px;
    .footer-layout{
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        div{
            display: flex;
            flex-direction: column;
            flex: 1 0;
            flex-wrap: wrap;
            gap: 8px;
            margin: 1em; 
            span{
                color: $text-600;
            }
            span:first-child{
                font-weight: bold;
                color: $text-500;
            }
            span~a{
                font-size: 14px;
            }
        }
    }
    .ICP{
        padding: .5em unset;
        text-align: center;
    }
}
</style>