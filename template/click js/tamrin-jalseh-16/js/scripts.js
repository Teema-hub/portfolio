"use strict"


let stories = [
    {name: 'دفترچه هری پاتر', img: 'images/footer-bg.jpg'},
    {name: 'گیم روم بساز 2', img: 'images/gallery-img1.jpg'},
    {name: 'بیف رپی اپل و سامسونگ', img: 'images/gallery-img2.jpg'},
    {name: 'شکلات پذیرایی مینی کن سورین', img: 'images/gallery-img3.jpg'},
    {name: 'بالش دورگردنی مدل پمپ دار', img: 'images/gallery-img4.jpg'},
    {name: 'بهترین هدفون پرچمدار', img: 'images/gallery-img5.jpg'},
    {name: 'مشاوره خرید موبایل و کالای...', img: 'images/team1.jpg'},
    {name: 'مشاور خرید موبایل و کالای...', img: 'images/team2.jpg'},
    {name: 'مشاوره خرید لوازم خانگی برقی', img: 'images/team3.jpg'}
];


function showStories() {
    let storyContainer = document.getElementById('story-container');
    let storyHTML = '';

    for (let story of stories) {
        storyHTML += `
            <div class="col-2 story-item">
                <img src="${story.img}" alt="${story.name}">
                <div class="story-text">${story.name}</div>
            </div>
        `;
    }

    storyContainer.innerHTML = storyHTML;
}

showStories();
