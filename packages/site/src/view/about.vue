<template>
    <h1 style="margin: 1em 0;">鸽子窝</h1>
    <div class="about-container">
        <Card>
            <h3>提交问题</h3>
            如果发现任何问题，或存在任何建议，或者单纯的想聊聊天。
            都可以联系<a href="mailto: gaonenggg@outlook.com">站长</a>，我们会第一时间修复与答复
        </Card>
        <Card>
            <h3>贡献</h3>
            <span>如果你也想要参与到鸽子窝的开发，同样可以发邮件至<a href="mailto: gaonenggg@outlook.com">站长</a>，我们会第一时间将您拉进开发小组</span>
        </Card>
        <Card>
            <h3>打赏</h3>
            <span>
                目前还没有开通赞助通道，耐心等一下吧~
            </span>
        </Card>
        <Card>
            <h3>开销一览表</h3>
            <table border="1">
                <tr>
                    <th>项目</th>
                    <th>费用</th>
                </tr>
                <tr>
                    <td>腾讯云服务器</td>
                    <td>/</td>
                </tr>
                <tr>
                    <td>hato.icu域名</td>
                    <td>49/年</td>
                </tr>
            </table>
        </Card>
    </div>
</template>

<script lang="ts" setup>
import Card from '@/components/common/Card/card.vue';
</script>

<style>
.about-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}
</style>