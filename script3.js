// Dati di esempio delle squadre
const squadre = [
    { posizione: 1, nome: "Betis Siviglia", punti: 12},
    { posizione: 3, nome: "Chelsea", punti: 9 },
    { posizione: 2, nome: "Milan", punti: 12 },
    { posizione: 5, nome: "Hellas Verona", punti: 3},
    { posizione: 4, nome: "Juventus", punti: 6},
    { posizione: 6, nome: "Brescia", punti: 0},
    { posizione: 7, nome: "Montorio", punti: 0}
    // Aggiungi più squadre secondo necessità
];

// Funzione per generare la tabella
function generaTabella(gironeA) {
    const tbody = document.querySelector("#gironeA tbody");

    // Pulisci il corpo della tabella
    tbody.innerHTML = '';

    // Ordina le squadre per punti (in ordine decrescente)
    squadre.sort((a, b) => b.punti - a.punti);

    // Genera le righe della tabella con i dati delle squadre
    squadre.forEach((squadra, index) => {
        const row = tbody.insertRow();
        const cellPosizione = row.insertCell(0);
        const cellSquadre = row.insertCell(1);
        const cellPunti = row.insertCell(2);

        cellPosizione.textContent = squadra.posizione;
        cellSquadre.textContent = squadra.nome;
        cellPunti.textContent = squadra.punti;
    });
}

// Chiama la funzione per generare la tabella al caricamento della pagina
window.onload = generaTabella(gironeA);

