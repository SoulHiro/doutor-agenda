ALTER TYPE "public"."patient_sex" RENAME TO "patients_sex";--> statement-breakpoint
ALTER TABLE "appointments" RENAME COLUMN "updated_at" TO "update_at";--> statement-breakpoint
ALTER TABLE "clinics" RENAME COLUMN "updated_at" TO "update_at";--> statement-breakpoint
ALTER TABLE "doctors" RENAME COLUMN "available_from_week_day" TO "avaiable_from_weekday";--> statement-breakpoint
ALTER TABLE "doctors" RENAME COLUMN "available_to_week_day" TO "avaiable_to_weekday";--> statement-breakpoint
ALTER TABLE "doctors" RENAME COLUMN "available_from_time" TO "avaiable_from_time";--> statement-breakpoint
ALTER TABLE "doctors" RENAME COLUMN "available_to_time" TO "avaiable_to_time";--> statement-breakpoint
ALTER TABLE "doctors" RENAME COLUMN "specialty" TO "speciality";--> statement-breakpoint
ALTER TABLE "doctors" RENAME COLUMN "updated_at" TO "update_at";--> statement-breakpoint
ALTER TABLE "patients" RENAME COLUMN "updated_at" TO "update_at";--> statement-breakpoint
ALTER TABLE "users_to_clinics" RENAME COLUMN "updated_at" TO "update_at";