import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { assertFound, DetailPageShell } from "@/lib/page-helpers";
import { getTeamMemberBySlug, teamMembers } from "@/data/team";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return {};
  return createMetadata({
    title: member.name,
    description: member.bio,
    path: `/team/${slug}`,
  });
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = assertFound(getTeamMemberBySlug(slug));

  return (
    <DetailPageShell
      title={member.name}
      breadcrumbs={[
        { label: "خانه", href: "/" },
        { label: "تیم", href: "/team" },
        { label: member.name },
      ]}
    >
      <div className="grid lg:grid-cols-[300px_1fr] gap-12">
        <Image
          src={member.image}
          alt={member.name}
          width={300}
          height={300}
          className="rounded-[20px] w-full"
        />
        <div>
          <p className="text-primary text-[1.6rem] mb-4">{member.role}</p>
          <p className="text-justify mb-6">{member.bio}</p>
          {member.email && (
            <a href={`mailto:${member.email}`} className="text-primary">
              {member.email}
            </a>
          )}
        </div>
      </div>
    </DetailPageShell>
  );
}
