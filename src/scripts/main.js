'use strict';

const spider = document.getElementsByClassName('spider')[0];

spider.style.top
= `${(spider.parentElement.clientHeight - spider.height) / 2}px`;

spider.style.left
= `${(spider.parentElement.clientWidth - spider.width) / 2}px`;
