import React from "react";
import {
  FUNDING,
  PayPalButtons,
  PayPalScriptProvider,
} from "@paypal/react-paypal-js";
import { OnApproveData, OnApproveActions, CreateOrderData, CreateOrderActions } from "@paypal/paypal-js";

interface PayPalButtonProps {
  amount: string;
  currency: string;
  onSuccess: (details: Record<string, unknown>) => void;
  onError: (err: Record<string, unknown>) => void;
}

export default function PayPalButton({ amount, currency, onSuccess, onError }: PayPalButtonProps) {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
        currency: currency,
      }}
    >
      <PayPalButtons
        fundingSource={FUNDING.PAYPAL}
        createOrder={(data: CreateOrderData, actions: CreateOrderActions) => {
          if (actions.order) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
              intent: "CAPTURE"
            });
          }
          return Promise.reject(new Error("Failed to create order"));
        }}
        onApprove={(data: OnApproveData, actions: OnApproveActions) => {
          if (actions.order) {
            return actions.order.capture().then((details) => {
              onSuccess(details);
            });
          }
          return Promise.reject(new Error("Failed to capture order"));
        }}
        onError={(err: Record<string, unknown>) => {
          console.error("PayPal error:", err);
          onError(err);
        }}
      />
    </PayPalScriptProvider>
  );
}