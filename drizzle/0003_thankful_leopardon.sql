ALTER TYPE "public"."patients_sex" RENAME TO "patient_sex";--> statement-breakpoint
ALTER TABLE "appointments" ADD COLUMN "appointment_price_in_cents" integer NOT NULL;