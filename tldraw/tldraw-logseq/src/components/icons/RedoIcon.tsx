import * as React from 'react'

export function RedoIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 15 15"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4.32978 8.5081C4.32978 10.1923 5.70009 11.5625 7.38418 11.5625H8.46539C8.64456 11.5625 8.78975 11.4173 8.78975 11.2382V11.13C8.78975 10.9508 8.64457 10.8057 8.46539 10.8057H7.38418C6.11736 10.8057 5.08662 9.77492 5.08662 8.5081C5.08662 7.24128 6.11736 6.21054 7.38418 6.21054H9.37894L8.00515 7.58433C7.8576 7.73183 7.8576 7.97195 8.00515 8.11944C8.14833 8.26251 8.39751 8.2623 8.54036 8.11944L10.56 6.09971C10.6315 6.02824 10.6709 5.93321 10.6709 5.8321C10.6709 5.73106 10.6315 5.63598 10.56 5.56454L8.54025 3.54472C8.3974 3.40176 8.14801 3.40176 8.00513 3.54472C7.85758 3.69218 7.85758 3.93234 8.00513 4.07979L9.37892 5.45368H7.38418C5.70009 5.45368 4.32978 6.82393 4.32978 8.5081Z" />
    </svg>
  )
}