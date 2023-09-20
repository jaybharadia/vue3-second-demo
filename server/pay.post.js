import { Client } from "square";
import { randomUUID } from "crypto";
// console.log("🚀 ~ file: square.js:3 ~ randomUUID:", randomUUID);

const { paymentsApi } = new Client({
    accessToken:
        "EAAAENAC-9d_JxrbJAd3MI2Rf4Tb70KDLsQ38KDbqKA-0cG_fLDPOBmwkTDkoUjH",
    environment: "sandbox",
});

export const processPayment = async (locationId, sourceId) => {
    try {
        const { result } = await paymentsApi.createPayment({
            locationId,
            sourceId,
            idempotencyKey: randomUUID(),
            amountMoney: {
                amount: 100,
                currency: "USD",
            },
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};
