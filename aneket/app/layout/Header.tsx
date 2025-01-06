import Link from 'next/link'



const Header = () => {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          User Directory
        </Link>
     
      </div>
    </header>
  )
}

export default Header