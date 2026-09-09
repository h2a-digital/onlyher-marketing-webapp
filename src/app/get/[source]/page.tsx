import { notFound, permanentRedirect } from 'next/navigation';
import { site } from '@/content/site';

const campaignRedirects = {
  // q9Lm2: site.store.campaigns.q9Lm2,
  // r8Xc4: site.store.campaigns.r8Xc4,
} as const;

type CampaignSource = keyof typeof campaignRedirects;

export function generateStaticParams() {
  return Object.keys(campaignRedirects).map((source) => ({ source }));
}

export default async function CampaignRedirectPage({
  params,
}: {
  params: Promise<{ source: string }>;
}) {
  const { source } = await params;
  const destination = campaignRedirects[source as CampaignSource];

  if (!destination) {
    notFound();
  }

  permanentRedirect(destination);
}
