import { DashboardModulesClient } from '@/components/app/DashboardModulesClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modules — maformationcivique.fr',
};

export default function AppModulesPage() {
  return <DashboardModulesClient />;
}
