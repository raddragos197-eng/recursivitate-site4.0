// Funcție recursivă pentru x^n
function power(x, n) {
    // Caz de bază
    if (n === 0) return 1;

    // Exponent negativ: x^(-n) = 1 / x^n
    if (n < 0) return 1 / power(x, -n);

    // Recursie
    return x * power(x, n - 1);
}

document.getElementById("calcBtn").addEventListener("click", function () {
    const base = Number(document.getElementById("base").value);
    const exp = Number(document.getElementById("exp").value);

    if (!Number.isFinite(base) || !Number.isFinite(exp)) {
        document.getElementById("result").textContent =
            "Introduceți valori valide!";
        return;
    }

    const rez = power(base, exp);

    document.getElementById("result").textContent =
        `${base} ^ ${exp} = ${rez}`;
});
