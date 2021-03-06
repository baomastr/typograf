import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest([
    'common/punctuation/apostrophe', [
        [
            'Жанна д\'Арк, О\'Коннор, д\'Артаньян',
            'Жанна д’Арк, О’Коннор, д’Артаньян'
        ],
        [
            'c-moll\'ная увертюра, пользоваться E-mail\'ом',
            'c-moll’ная увертюра, пользоваться E-mail’ом'
        ],
        [
            'Кот-д\'Ивуар',
            'Кот-д’Ивуар'
        ],
        [
            'Л\'Алькерия-д\'Аснар',
            'Л’Алькерия-д’Аснар'
        ],
        [
            'Не говорите плохо о Yoko, хотя бы из-за уважения к Lennon\'у',
            'Не говорите плохо о Yoko, хотя бы из-за уважения к Lennon’у'
        ],
        [
            'О\'Коннор, О\'Хара, О\'Нил, О\'Хиггинс, О\'Куинн, О\'Кейси',
            'О’Коннор, О’Хара, О’Нил, О’Хиггинс, О’Куинн, О’Кейси'
        ],
        [
            'Кот-д\'Ор, Кот-д\'Армор, Л\'Умо, Пон-л\'Эвек, Л\'Иль-сюр-ла-Сорг,  Морро-д\'Оро, Морро-д\'Альба, Л\'Алькерия-д\'Аснар',
            'Кот-д’Ор, Кот-д’Армор, Л’Умо, Пон-л’Эвек, Л’Иль-сюр-ла-Сорг,  Морро-д’Оро, Морро-д’Альба, Л’Алькерия-д’Аснар'
        ]
    ],
    {locale: ['ru', 'en-US']}
]);

typografRuleTest([
    'common/punctuation/apostrophe', [
        [
            'Yesterday I saw Jack\'s dog',
            'Yesterday I saw Jack’s dog'
        ],
        [
            'tables\' legs',
            'tables\' legs'
        ],
        [
            'Katie\'s and Erin\'s houses are beautiful.',
            'Katie’s and Erin’s houses are beautiful.'
        ]
    ],
    {locale: 'en-US'}
]);
