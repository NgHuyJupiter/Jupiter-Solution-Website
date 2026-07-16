import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect root path to default locale (/vi)
  redirect('/vi');
}
