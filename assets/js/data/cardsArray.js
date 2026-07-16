
export const getDeckOfCards = () => {

const cards = [
        {   id: 1,
            value: 2,
            name: '2C',
            imagePath: '../assets/cartas/2C.png'
        },
        {   id: 2,
            value: 2,
            name: '2D',
            imagePath: '../assets/cartas/2D.png'
        },
        {   id: 3,
            value: 2,
            name: '2H',
            imagePath: '../assets/cartas/2H.png'
        },
        {   id: 4,
            value: 2,
            name: '2S',
            imagePath: '../assets/cartas/2S.png'
        },
        {   id: 5,
            value: 3,
            name: '3C',
            imagePath: '../assets/cartas/3C.png'
        },
        {   id: 6,
            value: 3,
            name: '3D',
            imagePath: '../assets/cartas/3D.png'
        },
        {   id: 7,
            value: 3,
            name: '3H',
            imagePath: '../assets/cartas/3H.png'
        },
        {   id: 8,
            value: 3,
            name: '3S',
            imagePath: '../assets/cartas/3S.png'
        },
        {   id: 9,
            value: 4,
            name: '4C',
            imagePath: '../assets/cartas/4C.png'
        },
        {   id: 10,   
            value: 4,
            name: '4D',
            imagePath: '../assets/cartas/4D.png'
        },
        {   id: 11,
            value: 4,
            name: '4H',
            imagePath: '../assets/cartas/4H.png'
        },
        {   id: 12,
            value: 4,
            name: '4S',
            imagePath: '../assets/cartas/4S.png'
        },
        {   id: 13,
            value: 5,
            name: '5C',
            imagePath: '../assets/cartas/5C.png'
        },
        {   id: 14,   
            value: 5,
            name: '5D',
            imagePath: '../assets/cartas/5D.png'
        },
        {   id: 15,
            value: 5,
            name: '5H',
            imagePath: '../assets/cartas/5H.png'
        },
        {   id: 16,
            value: 5,
            name: '5S',
            imagePath: '../assets/cartas/5S.png'
        },
        {   id: 17,
            value: 6,
            name: '6C',
            imagePath: '../assets/cartas/6C.png'
        },
        {   id: 18,   
            value: 6,
            name: '6D',
            imagePath: '../assets/cartas/6D.png'
        },
        {   id: 19,
            value: 6,
            name: '6H',
            imagePath: '../assets/cartas/6H.png'
        },
        {   id: 20,
            value: 6,
            name: '6S',
            imagePath: '../assets/cartas/6S.png'
        },
        {   id: 21,
            value: 7,
            name: '7C',
            imagePath: '../assets/cartas/7C.png'
        },
        {   id: 22,   
            value: 7,
            name: '7D',
            imagePath: '../assets/cartas/7D.png'
        },
        {   id: 23,
            value: 7,
            name: '7H',
            imagePath: '../assets/cartas/7H.png'
        },
        {   id: 24,
            value: 7,
            name: '7S',
            imagePath: '../assets/cartas/7S.png'
        },
        {   id: 25,
            value: 8,
            name: '8C',
            imagePath: '../assets/cartas/8C.png'
        },
        {   id: 26,   
            value: 8,
            name: '8D',
            imagePath: '../assets/cartas/8D.png'
        },
        {   id: 27,
            value: 8,
            name: '8H',
            imagePath: '../assets/cartas/8H.png'
        },
        {   id: 28,
            value: 8,
            name: '8S',
            imagePath: '../assets/cartas/8S.png'
        },
        {   id: 29,
            value: 9,
            name: '9C',
            imagePath: '../assets/cartas/9C.png'
        },
        {   id: 30,   
            value: 9,
            name: '9D',
            imagePath: '../assets/cartas/9D.png'
        },
        {   id: 31,
            value: 9,
            name: '9H',
            imagePath: '../assets/cartas/9H.png'
        },
        {   id: 32,
            value: 9,
            name: '9S',
            imagePath: '../assets/cartas/9S.png'
        },
        {   id: 33,
            value: 10,
            name: '10C',
            imagePath: '../assets/cartas/10C.png'
        },
        {   id: 34,   
            value: 10,
            name: '10D',
            imagePath: '../assets/cartas/10D.png'
        },
        {   id: 35,
            value: 10,
            name: '10H',
            imagePath: '../assets/cartas/10H.png'
        },
        {   id: 36,
            value: 10,
            name: '10S',
            imagePath: '../assets/cartas/10S.png'
        },
        {   id: 37,
            value: 11, // (()=> )()
            name: 'AC',
            imagePath: '../assets/cartas/AC.png'
        },
        {   id: 38,   
            value: 11,
            name: 'AD',
            imagePath: '../assets/cartas/AD.png'
        },
        {   id: 39,
            value: 11,
            name: 'AH',
            imagePath: '../assets/cartas/AH.png'
        },
        {   id: 40,
            value: 11,
            name: 'AS',
            imagePath: '../assets/cartas/AS.png'
        },
        {   id: 41,
            value: 10,
            name: 'JC',
            imagePath: '../assets/cartas/JC.png'
        },
        {   id: 42,   
            value: 10,
            name: 'JD',
            imagePath: '../assets/cartas/JD.png'
        },
        {   id: 43,
            value: 10,
            name: 'JH',
            imagePath: '../assets/cartas/JH.png'
        },
        {   id: 44,
            value: 10,
            name: 'JS',
            imagePath: '../assets/cartas/JS.png'
        },
        {   id: 45,
            value: 10,
            name: 'KC',
            imagePath: '../assets/cartas/KC.png'
        },
        {   id: 46,   
            value: 10,
            name: 'KD',
            imagePath: '../assets/cartas/KD.png'
        },
        {   id: 47,
            value: 10,
            name: 'KH',
            imagePath: '../assets/cartas/KH.png'
        },
        {   id: 48,
            value: 10,
            name: 'KS',
            imagePath: '../assets/cartas/KS.png'
        },
        {   id: 49,
            value: 10,
            name: 'QC',
            imagePath: '../assets/cartas/QC.png'
        },
        {   id: 50,   
            value: 10,
            name: 'QD',
            imagePath: '../assets/cartas/QD.png'
        },
        {   id: 51,
            value: 10,
            name: 'QH',
            imagePath: '../assets/cartas/QH.png'
        },
        {   id: 52,
            value: 10,
            name: 'QS',
            imagePath: '../assets/cartas/QS.png'
        },
    ]
    return cards; 
}
