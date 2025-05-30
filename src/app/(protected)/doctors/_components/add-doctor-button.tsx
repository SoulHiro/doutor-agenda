"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import UpsertDoctorForm from "./upsert-doctor-button";

const AddDoctorButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Adicionar médicos
        </Button>
      </DialogTrigger>
      <DialogContent>
        <UpsertDoctorForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddDoctorButton;
