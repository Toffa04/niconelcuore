// Funzione per generare la tabella
function generaTabella() {
    const tbody = document.querySelector("#classifica tbody");

    // Pulisci il corpo della tabella
    tbody.innerHTML = '';

    // Ordina le squadre per punti (in ordine decrescente)
    squadre2.sort((a, b) => b.punti - a.punti);

    // Genera le righe della tabella con i dati delle squadre
    squadre2.forEach((squadra, index) => {
        const row = tbody.insertRow();
        const cellPosizione = row.insertCell(0);
        const cellSquadre = row.insertCell(1);
        const cellPunti = row.insertCell(2);

        cellPosizione.textContent = squadra.posizione;
        cellSquadre.textContent = squadra.nome;
        cellPunti.textContent = squadra.punti;
    });
}
