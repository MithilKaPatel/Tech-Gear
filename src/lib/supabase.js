// supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tmxrieiidjwrvwktfyrn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRteHJpZWlpZGp3cnZ3a3RmeXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mzg2MDUsImV4cCI6MjA3NjIxNDYwNX0.17H0P1CjP7hxxRYrxsjh9RR6orxJdqmDjOaiRCbDhz0'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
