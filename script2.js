// Dati di esempio delle squadre
const squadre2 = [
    { posizione: 1, nome: "Bromma", punti: 0 },
    { posizione: 2, nome: "Sarnico", punti: 0 },
    { posizione: 3, nome: "Inter", punti: 0 },
    { posizione: 4, nome: "Atletico Madrid", punti: 0},
    { posizione: 5, nome: "Atalanta", punti: 0},
    { posizione: 6, nome: "Virtus Verona", punti: 0},
    { posizione: 7, nome: "Benfica", punti: 0}
    // Aggiungi più squadre secondo necessità
];

// Funzione per generare la tabella
function generaTabella(gironeB) {
    const tbody = document.querySelector("#gironeB tbody");

    // Pulisci il corpo della tabella
    tbody.innerHTML = '';

    // Ordina le squadre per punti (in ordine decrescente)
    squadre2.sort((a, b) => b.punti - a.punti);

    // Genera le righe della tabella con i dati delle squadre
    squadre2.forEach((squadra, index) => {
        const row = tbody.insertRow();
        const cellPosizione = row.insertCell(0);
        const cellSquadre2 = row.insertCell(1);
        const cellPunti = row.insertCell(2);

        cellPosizione.textContent = squadra.posizione;
        cellSquadre2.textContent = squadra.nome;
        cellPunti.textContent = squadra.punti;
    });
}


// Chiama la funzione per generare la tabella al caricamento della pagina
window.onload = generaTabella(gironeB);
