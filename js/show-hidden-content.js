const blogArticles = document.querySelectorAll('.blog-article.short');

for (const blogArticle of blogArticles) {
    const moreButton = blogArticle.querySelector('.more');
    moreButton.onclick = function () {
        blogArticle.classList.remove('short');
    }
};