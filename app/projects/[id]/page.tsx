import ProjectDetailPage from "@/pages/ProjectDetailPage";

export default async function ProjectDetail({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return <ProjectDetailPage />;
}
