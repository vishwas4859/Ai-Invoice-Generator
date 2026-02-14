//Icons
/* helpers to format icons */
export const TrendingUpIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
  >
    <path d='M23 6l-9.5 9.5-5-5L1 18' />
    <path d='M17 6h6v6' />
  </svg>
)
export const DollarIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
  >
    <line x1='12' y1='1' x2='12' y2='23' />
    <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
  </svg>
)
export const ClockIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
  >
    <circle cx='12' cy='12' r='10' />
    <polyline points='12 6 12 12 16 14' />
  </svg>
)
export const BrainIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
  >
    <path d='M9.5 14.5A2.5 2.5 0 0 1 7 12c0-1.38.5-2 1-3 1.072-2.143 2.928-3.25 4.5-3 1.572.25 3 2 3 4 0 1.5-.5 2.5-1 3.5-1 2-2 3-3.5 3-1.5 0-2.5-1.5-2.5-3Z' />
    <path d='M14.5 9.5A2.5 2.5 0 0 1 17 12c0 1.38-.5 2-1 3-1.072 2.143-2.928 3.25-4.5 3-1.572-.25-3-2-3-4 0-1.5.5-2.5 1-3.5 1-2 2-3 3.5-3 1.5 0 2.5 1.5 2.5 3Z' />
  </svg>
)
export const FileTextIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
  >
    <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
    <polyline points='14 2 14 8 20 8' />
    <line x1='16' y1='13' x2='8' y2='13' />
    <line x1='16' y1='17' x2='8' y2='17' />
    <polyline points='10 9 9 9 8 9' />
  </svg>
)
export const EyeIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
  >
    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
    <circle cx='12' cy='12' r='3' />
  </svg>
)