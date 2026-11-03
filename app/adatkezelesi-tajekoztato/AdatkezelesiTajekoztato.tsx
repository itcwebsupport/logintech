'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function AdatkezelesiTajekoztato({ gdprData }) {
  const router = useRouter();

  useEffect(() => {
    if (gdprData.status === 'error') {
      toast.error(gdprData.message);
      router.push('/');
    }
  }, []);

  if (gdprData.status === 'error') {
    return null;
  }

  return (
    <div className="container page-content">
      <h1 className="page-title">{ gdprData.data.name }</h1>
      <div dangerouslySetInnerHTML={{ __html: gdprData.data.description }}></div>
    </div>
  );
}
