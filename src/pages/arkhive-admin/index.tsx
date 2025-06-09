import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function UserAccountPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/arkhive-admin/general-settings');
  }, [router]);

  return null;
}
