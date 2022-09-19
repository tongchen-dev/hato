<template>
  <div class="wrapper" ref="wrapper">
    <div id="start" class="section-1">
      <div class="info" ref="section1_obItem">
        <h1 class="banner-title" v-animate="'animate__animated animate__fadeInUp animate__fast'">鸽子窝</h1>
        <span v-animate="'animate__animated animate__fadeInUp animate__fast'">是一只给人们带来福音的小鸽子啦</span>
        <hatoButton 
          @click="toBiliBiliLive"
          v-animate="
            'animate__animated animate__fadeInUp'
          "
        >
          去黑听
        </hatoButton>
        <hatoButton
          v-animate="
            'animate__animated animate__fadeInUp'
          "
          style="margin-left: 20px" 
          only-border
          @click="toBiliBiliSpace"
        >
          成为鸠鸠人
        </hatoButton>
      </div>
      <div class="banner">
        <img 
          style="display: block;"
          v-animate="
            'animate__animated animate__fadeIn'
          " src="/images/hato.png" alt="" title="说实话这张图片挺生草的()"/>
      </div>
    </div>
    <div class="section-2">
      <HatoIntroduce />
    </div>
    <div class="section-3" ref="timeline" data-notInNav>
      <h1>大事年表</h1>
      <div class="timeline">
		<Suspense>
			<HatoTimeline :dataset="dataset" :is-show="isShow"/>
		</Suspense>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner-title{
	font-size: 64px;
}
.section-1{
  display: flex;
  width: 100%;
  margin: 0 10px;
  align-items: center;
  height: calc(100vh - 72px);
  .banner{
    display: inherit;
    flex: 1 0;
    img {
      width: 500px;
      margin: auto;
      display: block;
    }
  }
  .info{
    flex: 1 0;
    h1{
      color: $primary-500;
      margin-bottom: 16px;
      margin-top: 0;
      text-shadow: 0 5px $primary-600;
    }
    span {
      display: block;
      color: $text-500;
      margin-bottom: 16px;
    }
  }
}
.section-2 {
  padding: 0 2em;
  border-radius: 8px;
  box-sizing: border-box;
}
.section-3{
  width: 100%;
  h1{
    margin: 3em 0 .5em 0;
    color: $text-500;
    text-align: center;
  }
  .timeline{
    width: 90%;
    margin: auto;
    .arco-timeline-item.arco-timeline-item-last > .arco-timeline-item-dot-wrapper .arco-timeline-item-dot-line{
      display: unset;
    }
    .arco-timeline-item-content-wrapper{
      padding: 1em 1.5em;
      background: $white-100;
      .arco-timeline-item-content{
        color: $text-500;
      }
    }
  }
}
</style>

<script lang="ts" setup>
import dataset from './dataset.json';
import hatoButton from '@/components/common/button/button.vue';
import HatoIntroduce from '@/components/introduce/introduce.vue';
import HatoTimeline from '@/components/timeline/timeline.vue';
import { onMounted, ref } from 'vue';
import { useEventHub } from '@/hooks/useEventHub';
const toBiliBiliLive = ()=>{
	window.open('https://live.bilibili.com/7768761');
};
const toBiliBiliSpace = () => {
	window.open('https://space.bilibili.com/16217876');
};
// const markdownRender = mark2html(`
// :::card start
// # h1
// :::card end
// `);
// console.log(markdownRender);
const section1_obItem = ref(null);
const wrapper = ref(null);
const timeline = ref(null);
const isShow = ref(false);
onMounted(()=>{
	const timelineOb = () => {
		let ob = new IntersectionObserver((entries: IntersectionObserverEntry[])=>{
			entries.forEach((v:IntersectionObserverEntry)=>{
				isShow.value = v.isIntersecting;
				isShow.value && ob.unobserve(timeline.value as unknown as Element);
			});
		});
		ob.observe(timeline.value as unknown as Element);
	};
	const isInNav = (el: Element) => {
		return !Reflect.has((el as HTMLElement).dataset,'notinnav');
	};
	const isSection = (className: string) => {
		const classList = className.split(' ');
		return /section-\d{0,}/gim.test(classList.at(-1) || '');
	};
	const getSectionNumber = (str: string) => {
		return /section-(\d{0,})/gim.exec(str);
	};
	const hub = useEventHub();
	const sectionOb = () => {
		let ob = new IntersectionObserver((entries: IntersectionObserverEntry[])=>{
			entries.forEach((v:IntersectionObserverEntry)=>{
				if (v.isIntersecting){
					const className = v.target.className;
					if(isSection(className) && isInNav(v.target)){
						const sectionNumber = Number(getSectionNumber(className)?.[1]) - 1;
						hub.emit('update::menu::activeId', sectionNumber);
					}
				}
			});
		}, {
			threshold: [0.5]
		});
		const wrapperChildren = [...Array.from((wrapper.value as unknown as HTMLElement).children)];
		wrapperChildren.forEach((child)=>{
			ob.observe(child);
		});
	};
	timelineOb();
	sectionOb();
});

</script>