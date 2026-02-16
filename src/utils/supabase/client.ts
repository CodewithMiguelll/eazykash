import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // This creates a client for use in "use client" components
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
