// Entrée : Nous recevrons deux listes d'entiers représentant les identifiants de lieux.
// Tri : Trier les deux listes dans l'ordre croissant.
// Appairage : Associer les éléments des deux listes selon l'ordre trié.
// Calcul des écarts : Pour chaque paire, calculer la différence absolue entre les deux éléments.
// Somme totale : Additionner toutes les différences pour obtenir la distance totale.

fetch('http://localhost:3000/input')
    .then(response => response.text())
    .then(data => {
        // console.log(data);

        function traiterDonnees(data) {
            const [listeGauche, listeDroite] = data.trim().split('\n').map(ligne => {
                // Séparer chaque ligne en deux parties (gauche et droite), puis convertir en nombres.
                const [gauche, droite] = ligne.split(' ').filter(valeur => valeur !== '').map(Number);
                return [gauche, droite]; 
            }).reduce(([gauche, droite], [g, d]) => {
                // Ajouter les valeurs à la bonne liste
                gauche.push(g);
                droite.push(d);
                return [gauche, droite];
            }, [[], []]);
        

            listeGauche.sort((a, b) => a - b);
            listeDroite.sort((a, b) => a - b);

            // console.log(listeGauche, listeDroite);

            let somme = 0;
            for (i = 0; i < listeGauche.length; i++) {
                somme += Math.abs(listeGauche[i] - listeDroite[i]);
                // console.log(somme);
            }
            
            // console.log("Somme totale des différences :" + somme);
        }
        
        
        traiterDonnees(data);
    })