function showProgress() {
	const progressBarLength = 30
	let progress = 0

	const interval = setInterval(() => {
		const percentage = (progress / 100) * progressBarLength
		const progressBar = '='.repeat(percentage) + ' '.repeat(progressBarLength - percentage)
		process.stdout.write(`[${progressBar}] ${progress}%\r`)

		progress += 10
		if (progress > 100){
			clearInterval(interval)
			console.log('\nProcess Complete!')
		}
	}, 1000)
}

showProgress()
