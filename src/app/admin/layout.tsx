import { Navbar } from "./Navbar"
import { Providers } from "./providers"

const AdminLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <Providers>
            <main className="min-h-screen dark:bg-primary-dark dark:text-white relative" >
                <Navbar />
                {children}
            </main>
        </Providers>
    )
}

export default AdminLayout