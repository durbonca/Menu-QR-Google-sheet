const dataLicor = 
      [{ 
            title: 'COCTELES', 
            products: 
            [
                { id: 1, name: 'Martini', description: '', cl: '6', price2: '3.000'} , 
                { id: 2, name: 'Gancia', description: '', cl: '6', price2: '3.000'} , 
                { id: 3, name: 'Pastis', description: '', cl: '4', price2: '3.000'} , 
                { id: 4, name: 'Campari', description: '', cl: '6', price2: '4.000'} , 
                { id: 5, name: 'Ramazzotti', description: '', cl: '6', price2: '4.000 '} 
            ]
      }, 
        { title: 'Los Macerados', 
            products: 
            [
                { id: 1, name: 'Negroni', description: 'Gin Citrix, Campari y Vermouth', price2: '4.000'} 
            ]
     }, { 
            title: 'Los Spritz', 
            products: 
            [
                /* { id: 1, name: 'Aperol', description: '', price2: '4.000 '},  */
                { id: 2, name: 'Saint Germain', description: '', price2: '5.500 '}, 
                { id: 3, name: 'Libertin', description: 'Vodka, Chartreuse, Saint Germain', price2: '4.000 '}, 
                { id: 4, name: 'Piscina', description: 'Espumante, Triple Sec, Limón', price2: '4.000'} 
        ]
    } , { 
            title: 'Pisco', 
            description: 'Sour, Chilcano, Pistón, ...', 
            cl2: '6', 
            products: 
                [
                    { id: 1, name: 'Los Capellanes', description: 'Ica (PR)', price2: '3.500 '} , 
                    { id: 2, name: 'Cultura 38º', description: 'Elqui', price2: '3.500'} , 
                    { id: 3, name: 'Waqar', description: 'Limarí', price2: '5.000'} , 
                    /*  { id: 4, name: 'Horcón Quemado', description: 'San Félix', price2: '4.000'} , */
                    { id: 5, name: 'Mulet', description: 'San Félix', price2: '4.000'} , 
                    { id: 6, name: 'Black Heron', description: 'Limarí', price2: '4.500'}, 
                    { id: 7, name: 'Republicano', description: '', price2: '3.500 '} ,
        ]} , 
        { 
            title: 'Vodka', 
            cl: '4', 
            cl2: '6', 
            description: 'Cosmopolitan, Martini, Ruso Negro, Le Grand Fizz, ...', 
            products: 
            [
                { id: 1, name: 'Belvedere', description: 'Polonia', price: '3.000', price2: '5.000'} , 
                { id: 2, name: 'Zubrowka', description: 'Polonia', price: '2.500', price2: '4.000'} , 
                { id: 3, name: 'Beluga', description: 'Rusia', price: '3.500', price2: '5.500'} , 
                { id: 4, name: 'Prairie Organic', description: 'USA', price: '3.000', price2: '5.000'} , 
                { id: 5, name: 'Grey Goose', description: /* 'Tradicional,  */'Naranja, Limón, Pera - Francia', price: '3.000', price2: '5.000'} 
        ]} , 
        { 
            title: 'Tequila', 
            description: 'Margarita, ...', 
            cl: '4', 
            cl2: '6', 
            products: 
            [
                { id: 1, name: 'Sauza', description: 'Silver', price: '2.500', price2: '3.500'} , 
                { id: 2, name: '1800 Añejo', description: '', price: '4.500', price2: '5.500'} 
            ]} , { 
            title: 'Gin', 
            description: 'Negron, Tom Collins, Martini Dry, Le Grand Fizz, ...', 
            cl2: '6', 
            products: [
                { id: 0, name: 'Green Baboon', description: 'Rusia', price2: '5.000'} ,
                { id: 1, name: 'Bicho Raro Citrix', description: 'Chile', price2: '5.000'} ,
                { id: 1, name: 'Bicho Raro Pepinot', description: 'Chile', price2: '5.000'} ,
                { id: 1, name: 'Lüykün', description: 'Chile', price2: '5.000'} , 
                { id: 2, name: 'Citadelle', description: 'Francia', price2: '5.000'} , 
                { id: 3, name: 'Barber’s', description: 'Inglaterra', price2: '4.500'} , 
                { id: 4, name: 'Fifty Pounds', description: 'Inglaterra', price2: '6.000'} , 
                { id: 5, name: 'The Botanist', description: 'Escocia', price2: '6.500'} , 
                { id: 6, name: 'Monkey 47', description: 'Alemanía', price2: '7.500'}, 
                { id: 7, name: 'Mare', description: 'Cataluña', price2: '6.000'}, 
                { id: 8, name: 'Star Of Bombay', description: 'Inglaterra', price2: '5.500'} , 
                { id: 9, name: 'Hendricks', description: 'Escocia', price2: '5.500'} , 
                { id: 10, name: 'Republica', description: 'Bolivia', price2: '4.500'} 
        ]} , { 
            title: 'Ron', 
            description: 'Daiquiri, Mojito, ...', 
            cl2: '6', 
            products: [
                { id: 0, name: 'Diplomático', description: '12 Años', price2: '5.000'} ,
                { id: 1, name: 'Santiago de Cuba', description: '12 Años', price2: '5.000'} , 
                { id: 2, name: 'Bacardí', description: '8 Años', price2: '4.000'} , 
                { id: 3, name: 'Mount Gay', description: 'Black Eclipse', price2: '4.000'} , 
                { id: 4, name: 'Bacardí', description: 'Carta Blanca', price2: '3.500'} 
        ]} , { 
            title: 'Cremas', 
            description: '', 
            cl2: '6', 
            products: [
                { id: 1, name: 'Amarula', description: 'Fruta de Marula', price2: '3.500'} ,
                { id: 2, name: 'Kahlúa', description: '', price2: '3.500'} 
    ]} , {  
            title: 'Licores', 
            description: '', 
            products: 
                [
                { id: 0, name: 'Saint Germain', description: '', price2: '5.500 '} ,
                { id: 1, name: 'Araucano', description: '', cl: '6', price2: '3.000'} , 
                { id: 2, name: 'Amaretto Luxardo', description: '', cl: '6', price2: '3.500'} , 
                { id: 3, name: 'Drambuie', description: '', cl: '6', price2: '4.000'} , 
                { id: 4, name: 'Cointreau', description: '', cl: '6', price2: '5.500'} , 
                { id: 5, name: 'Grand Marnier', description: '', cl: '4', price2: '4.500'} , 
                { id: 6, name: 'Benedictine', description: '', cl: '4', price2: '4.000'} , 
                { id: 7, name: 'Chartreuse', description: 'Green', cl: '4', price2: '4.000'} , 
                { id: 8, name: 'Marie Brizard', description: '', cl: '4', price2: '3.000'}, 
            ]
        } 

]

export default dataLicor