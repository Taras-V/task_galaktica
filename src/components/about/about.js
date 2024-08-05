document.addEventListener('DOMContentLoaded', function () {
    const aboutItems = [
        { title: 'Lorem ipsum dolor sit amet consectetur', description: 'Lorem ipsum dolor sit amet consectetur. Vel duis nibh sodales in gravida dolor in. Elementum netus rhoncus sagittis nunc mi non egestas est. Aliquam maecenas in sed vestibulum neque feugiat pulvinar. Volutpat auctor a in sem vulputate aliquam tempor sit. Nulla urna felis penatibus ut cras sit.' },
        { title: 'Lorem ipsum dolor sit amet consectetur', description: 'Lorem ipsum dolor sit amet consectetur. Vel duis nibh sodales in gravida dolor in. Elementum netus rhoncus sagittis nunc mi non egestas est. Aliquam maecenas in sed vestibulum neque feugiat pulvinar. Volutpat auctor a in sem vulputate aliquam tempor sit. Nulla urna felis penatibus ut cras sit.' },
    ];

    function createItems(data) {
        data.forEach(item => {

            const block = document.createElement('div');
            block.className = 'about__item';

            const title = document.createElement('h3');
            title.className = 'about__item-title';
            title.textContent = item.title;

            const description = document.createElement('p');
            description.className = 'about__item-description';
            description.textContent = item.description;

            block.appendChild(title);
            block.appendChild(description);

            aboutWrap.appendChild(block);
        });
    }

    createItems(aboutItems);

});





