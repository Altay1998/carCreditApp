function createCard(array, pacStart, pacMAx) {
    let loc = getElLoc(document.getElementsByClassName("sec")[0]);

    for (let f = pacStart; f <= pacMAx; f++) {

        let ptext = `Price : ${array[f].price}\n
        Minimum price for credit : ${array[f].forCredit}\n
        Year : ${array[f].year}\n
        Mileage : ${array[f].km}\n
        Advertise date :  ${array[f].sticetDate}
        `;
        let mainDiv = createElement('div', ['col-md-4', 'col-sm-12', 'mb-2', 'mt-2','hov', f], null, null, loc);
        let card = createElement('div', ['card', `card${f}`], null, null, getElLoc(document.getElementsByClassName(f)[0]));
        let img = createElement('img', 'card-img-top', { 'src': array[f].src }, null, getElLoc(document.getElementsByClassName(`card${f}`)[0]));
        let dv = createElement('div', ['card-body', `crdbdy${f}`], null, null, getElLoc(document.getElementsByClassName(`card${f}`)[0]));
        let p = createElement('p', 'card-text', null, ptext, document.getElementsByClassName(`crdbdy${f}`)[0]);
        mainDiv.addEventListener('click',()=>{
            let element=JSON.stringify(array[f]);
           sessionStorage.setItem('array',element);
           document.location='inFormation.html';
        })
    }

}
function getElLoc(loc) {
    return loc;
}
function createElement(element, klass = null, cssProp = null, text = null, appendLocation = null) {
    let el = document.createElement(element);
    if (!isNUll(klass)) {
        if (typeof klass == "string") {
            el.classList.add(klass);
        } else if (typeof klass == "object") {
            for (let f of klass) {
                el.classList.add(f);
            }
        }
    }
    if (!isNUll(cssProp)) {
        for (let f in cssProp) {
            if (f == "src" || f == "href") {
                el[f] = cssProp[f];
            }
            else {
                el.style[f] = cssProp[f];
            }
        }
    }
    if (!isNUll(text)) {
        el.innerText = text;
    }
    if (!isNUll(appendLocation)) {
        appendLocation.appendChild(el);
    }
    return el;
}
function isNUll(arg) {
    return arg == null;
}

function createPacination(num, count) {
    let mainLoc = () => { return document.getElementsByClassName('pagination')[0] }
    let loc = () => { return document.getElementsByClassName('next')[0] }
    let paci = parseInt(sessionStorage.getItem("pac"));
    let say = 0;
    let dot = false;
    if (num <= count) {
        for (let i = 1; i <= num; i++) {
            createLi(mainLoc(), loc(), `${i}`)
        }
    } else {
        for (let i = 1; i <= num; i++) {
            if (say <= count) {
                if (paci == 1 || paci == num) {
                    if (i < 3 || i == num) {
                        createLi(mainLoc(), loc(), `${i}`);
                        say++;
                    }
                    else if ((i > 3 || i < num) && dot == false) {
                        let li = createElement('li', ['page-item'], null, null, null);
                        mainLoc().insertBefore(li, loc());
                        let a = createElement('a', 'page-link', { 'href': "#" }, "...", li);
                        say++;
                        dot = true;
                        li.addEventListener('click', () => {
                            sessionStorage.setItem("pac", num);
                            document.location.reload();

                        })
                    } else if (i == 1 || i > num - 2) {
                        createLi(mainLoc(), loc(), `${i}`);
                        say++;
                    } else if (dot == false) {
                        let li = createElement('li', ['page-item'], null, null, null);
                        mainLoc().insertBefore(li, loc());
                        let a = createElement('a', 'page-link', { 'href': "#" }, "...", li);
                        say++;
                        dot = true;
                        li.addEventListener('click', () => {
                            sessionStorage.setItem("pac", num);
                            document.location.reload();

                        })
                    }
                }
                else {
                    if (paci - 1 == i || paci + 1 == i || i == paci) {
                        createLi(mainLoc(), loc(), `${i}`);
                        say++;
                    } else if (i == 1 || i == num) {
                        let li = createElement('li', ['page-item'], null, null, null);
                        mainLoc().insertBefore(li, loc());
                        let a = createElement('a', 'page-link', { 'href': "#" }, "...", li);
                        say++;
                        li.addEventListener('click', () => {
                            sessionStorage.setItem("pac", i);
                            document.location.reload();

                        })
                    }
                }


            }
        }
    }
}
function createLi(mainLoc, loc, text) {
    let li = createElement('li', ['page-item'], null, null, null);
    mainLoc.insertBefore(li, loc);
    let a = createElement('a', 'page-link', { 'href': "#" }, text, li);

    li.addEventListener('click', () => {
        sessionStorage.setItem("pac", text);
        console.log("sad");
        document.location.reload();
    })

}
function createPage(array) {
    let count = parseInt(sessionStorage.getItem("pac")) - 1;
    let con = array.length - count * 12;
    if (count > 0) {
        let c = 12 * count;
        if (con > 11) {
            createCard(array, c, c + 11)
        } else {
            createCard(array, c, c + con - 1)
        }
    } else {
        createCard(array, 0, 11);
    }

}


function getActiveList(){
    let pacination=sessionStorage['pac'];
    let aaaa = document.getElementsByClassName("page-item");
    for (let f of aaaa) {
        if (f.innerText == pacination) {
            f.classList.add('active');
        }
    }
}

