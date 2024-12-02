import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const app = express();

// Utiliser CORS pour autoriser les requêtes depuis n'importe quelle origine
app.use(cors());

app.get('/input', async (req, res) => {
    try {
        const response = await fetch('https://adventofcode.com/2024/day/2/input', {
            headers: {
                'Cookie': 'session=53616c7465645f5ff1134aa5bfd63eba5193da96bef129502bba7f4f30bc58fec2149b9912c9e243aced117e5a0488a5286adee2dc353b625bfb3df783d5c442', 
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
