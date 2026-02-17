// import { poolPromise } from '../db.js';
// import sql from "mssql";
// import {
//     ApiError,
//     CheckoutPaymentIntent,
//     Client,
//     Environment,
//     LogLevel,
//     OrdersController,
// }from "@paypal/paypal-server-sdk";

// const {
//     PAYPAL_CLIENT_ID,
//     PAYPAL_CLIENT_SECRET,
//     NODE_ENV,
// } = process.env;

// const client = new Client({
//     clientCredentialsAuthCredentials: {
//         oAuthClientId: PAYPAL_CLIENT_ID,
//         oAuthClientSecret: PAYPAL_CLIENT_SECRET,
//     },
//     timeout: 0,
//     environment: NODE_ENV === "production" 
//         ? Environment.Production 
//         : Environment.Sandbox,
//     logging: {
//         logLevel: LogLevel.Info,
//         logRequest: { logBody: true },
//         logResponse: { logHeaders: true },
//     },
// });

// const ordersController = new OrdersController(client);

// export const testGetOrder = async (req, res) => {
//     const {cart, accountID} = req.body
//     console.log(cart);
//     const id = cart.id
//     const pool = await poolPromise;
//     const request = pool.request();
//     const result = await request
//     .input('id', sql.VarChar(20), id)
//     .query("SELECT id, wcAmount, wcPrice, wcName FROM dbo.donate_wc_itemlist WHERE id = @id");
//     const productFromDb = result.recordset[0];
//     if (!productFromDb) {
//         return res.status(404).json({ error: "Товар не найден" });
//     }
//     const customData = `${accountID}|${productFromDb.wcAmount}`
//     console.log(productFromDb);
//     console.log(customData);
//     console.log(parseFloat(productFromDb.wcPrice).toFixed(2)); 
//     return res.json(productFromDb)
// }

// export const handlePayment = async (req, res) => {
//     try {
//         const { cart, accountID } = req.body; // Получаем ID пользователя с фронта
//         const { jsonResponse, httpStatusCode } = await createOrder(cart, accountID);
//         res.status(httpStatusCode).json(jsonResponse);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
// const createOrder = async (cart, accountID) => {
//     const pool = await poolPromise;
//     const request = pool.request();
//     const id = cart.id
//     const result = await request
//     .input('id', sql.VarChar(20), id)
//     .query("SELECT id, wcAmount, wcPrice, wcName FROM dbo.donate_wc_itemlist WHERE id = @id");
//     const productFromDb = result.recordset[0];
//     let totalAmount = 0;
//     let paypalItem;
//     let itemPrice;
//     if (!productFromDb) {
//         return res.json({message: `Товар с ID ${cart.id} не найден`})
//     } else {
//         itemPrice = parseFloat(productFromDb.wcPrice).toFixed(2);
//         paypalItem = {
//             name: productFromDb.wcName,
//             unitAmount: {
//                 currencyCode: "USD",
//                 value: itemPrice,
//             },
//             quantity: "1"
//         }
//     }
//     const customData = `${accountID}|${productFromDb.wcAmount}`

//      // 2. Формируем объект запроса согласно документации
//     const collect = {
//         body: {
//             intent: CheckoutPaymentIntent.Capture,
//             purchaseUnits: [
//                 {
//                     customId: String(customData), // // Передаем строку к примеру: "myAccount123|300"
//                     amount: {
//                         currencyCode: "USD",
//                         value: itemPrice, // Итоговая сумма
//                         breakdown: {
//                             itemTotal: {
//                                 currencyCode: "USD",
//                                 value: itemPrice,
//                             },
//                         },
//                     },
//                     items: [
//                         {
//                             name: productFromDb.wcName,
//                             unitAmount: {
//                                 currencyCode: "USD",
//                                 value: itemPrice,
//                             },
//                             quantity: "1",
//                         },
//                     ],
//                 },
//             ],
//             paymentSource: {
//                 paypal: {
//                     experienceContext: {
//                         shippingPreference: 'NO_SHIPPING',
//                         userAction: 'PAY_NOW'
//                     }
//                 }
//             }
//         },
//         prefer: "return=minimal",
//     };

//     try {
//         const { body, ...httpResponse } = await ordersController.createOrder(collect);
//         const responseData = JSON.parse(body);
//         console.log("ЗАКАЗ СОЗДАН В PAYPAL:", JSON.stringify(responseData, null, 2));
//         return {
//             jsonResponse: JSON.parse(body),
//             httpStatusCode: httpResponse.statusCode,
//         };
//     } catch (error) {
//         if (error instanceof ApiError) throw new Error(error.message);
//         throw error;
//     }
// };
// /**
//  * Логика подтверждения (Capture)
// **/
// export const handleCaptureOrder = async (req, res) => {
//     try {
//         const { orderID } = req.body; // Получаем ID заказа от фронтенда
//         const result = await captureOrder(orderID);
//         res.status(result.httpStatusCode).json(result.jsonResponse);
//     } catch (error) {
//         console.error("Ошибка при захвате ордера:", error);
//         res.status(500).json({ error: error.message });
//     }
// };
// const captureOrder = async (orderID) => {
//     try {
//         // 1. Получаем детали ордера
//         const { body: orderBody } = await ordersController.getOrder({ id: orderID });
//         const orderDetails = JSON.parse(orderBody);

//         // 2. Ищем custom_id (PayPal возвращает его именно так в JSON)
//         // Проверяем первый элемент массива purchase_units
//         const customData = orderDetails.purchase_units?.[0]?.custom_id;

//         if (!customData) {
//             console.error("DEBUG: custom_id не найден в:", JSON.stringify(orderDetails.purchase_units, null, 2));
//             throw new Error("Данные игрока не найдены в деталях ордера PayPal");
//         }

//         // 3. Выполняем захват (Capture)
//         const { body: captureBody, ...httpResponse } = await ordersController.captureOrder({
//             id: orderID,
//             prefer: "return=minimal",
//         });

//         const jsonResponse = JSON.parse(captureBody);

//         // 4. Если успех — начисляем
//         if (jsonResponse.status === 'COMPLETED') {
//             const [accountID, coinsAmount] = customData.split('|');

//             const pool = await poolPromise;
//             const request = pool.request();
//             await request
//                 .input('AccountID', sql.VarChar(10), accountID)
//                 .input('Type', sql.Int(), 0)
//                 .input('Coin', sql.Float(), parseFloat(coinsAmount))
//                 .execute('dbo.WZ_IBS_AddCoin');

//             console.log(`[SUCCESS] Начислено ${coinsAmount} для ${accountID}`);
//         }

//         return {
//             jsonResponse,
//             httpStatusCode: httpResponse.statusCode,
//         };
//     } catch (error) {
//         console.error("BACKEND CAPTURE ERROR:", error.message);
//         return {
//             jsonResponse: { error: error.message },
//             httpStatusCode: 500
//         };
//     }
// };

// // Эти библиотеки поддерживают require, оставляем их так
// const { poolPromise } = require('../db.js');
// const sql = require("mssql");

// // Создаем переменную для контроллера
// let ordersController;
// let paypalSdk;

// // Функция для ленивой инициализации SDK
// async function getPaypalController() {
//     if (ordersController) return ordersController;

//     // Динамический импорт ESM-пакета внутри CommonJS
//     paypalSdk = await import("@paypal/paypal-server-sdk");
    
//     const client = new paypalSdk.Client({
//         clientCredentialsAuthCredentials: {
//             oAuthClientId: process.env.PAYPAL_CLIENT_ID,
//             oAuthClientSecret: process.env.PAYPAL_CLIENT_SECRET,
//         },
//         timeout: 0,
//         environment: process.env.NODE_ENV === "production" 
//             ? paypalSdk.Environment.Production 
//             : paypalSdk.Environment.Sandbox,
//     });

//     ordersController = new paypalSdk.OrdersController(client);
//     return ordersController;
// }

// // Пример использования в функции оплаты:
// const handlePayment = async (req, res) => {
//     try {
//         const controller = await getPaypalController(); // Ждем загрузки SDK
//         const { cart, accountID } = req.body;
        
//         // ... далее ваш код создания заказа, используя paypalSdk.CheckoutPaymentIntent и т.д.
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = { handlePayment, /* остальные функции */ };
// Используйте код с осторожностью.

// Вариант 2. Откатиться на старую версию SDK (Самый простой)
// Если динамический импорт кажется сложным, можно установить предыдущую версию SDK, которая официально поддерживает require.
// В PuTTY удалите новую версию:
// bash
// npm uninstall @paypal/paypal-server-sdk
// Используйте код с осторожностью.

// Установите версию 1.0.1 (или @paypal/checkout-server-sdk, если вам нужны только заказы):
// bash
// npm install @paypal/paypal-server-sdk@1.0.1
// Используйте код с осторожностью.

// Теперь вы сможете писать обычный require в начале файла:
// javascript
// const paypal = require("@paypal/paypal-server-sdk");
// Используйте код с осторожностью.

// Почему "локально работает"?
// Локально ваш Node.js при встрече import в проекте с require может автоматически пытаться скомпилировать его "на лету" (если стоит ts-node, nodemon с плагинами или свежайшая Node 22+). На сервере Node.js более строгий.
// Что делать сейчас:
// Убедитесь, что в package.json НЕТ строки "type": "module".
// Используйте Вариант 1 (динамический await import(...)), если хотите оставить версию 2.2.0.
// Либо Вариант 2, если хотите, чтобы код выглядел единообразно через require.
// Попробуйте Вариант 2 (откат версии) — это самый быстрый способ запустить сервер за 1 минуту без правок логики.
// В ответах искусственного интеллекта могут быть ошибки. Подробнее



// что мне тут изменить: import { poolPromise } from '../db.js';
// import sql from "mssql";
// import {
//     ApiError,
//     CheckoutPaymentIntent,
//     Client,
//     Environment,
//     LogLevel,
//     OrdersController,
// }from "@paypal/paypal-server-sdk";

// const {
//     PAYPAL_CLIENT_ID,
//     PAYPAL_CLIENT_SECRET,
//     NODE_ENV,
// } = process.env;

// const client = new Client({
//     clientCredentialsAuthCredentials: {
//         oAuthClientId: PAYPAL_CLIENT_ID,
//         oAuthClientSecret: PAYPAL_CLIENT_SECRET,
//     },
//     timeout: 0,
//     environment: NODE_ENV === "production" 
//         ? Environment.Production 
//         : Environment.Sandbox,
//     logging: {
//         logLevel: LogLevel.Info,
//         logRequest: { logBody: true },
//         logResponse: { logHeaders: true },
//     },
// });

// const ordersController = new OrdersController(client);

// export const testGetOrder = async (req, res) => {
//     const {cart, accountID} = req.body
//     console.log(cart);
//     const id = cart.id
//     const pool = await poolPromise;
//     const request = pool.request();
//     const result = await request
//     .input('id', sql.VarChar(20), id)
//     .query("SELECT id, wcAmount, wcPrice, wcName FROM dbo.donate_wc_itemlist WHERE id = @id");
//     const productFromDb = result.recordset[0];
//     if (!productFromDb) {
//         return res.status(404).json({ error: "Товар не найден" });
//     }
//     const customData = `${accountID}|${productFromDb.wcAmount}`
//     console.log(productFromDb);
//     console.log(customData);
//     console.log(parseFloat(productFromDb.wcPrice).toFixed(2)); 
//     return res.json(productFromDb)
// }

// export const handlePayment = async (req, res) => {
//     try {
//         const { cart, accountID } = req.body; // Получаем ID пользователя с фронта
//         const { jsonResponse, httpStatusCode } = await createOrder(cart, accountID);
//         res.status(httpStatusCode).json(jsonResponse);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
// const createOrder = async (cart, accountID) => {
//     const pool = await poolPromise;
//     const request = pool.request();
//     const id = cart.id
//     const result = await request
//     .input('id', sql.VarChar(20), id)
//     .query("SELECT id, wcAmount, wcPrice, wcName FROM dbo.donate_wc_itemlist WHERE id = @id");
//     const productFromDb = result.recordset[0];
//     let totalAmount = 0;
//     let paypalItem;
//     let itemPrice;
//     if (!productFromDb) {
//         return res.json({message: `Товар с ID ${cart.id} не найден`})
//     } else {
//         itemPrice = parseFloat(productFromDb.wcPrice).toFixed(2);
//         paypalItem = {
//             name: productFromDb.wcName,
//             unitAmount: {
//                 currencyCode: "USD",
//                 value: itemPrice,
//             },
//             quantity: "1"
//         }
//     }
//     const customData = `${accountID}|${productFromDb.wcAmount}`

//      // 2. Формируем объект запроса согласно документации
//     const collect = {
//         body: {
//             intent: CheckoutPaymentIntent.Capture,
//             purchaseUnits: [
//                 {
//                     customId: String(customData), // // Передаем строку к примеру: "myAccount123|300"
//                     amount: {
//                         currencyCode: "USD",
//                         value: itemPrice, // Итоговая сумма
//                         breakdown: {
//                             itemTotal: {
//                                 currencyCode: "USD",
//                                 value: itemPrice,
//                             },
//                         },
//                     },
//                     items: [
//                         {
//                             name: productFromDb.wcName,
//                             unitAmount: {
//                                 currencyCode: "USD",
//                                 value: itemPrice,
//                             },
//                             quantity: "1",
//                         },
//                     ],
//                 },
//             ],
//             paymentSource: {
//                 paypal: {
//                     experienceContext: {
//                         shippingPreference: 'NO_SHIPPING',
//                         userAction: 'PAY_NOW'
//                     }
//                 }
//             }
//         },
//         prefer: "return=minimal",
//     };

//     try {
//         const { body, ...httpResponse } = await ordersController.createOrder(collect);
//         const responseData = JSON.parse(body);
//         console.log("ЗАКАЗ СОЗДАН В PAYPAL:", JSON.stringify(responseData, null, 2));
//         return {
//             jsonResponse: JSON.parse(body),
//             httpStatusCode: httpResponse.statusCode,
//         };
//     } catch (error) {
//         if (error instanceof ApiError) throw new Error(error.message);
//         throw error;
//     }
// };
// /**
//  * Логика подтверждения (Capture)
// **/
// export const handleCaptureOrder = async (req, res) => {
//     try {
//         const { orderID } = req.body; // Получаем ID заказа от фронтенда
//         const result = await captureOrder(orderID);
//         res.status(result.httpStatusCode).json(result.jsonResponse);
//     } catch (error) {
//         console.error("Ошибка при захвате ордера:", error);
//         res.status(500).json({ error: error.message });
//     }
// };
// const captureOrder = async (orderID) => {
//     try {
//         // 1. Получаем детали ордера
//         const { body: orderBody } = await ordersController.getOrder({ id: orderID });
//         const orderDetails = JSON.parse(orderBody);

//         // 2. Ищем custom_id (PayPal возвращает его именно так в JSON)
//         // Проверяем первый элемент массива purchase_units
//         const customData = orderDetails.purchase_units?.[0]?.custom_id;

//         if (!customData) {
//             console.error("DEBUG: custom_id не найден в:", JSON.stringify(orderDetails.purchase_units, null, 2));
//             throw new Error("Данные игрока не найдены в деталях ордера PayPal");
//         }

//         // 3. Выполняем захват (Capture)
//         const { body: captureBody, ...httpResponse } = await ordersController.captureOrder({
//             id: orderID,
//             prefer: "return=minimal",
//         });

//         const jsonResponse = JSON.parse(captureBody);

//         // 4. Если успех — начисляем
//         if (jsonResponse.status === 'COMPLETED') {
//             const [accountID, coinsAmount] = customData.split('|');

//             const pool = await poolPromise;
//             const request = pool.request();
//             await request
//                 .input('AccountID', sql.VarChar(10), accountID)
//                 .input('Type', sql.Int(), 0)
//                 .input('Coin', sql.Float(), parseFloat(coinsAmount))
//                 .execute('dbo.WZ_IBS_AddCoin');

//             console.log(`[SUCCESS] Начислено ${coinsAmount} для ${accountID}`);
//         }

//         return {
//             jsonResponse,
//             httpStatusCode: httpResponse.statusCode,
//         };
//     } catch (error) {
//         console.error("BACKEND CAPTURE ERROR:", error.message);
//         return {
//             jsonResponse: { error: error.message },
//             httpStatusCode: 500
//         };
//     }
// };
//////  2nd way with require with CommonJS require to prevent backend crash on my hosting:
const { poolPromise } = require('../db.js');
const sql = require("mssql");
const {
    ApiError,
    CheckoutPaymentIntent,
    Client,
    Environment,
    LogLevel,
    OrdersController,
} = require("@paypal/paypal-server-sdk");

const {
    PAYPAL_CLIENT_ID,
    PAYPAL_CLIENT_SECRET,
    NODE_ENV,
} = process.env;

const client = new Client({
    clientCredentialsAuthCredentials: {
        oAuthClientId: PAYPAL_CLIENT_ID,
        oAuthClientSecret: PAYPAL_CLIENT_SECRET,
    },
    timeout: 0,
    environment: NODE_ENV === "production" 
        ? Environment.Production 
        : Environment.Sandbox,
    logging: {
        logLevel: LogLevel.Info,
        logRequest: { logBody: true },
        logResponse: { logHeaders: true },
    },
});

const ordersController = new OrdersController(client);

const testGetOrder = async (req, res) => {
    const {cart, accountID} = req.body;
    const id = cart.id;
    const pool = await poolPromise;
    const request = pool.request();
    const result = await request
    .input('id', sql.VarChar(20), id)
    .query("SELECT id, wcAmount, wcPrice, wcName FROM dbo.donate_wc_itemlist WHERE id = @id");
    const productFromDb = result.recordset[0];
    if (!productFromDb) {
        return res.status(404).json({ error: "Товар не найден" });
    }
    return res.json(productFromDb);
}

const handlePayment = async (req, res) => {
    try {
        const { cart, accountID } = req.body;
        const { jsonResponse, httpStatusCode } = await createOrder(cart, accountID);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createOrder = async (cart, accountID) => {
    const pool = await poolPromise;
    const request = pool.request();
    const id = cart.id;
    const result = await request
    .input('id', sql.VarChar(20), id)
    .query("SELECT id, wcAmount, wcPrice, wcName FROM dbo.donate_wc_itemlist WHERE id = @id");
    
    const productFromDb = result.recordset[0];
    if (!productFromDb) {
        throw new Error(`Товар с ID ${cart.id} не найден`);
    }

    const itemPrice = parseFloat(productFromDb.wcPrice).toFixed(2);
    const customData = `${accountID}|${productFromDb.wcAmount}`;

    const collect = {
        body: {
            intent: CheckoutPaymentIntent.Capture,
            purchaseUnits: [
                {
                    customId: String(customData),
                    amount: {
                        currencyCode: "USD",
                        value: itemPrice,
                        breakdown: {
                            itemTotal: {
                                currencyCode: "USD",
                                value: itemPrice,
                            },
                        },
                    },
                    items: [
                        {
                            name: productFromDb.wcName,
                            unitAmount: {
                                currencyCode: "USD",
                                value: itemPrice,
                            },
                            quantity: "1",
                        },
                    ],
                },
            ],
            paymentSource: {
                paypal: {
                    experienceContext: {
                        shippingPreference: 'NO_SHIPPING',
                        userAction: 'PAY_NOW'
                    }
                }
            }
        },
        prefer: "return=minimal",
    };

    const { body, ...httpResponse } = await ordersController.createOrder(collect);
    return {
        jsonResponse: JSON.parse(body),
        httpStatusCode: httpResponse.statusCode,
    };
};

const handleCaptureOrder = async (req, res) => {
    try {
        const { orderID } = req.body;
        const result = await captureOrder(orderID);
        res.status(result.httpStatusCode).json(result.jsonResponse);
    } catch (error) {
        console.error("Ошибка при захвате ордера:", error);
        res.status(500).json({ error: error.message });
    }
};

const captureOrder = async (orderID) => {
    const { body: orderBody } = await ordersController.getOrder({ id: orderID });
    const orderDetails = JSON.parse(orderBody);
    const customData = orderDetails.purchase_units?.[0]?.custom_id;

    if (!customData) {
        throw new Error("Данные игрока не найдены в деталях ордера PayPal");
    }

    const { body: captureBody, ...httpResponse } = await ordersController.captureOrder({
        id: orderID,
        prefer: "return=minimal",
    });

    const jsonResponse = JSON.parse(captureBody);

    if (jsonResponse.status === 'COMPLETED') {
        const [accountID, coinsAmount] = customData.split('|');
        const pool = await poolPromise;
        const request = pool.request();
        await request
            .input('AccountID', sql.VarChar(10), accountID)
            .input('Type', sql.Int(), 0)
            .input('Coin', sql.Float(), parseFloat(coinsAmount))
            .execute('dbo.WZ_IBS_AddCoin');
    }

    return {
        jsonResponse,
        httpStatusCode: httpResponse.statusCode,
    };
};

// ЭКСПОРТ ДЛЯ COMMONJS (ВМЕСТО export const)
module.exports = {
    testGetOrder,
    handlePayment,
    handleCaptureOrder
};