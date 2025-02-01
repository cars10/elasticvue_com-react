import Button from "@/components/shared/Button/Button"

export default function Into() {
  const titles = [
    'The elasticsearch GUI that you\'ve been waiting for.',
    'The elasticsearch GUI that you deserve.',
    'The smartest way to work with elasticsearch.',
    'The best way to manage your cluster.'
  ]
  const title = titles[Math.floor(Math.random() * titles.length)]
  const titleWords = title.split(' ')

  return (<>
    <div className="w-[50%] mx-auto pt-20 z-2">
      <div className="w-3/5">
        <h1 className="text-6xl font-bold mb-12 font-bold">
          <span className="fade" style={{ animationDelay: 0.1 + 's' }}>Elasticvue.</span>
        </h1>
        <h1 className="text-5xl my-8 leading-18">
          {titleWords.map((word, i) => (
            <span key={i} className="fade" style={{ animationDelay: (i * 0.1) + 0.75 + 's' }}>{word}&nbsp;</span>
          ))}
        </h1>

        <Button
          color="white"
          className="fade mr-4"
          style={{ animationDelay: 2 + 's' }}
          href="/"
          label="Installation" />

        <Button
          className="fade"
          style={{ animationDelay: 2 + 's' }}
          href="/features"
          label="Screenshots" />
      </div>
    </div>
  </>)
}
