export default function Rating({
  amount,
  stars
}: {
  amount?: number
  stars: number
}) {
  const fullStars = Math.floor(stars)
  const addHalfStar = fullStars !== stars

  return (
    <>
      <div className="inline-flex items-end justify-center">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="mr-1"
            fill="#F9A825"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
        ))}

        {addHalfStar && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#F9A825"
          >
            <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
          </svg>
        )}

        {amount &&
          <div className="ml-2">{amount}</div>
        }
      </div>
    </>
  )
}
