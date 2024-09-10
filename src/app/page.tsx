import { redirect } from "next/navigation";

export const runtime = 'edge';

export default function Home() {
  // Redireciona para a página inicial correta
  redirect("/inicio");
}
