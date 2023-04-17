Pizzeria da Bool
===
Creazione di una pagina rapresentatnte il menu della pizzeria

## Dati e visualizzazione
Di ogni pizza abbiamo le seguenti informazioni:
- Nome
- Immagine
- Prezzo
- Elenco ingredienti
- Descrizione
- Voti (da 1 a 5):
- - gusto
- - prezzo (voto più alto se più economica)
- - diet (voto più alto se è meno calorica)
- In testa alla pagine deve apparire (con tutte le informazioni complete) la pizza con la media voti più alta
- Sotto la "pizza top" appaiono le schede di tutte le pizze

Ogni scheda deve avere:
- Foto
- Nome
- Prezzo
- Media voti (rappresentato in stelline)
- Badge verde se è vegana

## Funzionalità
- Al click della scheda la "pizza top" viene sostituita con la pizza cliccata
- Le pizze devono essere mostrate in ordine crescente di prezzo
- Filtro pizze vegane / non vegane / tutte le pizze
- Motore di ricerca per nome
- Possibilità di aggiunta di una nuova pizza
- Possibilità di modifica / eliminazione di una pizza presente 

**WORKFLOW**

- Creare DB delle pizze (array oggetti delle pizze)
- Aggiungere proprietà isVeg in base agli ingredienti
- Aggiungere la proprietà vegana o no alle pizze
- Ordinare le pizze per prezzo e stamparle
- Visualizzazione pizza top
- Visualizzazione pizza cliccata
- Aggiugere filtro veg
- Sviluppare il motore di ricerca per nome
- Creare un form per aggiungere pizza