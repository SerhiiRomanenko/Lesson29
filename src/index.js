'use strict';

const menu = {
    burger: [
        {
            name: '🍔',
            time: 3500,
        },
        {
            name: '🍟',
            time: 1500,
        },
        {
            name: '🍵',
            time: 500,
        },
    ],
    pizza: [
        {
            name: '🍕',
            time: 2000,
        },
        {
            name: '🍵',
            time: 500,
        },
    ],
    buritto: [
        {
            name: '🍞',
            time: 4200,
        },
        {
            name: '🍟',
            time: 1500,
        },
        {
            name: '🍵',
            time: 500,
        },
    ],
};

function order(food, callback) {
    const result = [];
    console.log(`Ваш заказ получен. Начинаем готовить…`);
    for (const item in food) {
        setTimeout(() => {
            console.log(`${food[item].name} приготовлен(о)`);
            result.unshift({ value: food[item].name });
            if (result.length === food.length) {
                callback(result);
            }
        }, food[item].time);
    }
}

const cb = data => {
    console.log('Готово! Заберите ваш заказ', data);
};

order(menu.pizza, cb);
