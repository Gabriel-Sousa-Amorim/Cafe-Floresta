const gridViewBtn = document.querySelector("button#gridViewBtn");
const textViewBtn = document.querySelector("button#textViewBtn");
const cardapioContainer = document.querySelector("section#cardapioContainer");
let def;
textViewBtn.addEventListener("click", () => {
    gridViewBtn.color = "#bbb";
    textViewBtn.color = "#000";
    return (def = true);
});
gridViewBtn.addEventListener("click", () => {
    gridViewBtn.color = "#000";
    textViewBtn.color = "#bbb";
    return (def = false);
});
window.addEventListener("load", () => {
    fetch("./Pratos.json")
        .then((response) => {
            return response.json();
        })
        .then((element) => {
            for (const [key, values] of Object.entries(element)) {
                cardapioContainer.insertAdjacentHTML("beforeend",`
                <section id="${key}Container" class="flex flex-col my-5">
                    <h3 class="text-xl font-MontserratAlternates font-bold">${key.replaceAll("-"," ")}.</h3>
                    <section id="${key}Section" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-10 my-5"></section>
                    <hr>
                </section>`);
                for (value in values) {
                    document.querySelector(`#${key}Section`).insertAdjacentHTML("beforeend",`
                        <div class="flex flex-col justify-between p-4">
                            <img class="rounded rounded-lg aspect-square" src="${values[value].imgSrc}" alt="${values[value].name} Imagem">
                            <h3 class="font-bold">${values[value].name}</h3>
                            <p class="font-RethinkSans text-slate-500">${values[value].desc}</p>
                            <h3 class="font-bold">R$ ${values[value].price}</h3>
                        </div>`);}}
            });
        });
document.querySelectorAll("#viewContainer button").forEach((element) => {
    element.addEventListener("click", () => {
        console.log(cardapioContainer.getAttribute("data-type"));
        if (def) {

            if (cardapioContainer.getAttribute("data-type") == "text") {
                cardapioContainer.innerHTML = "";
                fetch("./Pratos.json")
                .then((response) => {
                    return response.json();
                })
                .then((element) => {
                    for (const [key, values] of Object.entries(element)) {
                        cardapioContainer.insertAdjacentHTML("beforeend",`
                        <section id="${key}Container" class="flex flex-col my-5">
                            <h3 class="text-xl font-MontserratAlternates font-bold">${key.replaceAll("-"," ")}.</h3>
                            <section id="${key}Section" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-10 my-5"></section>
                            <hr>
                        </section>`);
                        for (value in values) {
                            document.querySelector(`#${key}Section`).insertAdjacentHTML("beforeend",`
                                <div class="flex flex-col justify-between p-4">
                                    <img class="rounded rounded-lg aspect-square" src="${values[value].imgSrc}" alt="${values[value].name} Imagem">
                                    <h3 class="font-bold">${values[value].name}</h3>
                                    <p class="font-RethinkSans text-slate-500">${values[value].desc}</p>
                                    <h3 class="font-bold">R$ ${values[value].price}</h3>
                                </div>`);}}
                    });
                return cardapioContainer.setAttribute("data-type", "grid")
            } else {
                return true;
            }
        } else {
            if (cardapioContainer.getAttribute("data-type") == "grid") {
                cardapioContainer.innerHTML = "";
                fetch("./Pratos.json")
                .then((response) => {
                    return response.json();
                })
                .then((element) => {
                    for (const [key, values] of Object.entries(element)) {
                        cardapioContainer.insertAdjacentHTML("beforeend",`
                        <section id="${key}Container" class="flex flex-col my-5">
                            <h3 class="text-xl font-MontserratAlternates font-bold">${key.replaceAll("-"," ")}.</h3>
                            <section id="${key}Section" class="flex flex-col my-5"></section>
                            <hr>
                        </section>`);
                        for (value in values) {
                            document.querySelector(`#${key}Section`).insertAdjacentHTML("beforeend",`
                                <div class="flex flex-row justify-between p-4">
                                    <div class="flex flex-col">
                                        <h3 class="text-sm md:text-2xl w-10/12 md:text-nowrap font-bold">${values[value].name}</h3>
                                        <p class="w-10 text-wrap sm:text-nowrap text-xs font-RethinkSans text-slate-500 ">${values[value].desc}</p>
                                    </div>
                                    <h3 class="font-bold text-nowrap">R$ ${values[value].price}</h3>
                                </div><hr>
                                `);}}
                    });
                return cardapioContainer.setAttribute("data-type", "text")
            } else {
                return true;
            }
        }
    });
});


