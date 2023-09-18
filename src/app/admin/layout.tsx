import { Metadata } from "next"
import { Navbar } from "./Navbar"
import { Providers } from "./providers"
import { contactFormStatusType } from "@/interfaces"

export const metadata: Metadata = {
    manifest: '/manifest.json',
    // verification: {
    //   google: '',
    // }
}

const AdminLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <Providers>
            <main className="min-h-screen dark:bg-primary-dark dark:text-white relative pt-16 pb-6" >
                <Navbar />
                {children}
            </main>
        </Providers>
    )
}

export default AdminLayout