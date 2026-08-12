import type { ReactNode } from 'react'

interface SectionCardProps {
  children: ReactNode
  /** 섹션별 여백·정렬 등을 덧붙일 때 사용 */
  className?: string
}

/**
 * Hero 아래에 오는 섹션들의 공통 카드 틀.
 * 배경 위에 떠 있는 형태로, 모서리·그림자·여백을 통일합니다.
 */
export function SectionCard({ children, className = '' }: SectionCardProps) {
  return (
    <section
      className={`mx-4 mt-6 rounded-[28px] bg-white px-8 py-12 shadow-[0_14px_40px_-18px_rgb(80_60_40/0.3)] ${className}`}
    >
      {children}
    </section>
  )
}
