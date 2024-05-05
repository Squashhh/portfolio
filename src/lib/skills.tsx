import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge"

export function Skills() {
  return (
    <div>
      <div className="flex items-center p-5 ">
        <Separator className="w-full" />
      </div>

      <div className="flex flex-wrap gap-2 ">
        <a href="https://react.dev/" target="_blank">
          <Badge variant="outline" className="hover:border-neutral-400 cursor-pointer">React</Badge>
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <Badge variant="outline" className="hover:border-neutral-400cursor-pointer">Tailwind CSS</Badge>
        </a>
        <a href="https://nextjs.org/" target="_blank">
          <Badge variant="outline" className="hover:border-neutral-400 cursor-pointer">Next JS</Badge>
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <Badge variant="outline" className="hover:border-neutral-400 cursor-pointer">Typescript</Badge>
        </a>
        <a href="https://vercel.com/" target="_blank">
          <Badge variant="outline" className="hover:border-neutral-400 cursor-pointer">Vercel</Badge>
        </a>
        <a href="https://supabase.com/" target="_blank">
          <Badge variant="outline" className="hover:border-neutral-400 cursor-pointer">Supabase</Badge>
        </a>
      </div>

    </div>
  )
}
