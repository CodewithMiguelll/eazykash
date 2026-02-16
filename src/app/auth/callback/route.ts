import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // 1. Get the code from the URL search params
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  // 2. If we have a code, exchange it for a session
  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // 3. Success! Redirect to the protected payments page
      return NextResponse.redirect(`${origin}/payments`);
    }
  }

  // 4. Something went wrong, send them back to login with an error
  return NextResponse.redirect(
    `${origin}/login?error=Could not authenticate user`,
  );
}
