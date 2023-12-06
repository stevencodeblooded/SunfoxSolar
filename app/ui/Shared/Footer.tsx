import Link from "next/link"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="px-2 flex flex-col gap-4 text-center py-8 bg-red-100 font-light text-sm rounded-t-3xl">
      <p>© Sunfox Solar - {year} <span className="underline"><Link href={'/terms'}>Terms of Service</Link></span></p>
      <p>Proud Member Of California Solar Storage Association</p>
    </div>
  )
}

export default Footer