import { ArrowUpRight } from "lucide-react"

export const Footer = () => {
  return (
    <div className="pt-8 flex items-center cursor-pointer">
      <a href="https://github.com/Squashhh" target="_blank" className="text-sm pr-2 underline underline-offset-4">follow me on github</a>
      <ArrowUpRight size={20} />
    </div>
  )
}