import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function UserAccountPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/user-account/personal-details');
  }, [router]);

  return null;
}
