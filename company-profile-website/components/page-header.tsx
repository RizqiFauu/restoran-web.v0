interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-primary pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
            {title}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/70">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
