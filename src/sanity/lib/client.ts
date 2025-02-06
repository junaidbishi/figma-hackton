import { createClient } from '@sanity/client'; 

export const client = createClient({
  projectId: "bv4auy6e",
  dataset: "production",
  apiVersion: '2025-01-16',
  useCdn: true,
});
