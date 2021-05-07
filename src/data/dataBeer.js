const dataBeer = [
    { 
        title: 'Cervezas',
        subtitle: 'Botella', 
        products: 
        [
            { id: 0, name: 'Volcanes del Sur DoppelBock', description: '', price: '3.500'},
            { id: 1, name: 'Peroni', description: 'ALE - Italia - 33 Cl', price: '3.500'}, 
            { id: 2, name: 'Singha', description: 'LAGER - Tailandia - 33 Cl', price: '3.500' }, 
            { id: 3, name: 'La Montaña', description: 'LAGER - Chile - 33 Cl', price: '4.000'}, 
            { id: 4, name: 'Mestra', description: 'LAGER PILSEN - Chile - 33 Cl', price: '4.000'}, 
            { id: 5, name: 'La Montaña', description: 'IPA - Chile - 33 Cl', price: '4.000'}, 
            { id: 6, name: 'Mestra', description: 'AMBER ALE - Chile - 33 Cl', price: '4.000'},
        ]
    }, 
    { 
        subtitle: 'Barril', 
        products: 
        [
            { id: 4, name: 'Mestra', description: 'LAGER PILSEN - Chile', price: '3.000', price2:'1.500'},  
            { id: 6, name: 'Mestra', description: 'AMBER ALE - Chile', price: '3.000', price2:'1.500'},
            { id: 7, name: 'La Montaña', description: 'IPA - Chile', price: '3.000', price2:'1.500'},
        ]
    },
    { 
        title: 'Sin Alcohol', 
        products: 
        [
            { id: 1, name: 'Cerveza Mestra', description: '33 Cl', price: '3.500'}, 
            /*  { id: 2, name: 'Virgin Mary', description: '33 Cl', price: '3.500'}, */
            { id: 3, name: 'Virgin Mojito', description: '33 Cl', price: '3.500' }
        ]
    }, { 
        title: 'Aguas y Jugos', 
        products: 
        [
            { id: 1, name: 'Jugos Naturales', description: '', price: '3.500'}, 
            { id: 2, name: 'Limonada', description: '', price: '3.000' },
            { id: 25, name: 'Tónica Fentimans', description: '', price: '3.000' },
            { id: 3, name: 'Ginger Ale', description: 'Fever Tree', price: '3.000' }, 
            /* { id: 4, name: 'Ginger Beer', description: 'Fever Tree', price: '3.000' }, */ 
            { id: 5, name: 'Mediterránean', description: 'Fever Tree', price: '3.000' },
            /* { id: 51, name: 'Britvic', description: 'Ginger Ale', price: '3.000' }, */
            /* { id: 6, name: 'Tónica Light', description: 'Fever Tree', price: '3.000' }, */
            { id: 7, name: 'Eldelflower', description: 'Fever Tree', price: '3.000' }, 
            { id: 8, name: 'Agua Tónica', description: '1724', price: '3.000' },
            /* { id: 9, name: 'Aguas Minerales', description: 'Glenlivet, Perrier', price: '3.000'}, */ 
            { id: 91, name: 'Agua Perrier', description: 'Con Gas', price: '3.000' }, 
            { id: 10, name: 'Agua Porvenir', description: 'Con gas', price: '3.000'}, 
            { id: 9, name: 'Agua Porvenir', description: 'Sin gas', price: '3.000' },  
        ]
}]
export default dataBeer