import { Hero } from './sections/Hero'

function App() {
  return (
    // 배경 위에 모바일 폭 카드가 떠 있는 구성 (데스크톱에서는 가운데 정렬)
    <div className='min-h-dvh bg-page px-4 py-6'>
      <main className='@container mx-auto w-full max-w-[430px] overflow-hidden rounded-[28px] bg-card shadow-[0_18px_50px_-20px_rgb(80_60_40/0.35)]'>
        <Hero />
      </main>
    </div>
  )
}

export default App
