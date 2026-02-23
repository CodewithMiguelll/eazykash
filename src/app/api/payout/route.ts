import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { accountNumber, bankCode, amount, fullName } = await req.json();

  try {
    // 1. Create a Transfer Recipient
    const recipientRes = await fetch(
      "https://api.paystack.co/transferrecipient",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "nuban",
          name: fullName,
          account_number: accountNumber,
          bank_code: bankCode,
          currency: "NGN",
        }),
      },
    );

    const recipientData = await recipientRes.json();
    const recipientCode = recipientData.data.recipient_code;

    // 2. Initiate the Transfer
    const transferRes = await fetch("https://api.paystack.co/transfer", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: "balance", // Takes from my Paystack wallet
        amount: Math.round(amount * 100), // In Kobo
        recipient: recipientCode,
        reason: "EazyKash Remittance",
      }),
    });

    const transferData = await transferRes.json();
    return NextResponse.json(transferData);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
