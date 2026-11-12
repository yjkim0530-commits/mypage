import { motion } from "framer-motion"
import { Sparkles, Compass, Cpu, Layers, BookOpen, BookmarkCheck } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function App() {
  // 나) 보여 줄 것 세 가지
  const showcaseItems = [
    {
      id: "01",
      icon: BookOpen,
      title: "손금학 연구",
      subtitle: "Benham Palmistry Research",
      description:
        "영국 CoE 손금학 디플로마(UK)를 바탕으로 한 벤헴 손금학 연구 및 학문적 탐구",
      details: [
        "영국 CoE 손금학 디플로마 (CoE Palmistry Diploma, UK)",
        "벤헴 손금학 연구자 (Benham Palmistry Researcher)",
      ],
    },
    {
      id: "02",
      icon: Cpu,
      title: "AI 크리에이티브 콘텐츠",
      subtitle: "AI Creative Contents",
      description:
        "AI 영상, AI 음악 등 최신 인공지능 기술을 접목한 다양한 콘텐츠 실험 및 제작",
      details: [
        "AI 영상 콘텐츠 기획 및 제작",
        "AI 음악 창작 및 사운드 실험",
      ],
    },
    {
      id: "03",
      icon: Layers,
      title: "웹앱 및 디지털 아카이브",
      subtitle: "Web Apps & Digital Archive",
      description:
        "웹앱 제작과 함께 실험 과정과 모든 결과물을 기록하고 공유하는 디지털 아카이브 운영",
      details: [
        "웹앱 실험 및 인터랙티브 인터페이스 제작",
        "KIMNIVERSE 디지털 아카이브 구축 및 공유",
      ],
    },
  ]

  // 다) 걸어온 길 (네다섯 줄)
  const journeyTimeline = [
    {
      step: "01",
      role: "영국 CoE 손금학 디플로마",
      roleEn: "CoE Palmistry Diploma (UK)",
      note: "손금학 공인 디플로마 취득",
    },
    {
      step: "02",
      role: "벤헴 손금학 연구자",
      roleEn: "Benham Palmistry Researcher",
      note: "벤헴 체계 손금학 연구 활동",
    },
    {
      step: "03",
      role: "역리학회 부이사장",
      roleEn: "Vice Chairperson, Society for the Study of I Ching",
      note: "역리학회 부이사장 역임",
    },
    {
      step: "04",
      role: "AI 크리에이터 활동",
      roleEn: "AI Content Creator & Developer",
      note: "AI 영상, 음악, 웹앱 등 다양한 창작 콘텐츠 실험 및 제작",
    },
    {
      step: "05",
      role: "KIMNIVERSE 아카이브 구축",
      roleEn: "KIMNIVERSE Digital Archive",
      note: "창작 과정과 결과물을 기록하고 공유하는 나만의 디지털 아카이브 운영",
    },
  ]

  // 라) 할 수 있는 것 (쉼표로 나열)
  const skillsList = [
    "손금학 연구",
    "AI 영상 제작",
    "AI 음악 제작",
    "웹앱 제작",
    "디지털 아카이브",
  ]
  const skillsSentence = skillsList.join(", ")

  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#f4f4f5] overflow-x-hidden selection:bg-[#a3e635] selection:text-black">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0d0f12]/80 border-b border-[#272c35]/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635] group-hover:scale-125 transition-transform" />
            <span className="text-base sm:text-lg font-black tracking-tight text-[#f4f4f5]">
              KIMNIVERSE
            </span>
            <span className="hidden sm:inline text-xs text-zinc-500 font-medium ml-1">
              김블러스 유니버스
            </span>
          </a>

          <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-[#a3e635] transition-colors">
              소개
            </a>
            <a href="#showcase" className="hover:text-[#a3e635] transition-colors">
              보여 줄 것
            </a>
            <a href="#journey" className="hover:text-[#a3e635] transition-colors">
              걸어온 길
            </a>
            <a href="#capabilities" className="hover:text-[#a3e635] transition-colors">
              할 수 있는 것
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="about"
        className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center py-20 sm:py-28 overflow-hidden"
      >
        {/* Background Animated Geometric Pattern (은은하고 과하지 않은 움직임) */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating Subtle Geometric Shapes */}
          <motion.div
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-96 h-96 rounded-full border border-[#a3e635]/15"
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 90, 0],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute top-1/3 -left-20 w-80 h-80 rounded-full border border-zinc-700/30"
            animate={{
              scale: [1, 1.12, 1],
              rotate: [0, -60, 0],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute bottom-10 right-1/4 w-64 h-64 border border-[#a3e635]/10 rounded-2xl"
            animate={{
              rotate: [0, 45, 90, 45, 0],
              scale: [0.95, 1.03, 0.95],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Soft Lime Ambient Glow in the center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[340px] bg-[#a3e635]/5 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-6"
          >
            <Badge variant="lime" className="gap-2 px-3.5 py-1.5 text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
              ABOUT ME | 디지털 크리에이티브 아카이브
            </Badge>
          </motion.div>

          {/* Main Title (화면이 작아져도 너무 작아지지 않고, 아주 굵고 자간 좁게) */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#f4f4f5] leading-[1.08] sm:leading-[1.05] mb-4"
          >
            KIMNIVERSE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-zinc-300 mb-8"
          >
            김블러스 유니버스
          </motion.p>

          {/* 가) 맨 위 한 줄 소개 — 제가 어떤 사람인지 한 문장으로 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto mb-10"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-[#272c35] bg-[#15181e]/90 shadow-xl backdrop-blur-sm">
              <div className="text-xs uppercase tracking-widest text-[#a3e635] font-semibold mb-3">
                한 줄 소개
              </div>
              <p className="text-lg sm:text-2xl font-bold text-[#f4f4f5] leading-relaxed break-keep">
                손금학 연구자이자 AI 크리에이터로서 AI 영상, 음악, 웹앱 등 다양한 콘텐츠를 실험하고 제작합니다.
              </p>
              <div className="mt-4 pt-4 border-t border-[#272c35]/80 text-sm sm:text-base text-zinc-400 break-keep">
                KIMNIVERSE는 그 과정과 결과물을 기록하고 공유하는 나만의 디지털 아카이브입니다.
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#showcase">
              <Button size="lg" className="gap-2">
                <Sparkles className="w-4 h-4 text-black" />
                보여 줄 것 세 가지 살펴보기
              </Button>
            </a>
            <a href="#journey">
              <Button variant="outline" size="lg" className="gap-2">
                <Compass className="w-4 h-4 text-[#a3e635]" />
                걸어온 길 보기
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <Separator />
      </div>

      {/* 나) 보여 줄 것 세 가지 — 제가 할 수 있는 일을 세 덩어리로 */}
      <section id="showcase" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-[#a3e635] mb-2">
              MY CREATIVE ARCHIVE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#f4f4f5] mb-4">
              보여 줄 것 세 가지
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl break-keep">
              손금학 연구와 AI 콘텐츠 실험, 그리고 이를 담아내는 디지털 아카이브까지 세 가지 핵심 영역을 소개합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {showcaseItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="h-full flex flex-col justify-between card-hover-border relative overflow-hidden group">
                    {/* Subtle top indicator */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#272c35] group-hover:bg-[#a3e635] transition-colors" />

                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-[#272c35] flex items-center justify-center text-[#a3e635] group-hover:border-[#a3e635]/40 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-bold text-zinc-500 tracking-wider">
                          {item.id}
                        </span>
                      </div>

                      <div>
                        <CardTitle className="text-xl sm:text-2xl font-bold mb-1">
                          {item.title}
                        </CardTitle>
                        <div className="text-xs font-medium text-zinc-400">
                          {item.subtitle}
                        </div>
                      </div>

                      <p className="text-sm text-zinc-300 leading-relaxed break-keep">
                        {item.description}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="pt-4 border-t border-[#272c35] space-y-2">
                        {item.details.map((detail, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400 break-keep"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] mt-1.5 shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <Separator />
      </div>

      {/* 다) 걸어온 길 — 시기 순서대로 네다섯 줄 */}
      <section id="journey" className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-[#a3e635] mb-2">
              HISTORY & BACKGROUND
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#f4f4f5] mb-4">
              걸어온 길
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl break-keep">
              연구와 학회 활동부터 디지털 창작물 아카이빙까지 차례대로 걸어온 발자취입니다.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-[1px] bg-[#272c35]" />

            <div className="space-y-6 sm:space-y-8">
              {journeyTimeline.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-5 sm:gap-8 group"
                >
                  {/* Timeline point */}
                  <div className="relative z-10 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-[#15181e] border border-[#272c35] flex items-center justify-center shrink-0 group-hover:border-[#a3e635] transition-colors">
                    <span className="text-xs font-mono font-bold text-[#a3e635]">
                      {item.step}
                    </span>
                  </div>

                  {/* Card Content */}
                  <Card className="flex-1 card-hover-border">
                    <CardHeader className="py-5 sm:py-6 px-6 sm:px-8">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                        <CardTitle className="text-lg sm:text-xl font-bold text-[#f4f4f5]">
                          {item.role}
                        </CardTitle>
                        <span className="text-xs text-zinc-400 font-mono">
                          {item.roleEn}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 break-keep">
                        {item.note}
                      </p>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <Separator />
      </div>

      {/* 라) 할 수 있는 것 — 잘하는 것을 쉼표로 나열 */}
      <section id="capabilities" className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-[#a3e635] mb-2">
              CORE CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#f4f4f5] mb-4">
              할 수 있는 것
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl break-keep">
              경험과 연구를 통해 실제로 수행하고 구현할 수 있는 역량입니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card className="card-hover-border">
              <CardHeader className="p-8 sm:p-10 space-y-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    역량 요약 (쉼표 나열)
                  </div>
                  {/* 요청하신 쉼표 나열 형태 */}
                  <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#f4f4f5] leading-relaxed break-keep border-l-2 border-[#a3e635] pl-4 sm:pl-6 py-1">
                    {skillsSentence}
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                    개별 역량 항목
                  </div>
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {skillsList.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-4 py-2 text-sm sm:text-base text-zinc-200 border-[#272c35] hover:border-[#a3e635] hover:text-[#a3e635] transition-colors gap-2"
                      >
                        <BookmarkCheck className="w-3.5 h-3.5 text-[#a3e635]" />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#272c35] bg-[#090b0e] py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="text-lg font-black tracking-tight text-[#f4f4f5] flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
              KIMNIVERSE
              <span className="text-xs text-zinc-500 font-normal">| 김블러스 유니버스</span>
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              디지털 창작 아카이브 & 연구 포트폴리오
            </p>
          </div>

          <div className="text-xs text-zinc-600 font-mono">
            © KIMNIVERSE. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
