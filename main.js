let questions = document.querySelectorAll('.qst')

questions.forEach(question => {
	question.addEventListener('click', () => {
		questions.forEach(question => {
			question.classList.remove('active')
		})

		question.classList.add('active')
	})
})
