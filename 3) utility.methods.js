const tween = gsap.to(img2, { y: 200, duration: 5, paused: true })

// tween.duration(5)
// tween.delay(1)
// tween.kill()
setTimeout(() => {
	// tween.resume()
	tween.seek(2)
	tween.play()
}, 2000)
