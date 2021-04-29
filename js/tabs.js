const tabs = document.querySelector(".tab-buttons button");
const contents = document.querySelector(".content");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabs.forEach(btn => {
            btn.setAttribute('data-tabstate', 'inactive');
        });
        e.target.setAttribute('data-tabstate', 'active');
    }
}