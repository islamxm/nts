export const tabs = (tabsWrapper, tabsContainerQuery, tabsQuery, tabsContentsQuery) => {

    const tbWrapper = document.querySelector(tabsWrapper);

    if(tbWrapper) {
        const tabsContainer = tbWrapper.querySelector(tabsContainerQuery)
        const tabs = tbWrapper.querySelectorAll(tabsQuery);
        const tabsContents = tbWrapper.querySelectorAll(tabsContentsQuery);
    
    
        const hideTabs = () => {
            tabsContents.forEach(i => {
                i.classList.remove('active');
            });
            tabs.forEach(i => {
                i.classList.remove('active');
            });
        }
    
        const showTabs = (index = 0) => {
            tabsContents[index].classList.add('active');
            tabs[index].classList.add('active');
        }

        hideTabs();
        showTabs();

        


        tabsContainer.addEventListener('click', (e) => {
            let target = e.target;
            

            if(target && target.classList.contains(tabsQuery.slice(1))) {
                console.log('asda')
                tabs.forEach((item, index) => {
                    if(target == item) {
                        hideTabs();
                        showTabs(index);
                    }
                })

            }
        })

    }
    

    
}