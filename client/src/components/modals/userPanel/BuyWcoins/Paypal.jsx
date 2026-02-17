import { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useCapturePaypalOrderMutation } from "../../../../services/userApi";

// const createOrderUrl = `${import.meta.env.VITE_API_URL}api/paypal-orders`;
const baseUrl = `${import.meta.env.VITE_API_URL}api/user`;

function Message({ content }) {
    return <span className={content.includes("Success") ? "paypal_message_success" : "paypal_message_error" } >{content}</span>;
}

const Paypal = ({wcId, wcAmount, accId}) => {
    const [message, setMessage] = useState("");
    const [captureOrder] = useCapturePaypalOrderMutation();
    const initialOptions = {
        "client-id": "AWvw2hUcbv5umE9dcyaGm9u3KIAT6NF2-5adcePSPMzdZ2XG24ySh6TwEsZU7ekemPMEQaPWuYIAgAbX",
        // "client-id": "AdvreHLt6JmLnmKgtk2Og8OAWDnTGn9F-rIvHoNYkQbfCIxiPOo2aPgd8lLJye4vo1SATMiIcQLJThir",
        // "enable-funding": "venmo",
        // "disable-funding": "paylater",
        // "buyer-country": "US",
        currency: "USD",
        "data-page-type": "product-details",
        components: "buttons", // Добавляем fastlane через запятую
        "disable-funding": "card,credit,paylater",
        intent: "capture",
        "data-sdk-integration-source": "developer-studio",
    };

    return (
        <div className="paypal_container">
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                className="paypal_buttons"
                   style={{
                        shape: "rect",
                        layout: "vertical",
                        color: "gold",
                        label: "paypal",
                    }}
                   createOrder={async () => {
                        try {
                            const response = await fetch(`${baseUrl}/paypal-orders`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },

                                body: JSON.stringify({
                                    cart: {
                                        id: wcId.toString()
                                    },
                                    accountID: accId
                                }),
                            });

                            const orderData = await response.json();

                            if (response.ok && orderData.id) {
                                return orderData.id;
                            } else {
                                // Безопасное извлечение ошибки
                                const errorDetail = orderData?.details ? orderData.details[0] : null;
                                const errorMessage = errorDetail 
                                    ? `${errorDetail.issue}: ${errorDetail.description}` 
                                    : orderData.error || "Server Error";
                                
                                throw new Error(errorMessage);
                            }

                        } catch (error) {
                            console.error(error);
                            setMessage(
                                `Could not initiate PayPal Checkout...${error}`
                            );
                        }
                    }}
                    onApprove={async (data, actions) => {
                        try {
                            // 1. Вызываем мутацию RTK Query
                            // .unwrap() позволяет работать с результатом как с обычным промисом
                            const orderData = await captureOrder(data.orderID).unwrap();
                            
                            console.log("RAW DATA:", orderData);

                            if (orderData.status === "COMPLETED") {
                                // RTK Query уже начал процесс ревалидации userInfo!
                                setMessage(`Success! You have bought ${wcAmount} Wcoins! Transaction ${orderData.id} completed.`);
                            } else {
                                throw new Error("Transaction status: " + orderData.status);
                            }
                        } catch (error) {
                            // RTK Query упаковывает ошибки сервера в error.data
                            const errorMessage = error.data?.error || error.message || "Server Error";
                            
                            if (error.data?.details?.[0]?.issue === "INSTRUMENT_DECLINED") {
                                return actions.restart();
                            }

                            console.error("Frontend Error Trace:", error);
                            setMessage(`Error: ${errorMessage}`);
                        }
                    }}
//                     onApprove={async (data, actions) => {
                        
//                         try {
//                             const response = await fetch(`${baseUrl}/paypal-orders/capture-order`, {
//                                 method: "POST",
//                                 headers: { "Content-Type": "application/json" },
//                                 body: JSON.stringify({ orderID: data.orderID }),
//                             });

//                             const orderData = await response.json();
// console.log("RAW DATA:", orderData)
//                             // Если бэкенд упал или прислал ошибку JSON
//                             if (!response.ok || orderData.error) {
//                                 throw new Error(orderData.error || "Server Error");
//                             }

//                             // ПРОВЕРКА СТАТУСА БЕЗ ИСПОЛЬЗОВАНИЯ ИНДЕКСОВ [0]
//                             if (orderData.status === "COMPLETED") {
//                                 // МЫ НЕ ИСПОЛЬЗУЕМ purchase_units[0] ЗДЕСЬ!
//                                 setMessage(`Success! You have bought ${wcAmount} Wcoins! Transaction ${orderData.id} completed.`);
//                                 console.log("Full Order Data:", orderData);
//                             } else {
//                                 // Если транзакция требует перезапуска (например, карта отклонена)
//                                 if (orderData.details && orderData.details[0]?.issue === "INSTRUMENT_DECLINED") {
//                                     return actions.restart();
//                                 }
//                                 throw new Error("Transaction status: " + orderData.status);
//                             }
//                         } catch (error) {
//                             console.error("Frontend Error Trace:", error);
//                             // Если ошибка всё еще 'reading 0', значит она происходит внутри этого блока catch 
//                             // или в коде выше. Мы выводим её сообщение:
//                             setMessage(`Error: ${error.message}`);
//                         }
//                     }}
                />
            </PayPalScriptProvider>
            <Message content={message} />
        </div>
    );
}

export default Paypal;
