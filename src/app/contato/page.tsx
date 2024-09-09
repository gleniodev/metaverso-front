"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  User,
  AtSign,
  PencilLine,
  BookText,
  PenLine,
  Phone,
} from "lucide-react";
import WhatsAppButton from "@/components/ui/whatsappButton";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
    .max(100)
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, {
      message: "O nome deve conter apenas letras",
    }),
  email: z.string().email({ message: "Por favor, insira um email válido" }),
  phone: z
    .string()
    .min(11, { message: "O telefone deve ter pelo menos 11 caracteres" })
    .max(11)
    .regex(/^[0-9\s().-]+$/, {
      message: "O telefone deve conter apenas números e caracteres permitidos",
    }),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" })
    .max(250),
});

type FormData = z.infer<typeof formSchema>;

export default function FaleConosco() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(
        "https://plataforma.metaverso.ltda/public/form/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (!res.ok) {
        throw new Error("Erro ao enviar o formulário");
      }

      const result = await res.json();
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Erro desconhecido:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center gap-12 lg:flex-row">
        {/* Lado Esquerdo - Informações de Contato */}
        <div className="h-screen w-full bg-[url('/bg-contact.png')] bg-cover lg:w-1/2">
          <div className="l container flex h-screen w-full flex-col items-center justify-center gap-8 py-20 text-center md:gap-20 lg:w-1/2">
            <div>
              <h2 className="text-metaverso-black text-3xl font-bold md:text-4xl lg:mt-10">
                Fale <span className="text-metaverso-blue-4">Conosco!</span>
              </h2>
            </div>
            <div className="flex-col gap-8 text-xl md:text-2xl">
              <div>
                <h3 className="text-metaverso-black font-bold">E-mail</h3>
                <p className="text-metaverso-black">contato@metaverso.ltda</p>
              </div>
              <div>
                <h3 className="text-metaverso-black font-bold">Telefones</h3>
                <p className="text-metaverso-black">(65) 98125-6222</p>
              </div>
            </div>
            <div className="">
              <Image
                src="/mtv-ass-md.svg"
                alt="Logo metaverso"
                width={187}
                height={75}
              />
              <div className="md:hidden">
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Formulário de Contato */}
        <div className="container flex flex-col items-center rounded-xl bg-white p-8 lg:w-1/2">
          <div className="flex flex-col md:w-[80%]">
            <h3 className="text-metaverso-black mb-6 text-xl font-bold lg:text-2xl">
              Envie a sua mensagem
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative flex items-center">
                          <User
                            className="absolute left-3 text-gray-400"
                            size={20}
                          />
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder="Nome"
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative flex items-center">
                          <AtSign
                            className="absolute left-3 text-gray-400"
                            size={20}
                          />
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder="E-mail"
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative flex items-center">
                          <Phone
                            className="absolute left-3 text-gray-400"
                            size={20}
                          />
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder="Telefone"
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative flex items-center">
                          <BookText
                            className="absolute left-3 text-gray-400"
                            size={20}
                          />
                          <Textarea
                            {...field}
                            value={field.value ?? ""}
                            placeholder="Mensagem"
                            className="pl-10"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-metaverso-blue-4 rounded-full py-3 text-white lg:w-1/2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
