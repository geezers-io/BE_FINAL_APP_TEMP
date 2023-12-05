const theme = {
  colors: {
    orange: {
      main: '#FF6000',
      sub01: '#FF9100',
      sub02: '#FFB600',
    },
    purple: {
      main: '#7678ED',
    },
    title: '#1E293B',
    paragraph: '#334155',
    sub: '#64748B',
    ghost: '#CBD5E1',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    h4: '26px',
  },
  boxShadow: {
    gnb: '0px -4px 24px 1px rgba(0, 0, 0, 0.04)',
    card: '0px 4px 8px 0px rgba(0, 0, 0, 0.04)',
  },
} as const;

export default theme;
