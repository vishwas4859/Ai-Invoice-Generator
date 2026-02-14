//Icons
export const UploadIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
  >
    <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
    <polyline points='17 8 12 3 7 8' />
    <line x1='12' y1='3' x2='12' y2='15' />
  </svg>
)

export const ImageIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
  >
    <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
    <circle cx='8.5' cy='8.5' r='1.5' />
    <polyline points='21 15 16 10 5 21' />
  </svg>
)

export const DeleteIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
  >
    <path d='M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
  </svg>
)

export const SaveIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
  >
    <path d='M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z' />
    <polyline points='17 21 17 13 7 13 7 21' />
    <polyline points='7 3 7 8 15 8' />
  </svg>
)

export const ResetIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
  >
    <path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' />
    <path d='M3 3v5h5' />
  </svg>
)