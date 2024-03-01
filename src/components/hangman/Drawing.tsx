export function Drawing({ wrongGuesses }: { wrongGuesses: number }) {
  return (
    <section className="flex w-full basis-1/2 items-center justify-center p-2">
      <svg
        className="size-72 md:size-96"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="hook"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 13H48H52V30H48V17H27V96H50V100H0V96H23V17V13Z"
          className="fill-neutral-50"
        />
        <circle
          id="head"
          cx="50"
          cy="37"
          r="7"
          strokeWidth="2"
          className={`transition-colors duration-300 ease-in-out ${wrongGuesses >= 1 ? "stroke-neutral-50" : "stroke-transparent"}`}
        />
        <rect
          id="body"
          x="49"
          y="44"
          width="2"
          height="20"
          className={`transition-colors duration-300 ease-in-out ${wrongGuesses >= 2 ? "fill-neutral-50" : "fill-transparent"}`}
        />
        <path
          id="right-arm"
          d="M50.093 44.5176L52.0249 43.9999L55.6483 57.5229C55.7913 58.0564 55.4747 58.6047 54.9412 58.7476V58.7476C54.4078 58.8906 53.8594 58.574 53.7165 58.0405L50.093 44.5176Z"
          className={`transition-colors duration-300 ease-in-out ${wrongGuesses >= 3 ? "fill-neutral-50" : "fill-transparent"}`}
        />
        <path
          id="left-arm"
          d="M47.9755 44L49.9073 44.5176L46.2838 58.0406C46.1409 58.5741 45.5926 58.8906 45.0591 58.7477V58.7477C44.5256 58.6048 44.2091 58.0564 44.352 57.523L47.9755 44Z"
          className={`transition-colors duration-300 ease-in-out ${wrongGuesses >= 4 ? "fill-neutral-50" : "fill-transparent"}`}
        />
        <path
          id="right-leg"
          d="M50.093 62.5176V62.5176C51.1599 62.2317 52.2566 62.8649 52.5425 63.9318L56.4248 78.4207C56.5677 78.9541 56.2512 79.5025 55.7177 79.6454V79.6454C55.1842 79.7884 54.6359 79.4718 54.4929 78.9383L50.093 62.5176Z"
          className={`transition-colors duration-300 ease-in-out ${wrongGuesses >= 5 ? "fill-neutral-50" : "fill-transparent"}`}
        />
        <path
          id="left-leg"
          d="M47.4578 63.9319C47.7437 62.8649 48.8404 62.2318 49.9073 62.5176V62.5176L45.5074 78.9384C45.3645 79.4718 44.8161 79.7884 44.2826 79.6455V79.6455C43.7492 79.5025 43.4326 78.9542 43.5755 78.4207L47.4578 63.9319Z"
          className={`transition-colors duration-300 ease-in-out ${wrongGuesses >= 6 ? "fill-neutral-50" : "fill-transparent"}`}
        />
      </svg>
    </section>
  );
}
