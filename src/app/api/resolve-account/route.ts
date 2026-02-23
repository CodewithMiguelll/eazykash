import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const accountNumber = searchParams.get("accountNumber");
  const bankCode = searchParams.get("bankCode");

  if (!accountNumber || !bankCode) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      },
    );

    const data = await response.json();
    console.log("Paystack Error Detail:", data);

    if (!response.ok) {
      return NextResponse.json({ error: data.message }, { status: 400 });
    }

    return NextResponse.json(data.data); // Returns { account_number, account_name, bank_id }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
