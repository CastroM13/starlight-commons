const fetch = require('node-fetch');
const router = require('express').Router();
var convert = require('xml-js');
const themes = require('./g1/g1topics.ts');

async function getNews(url) {
    return fetch(url)
    .then(function(response) {
        return response.text()
    })
    .then(function(xml) {
        return JSON.parse(convert.xml2json(xml, { object: true, compact: true, arrayNotation: true }));
    })
    .catch(function(err) {  
        res.status(404).json({error: err});
    });
}

function getAll() {
    return console.log('getAll')
}

function merge(obj) {
    return [].concat.apply([], Object.keys(obj).map(_ => obj[_]));
}

router.get('/:origin', async (req, res) => {
    const merged = merge(themes);
    try {
        await getNews(merged[merged.findIndex(e => e.id === req.params.origin)].url)
            .then(e => {
                res.status(200).json(e);
            },
            () => res.status(404).json({error: 'Não encontrado.'}))
            .catch(() => res.status(404).json({error: 'Não encontrado.'}))
        res.status(404).json({error: 'Não encontrado.'})
    } catch (e) {
        res.status(500).send({error: 'Erro interno do servidor'})
    }
});

module.exports = router;