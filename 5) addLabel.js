const TL = gsap.timeline({
	defaults: {
		duration: 0.2,
		ease: 'power4.out',
	},
	onComplete: () => {
		console.log('COMPLETE')
	},
	// repeat: -1,
	// repeatDelay: 1,
	// yoyo: true,
	// paused: true,
})

TL.from('.img1', { autoAlpha: 0, y: -50 })
	.from('.img2', { autoAlpha: 0, y: -50 })
	.from('.img3', { autoAlpha: 0, y: -50 })
	.from('h1', { autoAlpha: 0, y: -50 })
	.addLabel('endAnim')
	.add(() => {
		console.log('end of the timeline')
	})
	.from('p', { autoAlpha: 0, y: -50 })

// setTimeout(() => {
// 	TL.seek()
// 	TL.play()
// }, 1500)
