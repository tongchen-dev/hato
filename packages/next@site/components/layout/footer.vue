<template>
	<div class="footer">
		<nuxt-layout>
			<div class="footer__grid">
				<div class="footer__grid__community">
					<h4>联系与贡献</h4>
					<p><nuxt-link to="//github.com/tongchen-dev">同尘开源</nuxt-link></p>
					<p><nuxt-link to="//github.com/tongchen-dev/hato">代码仓库</nuxt-link></p>
				</div>
				<div class="footer__grid__other">
					<h4>其他项目</h4>
					<p title="公益性质的反霸凌宣传网站"><nuxt-link to="//www.light-tower.top">灯塔</nuxt-link></p>
				</div>
			</div>
		</nuxt-layout>
		<div class="license">
			<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
				<img alt="知识共享许可协议" style="border-width:0" src="https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png" />
				<br />
				采用 CC BY-NC-SA 4.0 协议授权
			</a>
		</div>
	</div>
</template>

<style lang="scss">
.footer {
	box-sizing: border-box;
	padding: $padding-md 0;
	width: 100%;
	min-height: 100px;
	background: white;

	h4 {
		font-size: 16px;
	}

	p,
	a {
		font-size: 15px;
	}

	.footer__grid {
		display: grid;
		width: 100%;
		grid-template-columns: 1fr 1fr;
		justify-items: center;

		div {
			text-align: center;
		}
	}

	.license {
		width: fit-content;
		margin: auto;
		text-align: center;

		img {
			margin: auto;
		}
	}
}
</style>