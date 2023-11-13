document.addEventListener('DOMContentLoaded', () => {
    const chooseColor = document.querySelectorAll('.choose-color__btn')
    const contentItem = document.querySelectorAll('.content-item')

    chooseColor.forEach(el => {
        el.addEventListener('click', open)
    })

    function open(e) {
        const target = e.currentTarget
        const button = target.dataset.button
        const contentActive = document.querySelectorAll('.' + button)

        chooseColor.forEach(el =>
            el.classList.remove('choose-color__btn--active')
        )

        target.classList.add('choose-color__btn--active')

        contentItem.forEach(item =>
            item.classList.remove('content-item--active')
        )

        contentActive.forEach(content =>
            content.classList.add('content-item--active')
        )
    }
})
