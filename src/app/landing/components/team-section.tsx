"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { Github, Linkedin, Globe } from 'lucide-react'


const team = [
  {
    id: 1,
    name: 'Alexandra Chen',
    role: '创始人兼 CEO',
    description: '前 TechFlow 联合创始人，曾就职于微软和谷歌。',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=60&w=150&auto=format&fit=crop',
    fallback: 'AC',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: '工程总监',
    description: '曾带领 Stripe、Discord 和 Meta Labs 的工程团队。',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=60&w=150&auto=format&fit=crop',
    fallback: 'MR',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    role: '产品经理',
    description: '曾担任 Linear、Lambda School 和 On Deck 的产品经理。',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=60&w=150&auto=format&fit=crop',
    fallback: 'SL',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 4,
    name: 'David Kim',
    role: '前端开发工程师',
    description: '曾担任 Linear、Coinbase 和 PostScript 的前端开发。',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=60&w=150&auto=format&fit=crop',
    fallback: 'DK',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 5,
    name: 'Emma Thompson',
    role: '后端开发工程师',
    description: 'Clearbit 的后端开发负责人，前 Clearbit 和 Loom 成员。',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=60&w=150&auto=format&fit=crop',
    fallback: 'ET',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 6,
    name: 'Ryan Mitchell',
    role: '产品设计师',
    description: 'Figma 创始设计团队成员，前 Pleo、Stripe 和 Tile 成员。',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=60&w=150&auto=format&fit=crop',
    fallback: 'RM',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 7,
    name: 'James Anderson',
    role: '用户体验研究员',
    description: '曾主导 Slack 的用户研究，并为 Netflix 和 Udacity 提供顾问服务。',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?q=60&w=150&auto=format&fit=crop',
    fallback: 'JA',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 8,
    name: 'Isabella Garcia',
    role: '客户成功',
    description: '曾主导 Wealthsimple 的客户体验，前 PagerDuty 和 Squreen 成员。',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=60&w=150&auto=format&fit=crop',
    fallback: 'IG',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  }
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            我们的团队
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            认识我们的团队
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            我们是一支充满热情的创新者、建设者和问题解决者团队，致力于创造卓越的数字体验，为世界带来改变。
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <Card key={member.id} className="shadow-xs py-2">
              <CardContent className="p-4">
                <div className="text-center">
                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    <CardDecorator>
                      <Avatar className="h-24 w-24 border shadow-lg">
                        <AvatarImage
                          src={member.image}
                          alt={member.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="text-lg font-semibold">
                          {member.fallback}
                        </AvatarFallback>
                      </Avatar>
                    </CardDecorator>
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer hover:text-primary"
                      asChild
                    >
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer hover:text-primary"
                      asChild
                    >
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer hover:text-primary"
                      asChild
                    >
                      <a
                        href={member.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Website`}
                      >
                        <Globe className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
