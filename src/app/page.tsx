import SignIn from "@/components/SignIn"
import SignOut from "@/components/SignOut"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getServerSession()

  if (session?.user) {
    redirect("/dashboard")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <SignIn />
      </div>
    </main>
  )
}