import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://snmcktsdeqxtgawpjqtb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubWNrdHNkZXF4dGdhd3BqcXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxNjIwNDMsImV4cCI6MjAyMzczODA0M30.wGVwrzyLhK1Gtxqcur2LQyHCMOXNc6LHcBGPXlrq3IM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
