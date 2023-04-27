const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')

gsap.registerEffect({
	name: 'imgAnimation',
	effect: (targets, config) => {
		return gsap.to(targets, {
			duration: config.duration,
			y: 200,
			scale: 1.4,
			rotation: 360,
		})
	},
	defaults: {
		duration: 2,
	},
})
gsap.effects.imgAnimation(img1, { duration: 5 })
gsap.effects.imgAnimation(img2, { duration: 2 })
gsap.effects.imgAnimation(img3, { duration: 10 })
