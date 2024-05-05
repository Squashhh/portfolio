import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Projects() {
  return (
    <div>
      <div className="flex items-center p-5 ">
        <Separator className="w-full" />
      </div>

      <div className=" mb-6 text-base">
        <p>Here are my main projects, the ones I'm most proud of and the most advanced. If you'd like to see more, please visit my github.</p>
      </div>

      <a href="https://github.com/Squashhh/tokfast" target="_blank">
        <Card className="hover:border-neutral-400 cursor-pointer">
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg">tokfast</CardTitle>
              <ExternalLink size={16} className="ml-2" />
            </div>
            <CardDescription className="text-sm">An automatic tool for generating IA tiktoks.</CardDescription>
          </CardHeader>
        </Card>
      </a>

      <a href="https://github.com/TrixaMC" target="_blank">
        <Card className="hover:border-neutral-400 cursor-pointer my-4">
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg">trixa</CardTitle>
              <ExternalLink size={16} className="ml-2" />
            </div>
            <CardDescription className="text-sm">Minecraft bedrock server using PMMP software.</CardDescription>
          </CardHeader>
        </Card>
      </a>
      <a href="https://github.com/Squashhh/DALLE-2" target="_blank">
        <Card className="hover:border-neutral-400 cursor-pointer">
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg">etty</CardTitle>
              <ExternalLink size={16} className="ml-2" />
            </div>
            <CardDescription className="text-sm">Robot discord using OpenAI to generate images on demand.</CardDescription>
          </CardHeader>
        </Card>
      </a>
    </div>
  )
}
