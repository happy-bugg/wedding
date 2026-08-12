import mainImage from '../assets/testimage.png'

// TODO: 확정되면 src/data/wedding.ts 로 분리
const BRIDE = '박세연'
const GROOM = '강영균'
const DATE_TEXT = '2027년 4월 17일 토요일 오후 2시'
const VENUE_TEXT = '성균관컨벤션 웨딩홀'

export function Hero() {
  return (
    <section>
      <img
        src={mainImage}
        alt=''
        className='aspect-3/4 w-full object-cover'
      />

      <div className='flex flex-col items-center gap-7 px-8 pt-9 pb-11 text-center'>
        <p className='font-english text-xs tracking-[0.35em] text-ink-soft @min-[400px]:text-sm'>
          WE ARE GETTING MARRIED
        </p>

        <h1 className='font-hangeul text-[1.7rem] leading-snug font-light tracking-wide @min-[400px]:text-3xl'>
          <span className='mr-2 text-sm text-ink-soft'>신랑</span>
          {GROOM}
          <span className='mx-3 align-middle text-sm text-ink-soft'>|</span>
          <span className='mr-2 text-sm text-ink-soft'>신부</span>
          {BRIDE}
        </h1>

        <span className='h-px w-8 bg-line' />

        <div className='flex flex-col items-center gap-2.5'>
          <p className='text-md font-hangeul tracking-wider text-ink-soft'>
            {DATE_TEXT}
          </p>
          <p className='font-hangeul text-sm font-light tracking-wider text-ink-soft/80'>
            {VENUE_TEXT}
          </p>
        </div>
      </div>
    </section>
  )
}
