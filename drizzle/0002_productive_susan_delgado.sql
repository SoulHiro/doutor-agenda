ALTER TABLE "appointments" RENAME COLUMN "update_at" TO "updated_at";--> statement-breakpoint
ALTER TABLE "clinics" RENAME COLUMN "update_at" TO "updated_at";--> statement-breakpoint
ALTER TABLE "doctors" RENAME COLUMN "avaiable_from_weekday" TO "available_from_week_day";--> statement-breakpoint
ALTER TABLE "doctors" RENAME COLUMN "avaiable_to_weekday" TO "available_to_week_day";--> statement-breakpoint
ALTER TABLE "doctors" RENAME COLUMN "avaiable_from_time" TO "available_from_time";--> statement-breakpoint
ALTER TABLE "doctors" RENAME COLUMN "avaiable_to_time" TO "available_to_time";--> statement-breakpoint
ALTER TABLE "doctors" RENAME COLUMN "update_at" TO "updated_at";--> statement-breakpoint
ALTER TABLE "patients" RENAME COLUMN "update_at" TO "updated_at";--> statement-breakpoint
ALTER TABLE "users_to_clinics" RENAME COLUMN "update_at" TO "updated_at";