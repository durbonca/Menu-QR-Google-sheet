const dataDestilados = [{
    title: 'DESTILADOS',
    description: 'de francia',
    family: [{
        title: 'Cognac',
        products: [
            { id: 1, name: 'Charles Gabriel V.S', description: '', cl: '4', price: '5.000' },
            { id: 2, name: 'Hennessy V.S.O.P.', description: '', cl: '4', price: '7.000' },
            { id: 3, name: 'Remy Martin V.S.O.P.', description: '', cl: '4', price: '8.000' },
        ]
    }, {
        title: 'Armagnac',
        products: [
            { id: 1, name: 'Lapostolle X.O', description: '', cl: '4', price: '7.000' },
            /* { id: 1, name: 'Laubade V.S.O.P.', description: '', cl: '4', price: '5.000'} */
        ]
    }, {
        title: 'Calvados',
        products: [
            { id: 1, name: 'G.E. Massenez', description: 'Destilado de Manzana', cl: '4', price: '5.000' }
        ]
    }, {
        title: 'Vieille Prune',
        products: [
            { id: 1, name: 'G.E. Massenez', description: 'Destilado de Ciruela', cl: '4', price: '5.000' }
        ]
    }, {
        title: 'Poire Williams',
        products: [
            { id: 1, name: 'G.E. Massenez', description: 'Destilado de Pera', cl: '4', price: '5.000' }
        ]
    }]
}, {
    title: 'Whisky',
    description: 'Manhattan, El Padrino, Clavo Oxidado, Sour, Old Fashioned',
    family: [{
            title: 'Scotch Highland Single Malt',
            products: [
                { id: 11, name: 'Dalmore', description: '15 Años', cl: 'Highland', price: '12.000' },
                { id: 11, name: 'Glenmorangie', description: '12 Años', cl: 'Highland', price: '8.000' },
                { id: 1, name: 'Glenmorangie', description: '10 Años', cl: 'Highland', price: '5.000' },
                { id: 2, name: 'Glenfarclas', description: '105', cl: 'Speyside', price: '5.500' },
                { id: 3, name: 'The Glenlivet', description: '15 Años', cl: 'Highland', price: '6.500' }
            ]
        },
        {
            title: 'Scotch Islay Single Malt',
            products: [
                { id: 2, name: 'Ardbeg Ten', description: '10 años', cl: 'Islay 6', price: '7.000' },
                { id: 1, name: 'Port Charlotte', description: 'Bruichladdich', cl: 'Islay 6', price: '6.500' },
            ]
        }, {
            title: 'Scotch Blend',
            products: [
                { id: 1, name: 'Dewar’s', description: '18 Años', cl: 'Highland 6', price: '6.500' },
                /* { id: 2, name: 'Chivas Regal', description: '18 Años', cl: 'Islay 6', price: '7.000'} */
            ]
        },
        { 
                title:'Japones', 
                products: 
                [
                    { id: 1, name: 'Akashi Black', description: '', cl: 'Hyogo 6', price: '6.500'} ]},
        {
            title: 'Whisky Tennessee',
            products: [
                { id: 1, name: 'Jack Daniel’s N°7', description: '', cl: 'Tennessee 6', price: '4.500' },
            ]
        },
        {
            title: 'Bourbon (U.S.A)',
            products: [
                { id: 1, name: 'Wild Turkey', description: '', cl: 'Kentucky 6', price: '4.000' },
                { id: 2, name: 'Maker’s Mark', description: '', cl: 'Kentucky', price: '5.500' },
                /* { id: 2, name: 'Wild Turkey', description: '', cl: 'Kentucky 6', price: '5.500'}, */
            ]
        }
    ]
}]

export default dataDestilados