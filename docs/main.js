const gridViewBtn = document.querySelector("button#gridViewBtn");
const textViewBtn = document.querySelector("button#textViewBtn");
const cardapioContainer = document.querySelector("section#cardapioContainer");
let def;
textViewBtn.addEventListener("click", () => {
    gridViewBtn.color = "#bbb"
    textViewBtn.color = "#000"
    return def = 1;
});
gridViewBtn.addEventListener("click", () => {
    gridViewBtn.color = "#000"
    textViewBtn.color = "#bbb"
    return def = 0;
});

window.addEventListener("load", () => {
    fetch("./Pratos.json")
                .then((response) => {
                    return response.json();
                })
                .then((element) => {
                    for (const [key, values] of Object.entries(element)) {
                        cardapioContainer.insertAdjacentHTML(
                            "beforeend",
                            `
                <section id="${key}Container" class="flex flex-col">
                    <h3 class="text-xl font-MontserratAlternates font-bold">${key.replaceAll(
                                "-",
                                " "
                            )}.</h3>
                    <section id="${key}Section" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-10 py-10 mb-5"></section>
                </section>
            `
                        );

                        for (value in values) {
                            document.querySelector(`#${key}Section`).insertAdjacentHTML(
                                "beforeend",
                                `
                <div class="flex flex-col justify-between p-4 border border-white">
                    <img class="rounded rounded-lg aspect-square" src="${values[value].imgSrc}" alt="${values[value].name} Imagem">
                    <h3 class="font-bold">${values[value].name}</h3>
                    <p class="font-RethinkSans text-slate-500">${values[value].desc}</p>
                    <h3 class="font-bold">R$ ${values[value].price}</h3>
                </div>
                `
                            );
                        }
                    }
                });
})
document.querySelectorAll("#viewContainer button").forEach(element => {
    element.addEventListener("click", () => {
        if (def == 0) {
            if (cardapioContainer.children) {
                cardapioContainer.innerHTML = "";
            };
            fetch("./Pratos.json")
                .then((response) => {
                    return response.json();
                })
                .then((element) => {
                    for (const [key, values] of Object.entries(element)) {
                        cardapioContainer.insertAdjacentHTML(
                            "beforeend",
                            `
                            <section id="${key}Container" class="flex flex-col">
                            <h3 class="text-xl font-MontserratAlternates font-bold">${key.replaceAll("-", " ")}.</h3>
                            <section id="${key}Section" class="flex flex-col py-10"></section>
                            </section>
                            `
                        );

                        for (value in values) {
                            document.querySelector(`#${key}Section`).insertAdjacentHTML(
                                "beforeend",
                                `
                                    <div class="flex justify-between p-4 border border-white">
                                    <div>
                                    <h3 class="font-bold">${values[value].name}</h3>
                                    <p class="font-RethinkSans text-slate-500">${values[value].desc}</p>
                                    </div>
                                    <h3 class="font-bold">R$ ${values[value].price}</h3>
                                    </div>
                                    `
                            );
                        }
                    }
                });
        } else {
            if (cardapioContainer.children) {
                cardapioContainer.innerHTML = "";
            };
            fetch("./Pratos.json")
                .then((response) => {
                    return response.json();
                })
                .then((element) => {
                    for (const [key, values] of Object.entries(element)) {
                        cardapioContainer.insertAdjacentHTML(
                            "beforeend",
                            `
                <section id="${key}Container" class="flex flex-col">
                    <h3 class="text-xl font-MontserratAlternates font-bold">${key.replaceAll(
                                "-",
                                " "
                            )}.</h3>
                    <section id="${key}Section" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-10 py-10 mb-5"></section>
                </section>
            `
                        );

                        for (value in values) {
                            document.querySelector(`#${key}Section`).insertAdjacentHTML(
                                "beforeend",
                                `
                <div class="flex flex-col justify-between p-4 border border-white">
                    <img class="rounded rounded-lg aspect-square" src="${values[value].imgSrc}" alt="${values[value].name} Imagem">
                    <h3 class="font-bold">${values[value].name}</h3>
                    <p class="font-RethinkSans text-slate-500">${values[value].desc}</p>
                    <h3 class="font-bold">R$ ${values[value].price}</h3>
                </div>
                `
                            );
                        }
                    }
                });
        }
    });

});