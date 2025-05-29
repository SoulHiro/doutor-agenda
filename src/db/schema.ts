import { relations } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTable,
  text,
  time,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

// Users

export const usersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
}); // Um usuário tem um id

export const usersTableRelations = relations(usersTable, ({ many }) => ({
  usersToClinics: many(usersToClinicsTable),
})); // Um usuário pode ter várias clinicas

// Clinics

export const clinicsTable = pgTable("clinics", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updateAt: timestamp("update_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
}); // Uma clinica tem id, nome, data de criação e data de atualização

export const clinicsTableRelations = relations(clinicsTable, ({ many }) => ({
  doctors: many(doctorsTable),
  patients: many(patientsTable),
  appointments: many(appointmentsTable),
  usersToClinics: many(usersToClinicsTable),
})); // Uma clinica pode ter vários médicos, pacientes, agendamentos e usuários

// Users To Clinics

export const usersToClinicsTable = pgTable("users_to_clinics", {
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  clinicId: uuid("clinic_id")
    .notNull()
    .references(() => clinicsTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updateAt: timestamp("update_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
}); // Um usuário pode ter várias clinicas

// Users To Clinics Relations

export const usersToClinicsTableRelations = relations(
  usersToClinicsTable,
  ({ one }) => ({
    user: one(usersTable, {
      fields: [usersToClinicsTable.userId], // O userId do usuário
      references: [usersTable.id], // Referencia o id do usuário
    }),
    clinic: one(clinicsTable, {
      fields: [usersToClinicsTable.clinicId], // O clinicId da Clinica
      references: [clinicsTable.id], // Referencia o id da Clinica
    }),
  }),
); // Um usuário pode ter várias clinicas

// Doctors

export const doctorsTable = pgTable("doctors", {
  id: uuid("id").defaultRandom().primaryKey(),
  clinicId: uuid("clinic_id")
    .notNull()
    .references(() => clinicsTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  avatarImageUrl: text("avatar_image_url"),
  // 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday, 0 - Sunday
  avaiableFromWeekday: text("avaiable_from_weekday").notNull(), // 1
  avaiableToWeekday: text("avaiable_to_weekday").notNull(), // 5
  avaiableFromTime: time("avaiable_from_time").notNull(),
  avaiableToTime: time("avaiable_to_time").notNull(),
  speciality: text("speciality").notNull(),
  appointmentPriceInCents: integer("appointment_price_in_cents").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updateAt: timestamp("update_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
}); // Um médico tem id, nome, url da imagem, dia e horário de atendimento, especialidade e preço do agendamento.

export const doctorsTableRelations = relations(
  doctorsTable,
  ({ many, one }) => ({
    clinic: one(clinicsTable, {
      fields: [doctorsTable.clinicId], // O clinicId do medico
      references: [clinicsTable.id], // Referencia o id da clinica
    }),
    appointments: many(appointmentsTable),
  }),
); // Um médico pertence a uma clinica e tem vários agendamentos

// Patients

export const patientsSexEnum = pgEnum("patients_sex", ["male", "female"]);

export const patientsTable = pgTable("patients", {
  id: uuid("id").defaultRandom().primaryKey(),
  clinicId: uuid("clinic_id")
    .notNull()
    .references(() => clinicsTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phoneNumber: text("phone_number").notNull(),
  sex: patientsSexEnum("sex").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updateAt: timestamp("update_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
}); // Um paciente tem id, nome, email, telefone, sexo, data de criação e data de atualização.

export const patientsTableRelations = relations(
  patientsTable,
  ({ many, one }) => ({
    clinic: one(clinicsTable, {
      fields: [patientsTable.clinicId],
      references: [clinicsTable.id],
    }),
    appointments: many(appointmentsTable),
  }),
); // Um paciente pertence a uma clinica e tem vários agendamentos

// Appointments

export const appointmentsTable = pgTable("appointments", {
  id: uuid("id").defaultRandom().primaryKey(),
  date: timestamp("date").notNull(),
  clinicId: uuid("clinic_id")
    .notNull()
    .references(() => clinicsTable.id, { onDelete: "cascade" }), // Referencia o id da tabela clinicas
  patientId: uuid("patient_id")
    .notNull()
    .references(() => patientsTable.id, { onDelete: "cascade" }), // Referencia o id da tabela pacientes
  doctorId: uuid("doctor_id")
    .notNull()
    .references(() => doctorsTable.id, { onDelete: "cascade" }), // Referencia o id da tabela medicos
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updateAt: timestamp("update_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
}); // Um agendamento tem id, data, id da clinica, id do paciente e id do medico.

export const appointmentsTableRelations = relations(
  appointmentsTable,
  ({ one }) => ({
    clinic: one(clinicsTable, {
      fields: [appointmentsTable.clinicId],
      references: [clinicsTable.id],
    }),
    patient: one(patientsTable, {
      fields: [appointmentsTable.patientId],
      references: [patientsTable.id],
    }),
    doctor: one(doctorsTable, {
      fields: [appointmentsTable.doctorId],
      references: [doctorsTable.id],
    }),
  }),
); // Um agendamento pertence a uma clinica, paciente e médico
