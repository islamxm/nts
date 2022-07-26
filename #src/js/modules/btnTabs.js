export const btnTabs = (listQuery, listItemsQuery) => {
    const list = document.querySelector(listQuery);
    const items = document.querySelectorAll(listItemsQuery);

    if(list && items.length > 0) {
        items.forEach(item => {
            item.addEventListener('click', () => {
                items.forEach(hide => {
                    hide.classList.remove('active');
                })
                item.classList.add('active');
            })
        })
    }
}