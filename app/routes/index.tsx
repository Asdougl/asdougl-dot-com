import { PageLayout } from '~/layout/PageLayout'
import Logo from '~/img/asdougllogo.svg'

const LINKS = [
  { text: 'Github', href: 'https://github.com/Asdougl' },
  {
    text: 'LinkedIn',
    href: 'https://au.linkedin.com/in/cameron-burrows-64b1a9192',
  },
]

export default function Index() {
  return (
    <PageLayout>
      <div className="flex h-[600px] flex-col items-start justify-center">
        <div className="font-display text-8xl font-bold tracking-wide md:mt-16 md:px-24">
          <div>Hi,</div>
          <div className="flex items-baseline gap-4 text-blue-2">
            I&apos;m Asdougl{' '}
            <img src={Logo} alt="" style={{ height: '0.8em' }} />
          </div>
        </div>
        <div className="pt-12 font-display text-2xl font-bold tracking-widest md:px-32">
          <div>Frontend Web Developer</div>
          <div className="pl-4">
            <span className="text-white text-opacity-60">from</span>{' '}
            <span className="text-blue-2">Sydney, Australia</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 pt-16">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full border-2 border-blue-5 px-6 py-3 font-display text-lg tracking-wide hover:bg-blue-5/20"
            target="_blank"
            rel="noreferrer"
          >
            {link.text}
          </a>
        ))}
      </div>
    </PageLayout>
  )
}
