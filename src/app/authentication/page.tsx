"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import SignUpForm from "./components/sign-up-from"

const AuthenticationPage =() => {
  return (
  <div className="h-screen w-screen flex items-center justify-center">
    <Tabs defaultValue="login" className="w-[400px]">
      
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Criar Conta</TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Faça login para continuar
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Entrar</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="register">
        <SignUpForm />
      </TabsContent>

    </Tabs>
  </div>
  );
}

export default AuthenticationPage