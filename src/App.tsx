import { Greeting } from './sections/Greeting'
import { Hero } from './sections/Hero'

function App() {
  return (
    <div className='min-h-dvh bg-page'>
      {/* Hero 는 화면 전체 폭을 덮습니다 (컬럼 밖) */}
      <Hero />

      {/* 이후 섹션들은 모바일 폭 컬럼 안에서 카드 형태로 */}
      <main className='@container mx-auto w-full max-w-[430px] pb-6'>
        <Greeting />
      </main>
    </div>
  )
}

export default App
