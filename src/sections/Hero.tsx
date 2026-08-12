import mainImage from '../assets/testimage.png'

// TODO: 확정되면 src/data/wedding.ts 로 분리
const BRIDE = '박세연'
const GROOM = '강영균'
const DATE_TEXT = '2027년 4월 17일 토요일 오후 2시'
const VENUE_TEXT = '성균관컨벤션 웨딩홀'

export function Hero() {
  return (
    // 여백 없이 첫 화면을 그대로 채우는 전체 배경 (컬럼 밖)
    <section className='relative h-svh w-full overflow-hidden bg-page'>
      {/* 사진은 화면 폭을 따라가되 900px 을 넘지 않습니다.
          그 이상 넓어지면 세로 사진이 위아래로 심하게 잘리기 때문입니다. */}
      <div className='absolute inset-0 mx-auto max-w-[900px] overflow-hidden'>
        <img
          src={mainImage}
          alt=''
          className='size-full object-cover'
        />

        {/* 사진 위 텍스트 가독성 확보용 그라데이션 (상단을 더 어둡게) */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/25' />
      </div>

      {/* 사진은 전체 폭이지만 글은 모바일 폭 안에 묶어 둡니다.
          컨테이너 쿼리 기준도 이 텍스트 컬럼입니다. */}
      <div className='@container relative mx-auto flex h-full max-w-[430px] flex-col items-center gap-7 px-8 pt-14 text-center text-white [text-shadow:0_1px_10px_rgb(0_0_0/0.35)]'>
        <p className='font-english text-xs tracking-[0.35em] @min-[400px]:text-sm'>
          WE ARE GETTING MARRIED
        </p>

        <h1 className='font-hangeul text-[1.7rem] leading-snug font-light tracking-wide @min-[400px]:text-3xl'>
          <span className='mr-2 text-sm text-white/75'>신랑</span>
          {GROOM}
          <span className='mx-3 align-middle text-sm text-white/75'>|</span>
          <span className='mr-2 text-sm text-white/75'>신부</span>
          {BRIDE}
        </h1>

        <span className='h-px w-8 bg-white/50' />

        <div className='flex flex-col items-center gap-2.5'>
          <p className='text-md font-hangeul tracking-wider'>{DATE_TEXT}</p>
          <p className='font-hangeul text-sm font-light tracking-wider text-white/85'>
            {VENUE_TEXT}
          </p>
        </div>
      </div>
    </section>
  )
}
