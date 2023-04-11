function revealer() {
    var button = document.getElementById('toggleButton'),
        content = document.getElementById('toggleContent');

    button.addEventListener('click', function () {
        content.classList.toggle('is-visible');

        var initialText = 'Více informací >';

        if (button.textContent.toLocaleLowerCase().includes(initialText.toLowerCase())) {
            button.textContent = 'Sbalit >';
            button.style.marginTop = "30px";
        } else {
            button.textContent = initialText;
            button.style.marginTop = "0";
        };
    });
}; revealer()

function dropDown() {
    var boxes = document.querySelectorAll(".lp-faq__box");

    function openbox(box) {
        var content = box.querySelector(".lp-faq__box--content");

        box.classList.add("lp-faq__box--active");
        content.style.maxHeight = content.scrollHeight + 10 + "px";
    };

    function closebox(box) {
        var content = box.querySelector(".lp-faq__box--content");

        box.classList.remove("lp-faq__box--active");
        content.style.maxHeight = null;
    };

    boxes.forEach(function (box) {
        var handle = box.querySelector(".lp-faq__box--handle"),
            content = box.querySelector(".lp-faq__box--content");

        handle.addEventListener('click', function () {
            if (content.style.maxHeight) {
                closebox(box);
            } else {
                boxes.forEach(function (box) {
                    closebox(box);
                });
                openbox(box);
            };
        });
    });
}; dropDown()