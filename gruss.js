/**
 * Funktion zur Begrüßung des Benutzers.
 */
function begrüsseBenutzer(name) {
    // Definieren Sie eine Begrüßungsnachricht.
    const grussNachricht = "Hallo und willkommen!";
    
    // Erstellen Sie die vollständige Nachricht.
    let vollstaendigeNachricht = `${grussNachricht} Mein Name ist ${name}.`;
    
    // Geben Sie die Nachricht auf der Konsole aus.
    console.log(vollstaendigeNachricht);
}

// ----------------------------------------------------

// Variablen
const meinName = "Max Mustermann"; 
const alter = 30;                 

// Funktionsaufruf 
begrüsseBenutzer(meinName);

// Zusätzliche Ausgabe 
console.log(`Ich bin ${alter} Jahre alt.`); // Saya berumur 30 tahun.

// Eine einfache Bedingung
if (alter > 18) {
    console.log("Status: Volljährig.");
} else {
    console.log("Status: Minderjährig."); 
}
