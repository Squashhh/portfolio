import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export function Biography() {
  return (
    <div className="flex">
      <div>
        <h1 className="text-lg font-medium mb-6">I'm vincent 👋🏼</h1>
        <p className="text-base mb-2">I'm a French full-stack developer, learning every day. I let my imagination run wild ! I'm currently working on a project called <a href="https://tokfast.fr/" target="_blank"><strong className="cursor-pointer underline underline-offset-4">tokfast</strong></a>.</p>
      </div>

      <div className="flex">
        <a href="https://github.com/Squashhh" target="_blank">
          <GithubIcon size={20} className="mx-2 transition-all duration-100 hover:text-purple-600 hover:-rotate-12 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/squashhh/" target="_blank">
          <LinkedinIcon size={20} className="mx-2 transition-all duration-100 hover:text-blue-600 hover:-rotate-12 cursor-pointer" />
        </a>
        <a href="mailto:squash.mail.pro@gmail.com">
          <MailIcon size={20} className="mx-2 transition-all duration-100 hover:text-red-600 hover:-rotate-12 cursor-pointer" />
        </a>
      </div>
    </div>
  )
}