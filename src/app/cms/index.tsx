import { domainByCMS } from '@/constants/dtk';

import { useEffect } from 'react';

export default function CMS() {
  useEffect(() => {
    location.href = domainByCMS;
  }, []);
  return <div>cms</div>;
}
