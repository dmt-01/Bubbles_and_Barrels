import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email().max(50),
  last_name: z.string().min(3, "Nom requis").max(50),
  first_name: z.string().min(3, "Prénom requis").max(50),
  phone: z.string().min(8, "Numéro de téléphone invalide").max(20),
  password: z.string().min(6, "Mot de passe trop court"),
  address: z.object({
    street: z.string().min(1).max(100),
    complement: z.string().optional().nullable(),
    zipcode: z.string().min(4).max(10),
    city: z.string().min(1).max(50),
    country: z.string().min(1).max(50),
  }),
});