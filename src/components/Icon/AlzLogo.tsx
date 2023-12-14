const AlzLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="20"
      height="22"
      fill="none"
    >
      <path fill="url(#a)" d="M0 0h20v22H0z" />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref="#b"
            transform="matrix(.00123 0 0 .00114 -.133 -.114)"
          />
        </pattern>
        <image
          id="b"
          width="1024"
          height="1024"
        />
      </defs>
    </svg>
  )
}
export default AlzLogo