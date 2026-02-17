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
