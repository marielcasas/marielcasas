const tips = [
    "Consume alimentos saludables.",
    "Hidrátate.",
    "Evita consumir comida chatarra.",
    "Bebe un vaso de agua al levantarte.",
    "Incluye más ensaladas en tus comidas.",
    "Minimiza el sodio.",
];

document.getElementById("btnConsejo").addEventListener("click", () => {
    const random = Math.floor(Math.random() * tips.length);
    document.getElementById("textoConsejo").textContent =  "*" + tips[random];
});
