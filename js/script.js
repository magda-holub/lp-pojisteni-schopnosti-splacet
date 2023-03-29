function revealer() {
    let button = document.getElementById('toggleButton');
    let content = document.getElementById('toggleContent');

    button.addEventListener('click', function() {
        content.classList.toggle('is-visible');

        let initialText = 'Více informací >';

        if (button.textContent.toLocaleLowerCase().includes(initialText.toLowerCase())) {
            button.textContent = 'Sbalit >';
            button.style.marginTop = "30px"
        } else {
            button.textContent = initialText;
            button.style.marginTop = "0"
        }
    })

    
}; revealer()

function dropDown() {
    let boxes = document.querySelectorAll(".lp-faq--box");

    let openbox = (box) => {
        let content = box.querySelector(".lp-faq--box__content");
        box.classList.add("lp-faq--box__active");
        content.style.maxHeight = content.scrollHeight + 10 + "px";
    };

    let closebox = (box) => {
        let content = box.querySelector(".lp-faq--box__content");
        box.classList.remove("lp-faq--box__active");
        content.style.maxHeight = null;
    };

    boxes.forEach((box) => {
        let handle = box.querySelector(".lp-faq--box__handle");
        let content = box.querySelector(".lp-faq--box__content");

        handle.onclick = () => {
            if (content.style.maxHeight) {
                closebox(box);
            } else {
                boxes.forEach((box) => closebox(box));
                openbox(box);
            }
        };
    });

}; dropDown()