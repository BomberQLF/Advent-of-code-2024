import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors'; // Ajouter le module CORS

const app = express();

// Utiliser CORS pour autoriser les requêtes depuis n'importe quelle origine
app.use(cors());

app.get('/input', async (req, res) => {
    try {
        const response = await fetch('https://adventofcode.com/2024/day/1/input', {
            headers: {
                'Cookie': 'session=53616c7465645f5f344aed353db7ba777dc297c1981f46343562839e8de0378a281b881e8a940881bd53ea4f08aba80fd7fb18b2ae639570db064235f3e577fb', // Remplacez par votre cookie
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'text/plain'
            }
        });
        const data = await response.text();
        res.send(data); // Envoyer les données au client
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

app.listen(3000, () => {
    console.log('Proxy en écoute sur http://localhost:3000');
});
