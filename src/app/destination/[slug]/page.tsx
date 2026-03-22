export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <main className="min-h-screen bg-warm-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="font-serif text-4xl text-stone-900 tracking-tight capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>
      </div>
    </main>
  )
}
