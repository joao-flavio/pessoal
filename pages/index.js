import Link from "next/link";
export default function Home() {
  return (
    <>
      <h3>Aplicação que retorna as horas</h3>
      <Link href="/hello">
        <button>Ver horas</button>
      </Link>
    </>
  )
}
