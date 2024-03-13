function getElementWidth(content, padding, border) {
    const Npx = parseFloat(content) + 2 * parseFloat(padding) + 2 * parseFloat(border);
    return Npx;
}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
