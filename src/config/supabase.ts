import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xlowxwyrvhrfykztgaja.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhsb3d4d3lydmhyZnlrenRnYWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1Mjc0MzEsImV4cCI6MjAxMjEwMzQzMX0.lVB0icDjdIGmXBryQEKwtKKNksK32pvfx6T0eokoetc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
