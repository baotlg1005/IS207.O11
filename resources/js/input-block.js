const allInputBlock = document.querySelectorAll(".input-block")

allInputBlock.forEach(inputBlock => {
    const inputElement = inputBlock.querySelector("input")
    const recommendPanel = inputBlock.querySelector(".recommend-panel")
    const panelItems = inputBlock.querySelectorAll(".panel__item")

    if(recommendPanel === null) return;

    inputElement.addEventListener('focus', () => {
        recommendPanel.classList.add('show')
    })

    document.addEventListener('click', (e)=>{
        if (inputBlock.contains(e.target)) return;
        
        recommendPanel.classList.add('hide');
    })

    panelItems.forEach(item => {
        item.addEventListener('click', () =>{
            inputElement.value = item.dataset.type;
        })
    })
});