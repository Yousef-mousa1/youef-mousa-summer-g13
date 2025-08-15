function handleFilter(category) {

    let categories = document.querySelectorAll('.categories')

    categories.forEach((element) => {
        (category == 'All') ? element.classList.remove('d-none') : element.classList.add('d-none')
    })

    if (category != 'All') {
        let categoryItems = document.querySelectorAll(`[data-category=${category}]`)
        categoryItems.forEach((element) => {
            element.classList.remove('d-none')
        })

    }
}