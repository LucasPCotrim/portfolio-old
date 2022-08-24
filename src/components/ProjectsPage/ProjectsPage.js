import { ProjectsPageStyle } from './ProjectsPage.style';

export default function ProjectsPage({ pageRef }) {
  return (
    <>
      <ProjectsPageStyle ref={pageRef}>
        <div className="title-container">
          <h1>My Projects</h1>
        </div>
      </ProjectsPageStyle>
    </>
  );
}
