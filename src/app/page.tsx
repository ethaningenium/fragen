import QuizPage from '@/components/ThirdLevel/QuizPage';
import SideMenu from '@/components/ThirdLevel/SideMenu';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex">
      <SideMenu />
      <QuizPage />
    </main>
  );
}
