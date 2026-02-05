// import { poolPromise } from '../db.js';
// import sql from "mssql";
// import {
//     ApiError,
//     CheckoutPaymentIntent,
//     Client,
//     Environment,
//     LogLevel,
//     OrdersController,
//     PaymentsController,
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
// const paymentsController = new PaymentsController(client);


// /**
//  * Create an order to start the transaction.
// **/
// export const testGetOrder = async (req, res, next) => {
//     const {cart} = req.body
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
//     console.log(productFromDb);
//     console.log(parseFloat(productFromDb.wcPrice).toFixed(2)); 
//     return res.json(productFromDb)
// }
// const createOrder = async (cart) => {
//     const pool = await poolPromise;
//     const request = pool.request();
//     const id = cart[0]
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
//     // if(productFromDb) {
//     //      paypalItem = cart.map(cartItem => {
//     //         const product = productFromDb.find(p => p.id === cartItem.id);
//     //         if (!product) throw new Error(`Товар с ID ${cartItem.id} не найден`);
            
//     //         const itemPrice = parseFloat(product.price).toFixed(2);
//     //         totalAmount += itemPrice * cartItem.quantity;
            
//     //         return {
//     //             name: product.name,
//     //             unitAmount: {
//     //                 currencyCode: "USD",
//     //                 value: itemPrice,
//     //             },
//     //             quantity: cartItem.quantity.toString(),
//     //         };
//     //     });

//     // }

//     // const totalStr = totalAmount.toFixed(2);

//      // 2. Формируем объект запроса согласно документации
//     const collect = {
//         body: {
//             intent: CheckoutPaymentIntent.Capture,
//             purchaseUnits: [
//                 {
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
//         const { body, ...httpResponse } = await ordersController.ordersCreate(collect);
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
// const captureOrder = async (orderID) => {
//     try {
//         const { body, ...httpResponse } = await ordersController.ordersCapture({
//             id: orderID,
//             prefer: "return=minimal",
//         });

//         const jsonResponse = JSON.parse(body);

//         // ВАЖНО: Если оплата прошла успешно, здесь делаем UPDATE в базе данных
//         if (jsonResponse.status === 'COMPLETED') {
//             // Например: await pool.request().query("UPDATE payments SET status = 'paid' WHERE...")
//             console.log("Оплата успешно завершена для заказа:", orderID);
//         }

//         return {
//             jsonResponse,
//             httpStatusCode: httpResponse.statusCode,
//         };
//     } catch (error) {
//         if (error instanceof ApiError) throw new Error(error.message);
//         throw error;
//     }
// };

